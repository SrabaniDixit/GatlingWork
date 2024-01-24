import com.amazonaws.services.s3.AmazonS3Client
import com.amazonaws.AmazonClientException
import com.amazonaws.auth.BasicAWSCredentials
import com.amazonaws.ClientConfiguration
import groovy.transform.CompileStatic
import com.amazonaws.Protocol

/**
 * Helper class to obtain an S3 Client
 */
@CompileStatic
class S3ClientBuilder {

        static AmazonS3Client s3client

        // Constructor
        S3ClientBuilder() {
                System.properties['SDKGlobalConfiguration.ENABLE_S3_SIGV4_SYSTEM_PROPERTY', false]
                String key = System.getenv('AWS_ACCESS_KEY_ID')
                String secret = System.getenv('AWS_SECRET_ACCESS_KEY')

                BasicAWSCredentials credentials = new BasicAWSCredentials(key, secret)
                ClientConfiguration clientConfig = new ClientConfiguration()
                if (System.getenv('HTTP') == '1') {
                        println('Using HTTP Protocol for S3 Client')
                        clientConfig.Protocol = Protocol.HTTP
                } else {
                        clientConfig.Protocol = Protocol.HTTPS
                }

                try {
                        s3client = new AmazonS3Client(credentials, clientConfig)

                        s3client.endpoint = System.getenv('S3_CLIENT_ENDPOINT')
                        } catch (AmazonClientException ex) {
                        println('Error connecting:' + ex)
                }
        }
        static AmazonS3Client getS3Client() {
                return (s3client)
        }

}