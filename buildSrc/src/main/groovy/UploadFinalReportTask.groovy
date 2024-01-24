import org.gradle.api.DefaultTask
import org.gradle.api.tasks.TaskAction
import com.amazonaws.services.s3.AmazonS3Client
import com.amazonaws.AmazonServiceException
import com.amazonaws.services.s3.transfer.Upload
import com.amazonaws.services.s3.transfer.TransferManager
import com.amazonaws.services.s3.transfer.TransferManagerBuilder
import groovy.transform.CompileStatic
import java.time.Instant
import java.time.format.DateTimeFormatter
import java.time.ZoneId
import org.zeroturnaround.zip.ZipUtil

/**
 * Uploader Task to upload Gatlng HTML results file to Nebula S3 Storage
 */
@CompileStatic
class UploadFinalReportTask extends DefaultTask {

        @TaskAction
        void upload() {
                // Create a date string for the report name
                DateTimeFormatter formatter = DateTimeFormatter.ofPattern('ddMMYYYY_HHmm_ss')
                                .withZone(ZoneId.systemDefault())
                String dateStr = formatter.format(Instant.now())
                String targetFile = 'report_' + dateStr + '.zip'
                /* groovylint-disable-next-line JavaIoPackageAccess */
                ZipUtil.pack(new File('build/finalReport'), new File(targetFile))
                println('Zipped report file')

                S3ClientBuilder builder = new S3ClientBuilder()
                AmazonS3Client s3client = builder.s3client
                TransferManager xferMgr = TransferManagerBuilder.standard().withS3Client(s3client).build()
                try {
                        Upload xfer = xferMgr.upload(System.getenv('S3_BUCKET'),
                                         targetFile,
                                         /* groovylint-disable-next-line JavaIoPackageAccess */
                                         new File(targetFile))
                        xfer.waitForCompletion()
                        } catch (AmazonServiceException e) {
                        println('Error Uploading Files:' + e)
                }
                xferMgr.shutdownNow()
        }

}
