import io.gatling.javaapi.core.ChainBuilder;
import io.gatling.javaapi.core.Simulation;
import io.gatling.javaapi.http.HttpProtocolBuilder;
import io.gatling.javaapi.core.ScenarioBuilder;
import static io.gatling.javaapi.core.CoreDsl.StringBody;
import static io.gatling.javaapi.core.CoreDsl.*;
import static io.gatling.javaapi.http.HttpDsl.*;
import java.lang.String;
import java.util.List;
import java.util.Random;

public class ProductManagementSimulation extends Simulation {

    public HttpProtocolBuilder httpProtocol = http
            .baseUrl("https://demostore.gatling.io/api")
            .acceptHeader("application/json")
            .contentTypeHeader("application/json");

    public ChainBuilder listofcategories =
            exec(
                    http("List all categories")
                            .get("/category")
                            .check(status().is(200))
                            .check(jsonPath("$[*].id").findAll().saveAs("allCategoriesId"))
                            .check(jsonPath("$[*].name").findAll().saveAs("allCategoriesName"))
            ).exec(session -> {
                List<String> categoriesId = session.get("allCategoriesId");
                List<String> categoriesName = session.get("allCategoriesName");

                for (int i = 0; i < categoriesId.size(); i++) {
                    System.out.println("Category ID: " + categoriesId.get(i) + ", Name: " + categoriesName.get(i));
                }

                return session;
            });

    public ChainBuilder selectRandomCategory = exec(session -> {
        List<String> allCategories = session.get("allCategoriesId");
        String selectedCategory= "";
        if (!allCategories.isEmpty()) {
             selectedCategory = allCategories.get(new Random().nextInt(allCategories.size()));
            //session.set("selectedCategory", selectedCategory);
            System.out.println("Selected category id: " + selectedCategory);
        } else {
            System.err.println("No categories found.");
        }
        return session.set("selectedCategory", selectedCategory);
    });
    public ChainBuilder listofproducts = doIf(session -> session.contains("selectedCategory")).then(
            exec(session -> {
                String selectedCategory = session.get("selectedCategory");
                String url = "/product?categoryId=" + selectedCategory;
                return session.set("url", url);
            })
                    .exec(http("List all products")
                            .get(session -> session.getString("url"))
                            .check(status().is(200))
                            .check(jsonPath("$[*].id").findAll().saveAs("allProductsId"))
                            .check(jsonPath("$[*].name").findAll().saveAs("allProductsName"))
                    )
                    .exec(session -> {
                        List<String> productsId = session.get("allProductsId");
                        List<String> productsName = session.get("allProductsName");

                        for (int i = 0; i < productsId.size(); i++) {
                            System.out.println("Product ID: " + productsId.get(i) + ", Name: " + productsName.get(i));
                        }

                        return session;
                    })
    );

    public ChainBuilder selectRandomProduct = exec(session -> {
        List<String> allProducts = session.get("allProductsId");
        String selectedProduct= "";
        if (!allProducts.isEmpty()) {
            selectedProduct = allProducts.get(new Random().nextInt(allProducts.size()));
            //session.set("selectedCategory", selectedCategory);
            System.out.println("Selected product Id: " + selectedProduct);
        } else {
            System.err.println("No product found.");
        }
        return session.set("selectedProduct", selectedProduct);
    });
    public ChainBuilder updateProduct = doIf(session -> session.contains("selectedProduct")).then(
            exec(session -> {

                String selectedProduct = session.get("selectedProduct");
                String url = "/product/" + selectedProduct;
                return session.set("url", url);
            })
                    .exec(
                            http("Get Product Details Before Update")
                                    .get(session -> "/product/" + session.get("selectedProduct"))
                                    .header("Authorization", "Bearer ${authToken}")
                                    .check(status().is(200))
                                    .check(jsonPath("$.name").saveAs("beforeUpdateName"))
                                    .check(jsonPath("$.description").saveAs("beforeUpdateDescription"))
                                    .check(jsonPath("$.image").saveAs("beforeUpdateImage"))
                                    .check(jsonPath("$.price").saveAs("beforeUpdatePrice"))
                    )
                    .exec(
                            http("Update a product")
                                    .put(session -> session.getString("url"))
                                    .header("Authorization", "Bearer ${authToken}")
                                    .body(StringBody(
                                            "{" +
                                                    "  \"name\": \"Blue Glasses\"," +
                                                    "  \"description\": \"Blue Glasses\"," +
                                                    "  \"image\": \"blue-glasses.jpg\"," +
                                                    "  \"price\": \"9\"," +
                                                    "  \"categoryId\": ${selectedCategory}" +
                                                    "}"))
                                    .check(status().is(200))
                                    .check(jsonPath("$.name").saveAs("afterUpdateName"))
                                    .check(jsonPath("$.description").saveAs("afterUpdateDescription"))
                                    .check(jsonPath("$.image").saveAs("afterUpdateImage"))
                                    .check(jsonPath("$.price").saveAs("afterUpdatePrice"))


                    )
                    .exec(session -> {
                        String beforeUpdateName = session.get("beforeUpdateName");
                        String beforeUpdateDescription = session.get("beforeUpdateDescription");
                        String beforeUpdateImage = session.get("beforeUpdateImage");
                        String beforeUpdatePrice = session.get("beforeUpdatePrice");

                        System.out.println("Product Details Before Update:");
                        System.out.println("  Name: " + beforeUpdateName);
                        System.out.println("  Description: " + beforeUpdateDescription);
                        System.out.println("  Image: " + beforeUpdateImage);
                        System.out.println("  Price: " + beforeUpdatePrice);

                        String afterUpdateName = session.get("afterUpdateName");
                        String afterUpdateDescription = session.get("afterUpdateDescription");
                        String afterUpdateImage = session.get("afterUpdateImage");
                        String afterUpdatePrice = session.get("afterUpdatePrice");

                        System.out.println("Product Details After Update:");
                        System.out.println("  Name: " + afterUpdateName);
                        System.out.println("  Description: " + afterUpdateDescription);
                        System.out.println("  Image: " + afterUpdateImage);
                        System.out.println("  Price: " + afterUpdatePrice);

                        return session;
                    })
    );

    public ChainBuilder createProduct = doIf(session -> session.contains("selectedCategory")).then(
            exec(session -> {
                String selectedCategory = session.get("selectedCategory");
                return session.set("selectedCategory", selectedCategory);
            })
                    .exec(
                            repeat(3, "n").on(

                                            exec(
                                                    http("Create a product - ${n}")
                                                            .post("/product")
                                                            .header("Authorization", "Bearer ${authToken}")
                                                            .body(StringBody(
                                                                    "{" +
                                                                            "\"name\": \"Glasses\"," +
                                                                            "\"description\": \"Fragile\"," +
                                                                            "\"image\": \"img.jpg\"," +
                                                                            "\"price\": \"88\"," +
                                                                            "\"categoryId\": ${selectedCategory}" +
                                                                            "}"))
                                                            .check(status().is(200))
                                                            .check(jsonPath("$.name").saveAs("productName"))
                                                            .check(jsonPath("$.description").saveAs("productDescription"))
                                                            .check(jsonPath("$.image").saveAs("productImage"))
                                                            .check(jsonPath("$.price").saveAs("productPrice"))


                                            )
                            )
                    )
                    .exec(session -> {
                        for (int i = 1; i <= 3; i++) {
                            String productName = session.get("productName")+Integer.toString(i) ;
                            String productDescription = session.get("productDescription" )+Integer.toString(i);
                            String productImage = session.get("productImage" )+Integer.toString(i);
                            String productPrice = session.get("productPrice" )+Integer.toString(i);
                            System.out.println("Created Product " + i + " Details:");
                            System.out.println("  Name: " + productName);
                            System.out.println("  Description: " + productDescription);
                            System.out.println("  Image: " + productImage);
                            System.out.println("  Price: " + productPrice);

                        }
                        return session;
                    })
    );

    public ChainBuilder getAuthenticationToken = exec(
            http("Get authentication token")
                    .post("/authenticate")
                    .body(StringBody("{" +
                            "\"username\": \"admin\"," +
                            "\"password\": \"admin\"" +
                            "}"))
                    .check(status().is(200))
                    .check(jsonPath("$.token").saveAs("authToken"))
    );

    public ScenarioBuilder scn = scenario("Complete Scenario")
            .exec(listofcategories)
            .exec(selectRandomCategory)
            .exec(listofproducts)
            .exec(selectRandomProduct)
            .exec(getAuthenticationToken)
            .exec(updateProduct)
            .exec(createProduct);

    {
        setUp(
                scn.injectOpen(atOnceUsers(1))
        ).protocols(httpProtocol);
    }
}
