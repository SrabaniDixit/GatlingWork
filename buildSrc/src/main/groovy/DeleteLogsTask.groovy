
import com.amazonaws.AmazonServiceException
import com.amazonaws.SdkClientException
import com.amazonaws.services.s3.model.ObjectListing
import com.amazonaws.services.s3.model.S3ObjectSummary
import groovy.transform.CompileStatic
import com.amazonaws.services.s3.AmazonS3Client
import org.gradle.api.DefaultTask
import org.gradle.api.tasks.TaskAction
import com.amazonaws.services.s3.model.DeleteObjectRequest

/**
 * Delete the existing simulation log files in Nebula S3 storage
 */
@CompileStatic
class DeleteLogsTask extends DefaultTask {

        @TaskAction
        void deleteLogs() {
                S3ClientBuilder builder = new S3ClientBuilder()
                AmazonS3Client s3client = builder.s3client
                ObjectListing objects = s3client.listObjects(System.getenv('S3_BUCKET'))
                do {
                        for (S3ObjectSummary objectSummary : objects.objectSummaries) {
                                if (objectSummary.key =~ /simulation/) {
                                        try {
                                                s3client.deleteObject(
                                                new DeleteObjectRequest(System.getenv('S3_BUCKET'), objectSummary.key))
                                                        } catch (AmazonServiceException e) {
                                                println('Error handling request' + e)
                                        } catch (SdkClientException e) {
                                                println('Client Request failed:' + e)
                                        }
                                }
                        }
                        objects = s3client.listNextBatchOfObjects(objects)
                } while (objects.truncated);
        }

}