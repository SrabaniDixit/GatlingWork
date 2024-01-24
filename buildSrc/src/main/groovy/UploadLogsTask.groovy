import org.gradle.api.DefaultTask
import org.gradle.api.tasks.TaskAction
import com.amazonaws.services.s3.AmazonS3Client
import com.amazonaws.AmazonServiceException
import com.amazonaws.services.s3.transfer.Upload
import com.amazonaws.services.s3.transfer.TransferManager
import com.amazonaws.services.s3.transfer.TransferManagerBuilder
import groovy.transform.CompileStatic
import groovy.io.FileType
import java.time.Instant

/**
 * UploaderTask to upload Gatlng simulation log files to Nebula S3 Storage
 */
@CompileStatic
class UploadLogsTask extends DefaultTask {

        @TaskAction
        void upload() {
                List list = []

                /* groovylint-disable-next-line JavaIoPackageAccess */
                File dir = new File('build/reports/gatling')
                dir.eachFileRecurse(FileType.DIRECTORIES) { file -> list << file }
                String firstDir = list[0]
                final String simulationFile = 'simulation'
                String file = simulationFile + '_' + Instant.now().toEpochMilli() + '.log'
                println('file = ' + file)

                S3ClientBuilder builder = new S3ClientBuilder()
                AmazonS3Client s3client = builder.s3client

                println(firstDir + simulationFile)
                TransferManager xferMgr = TransferManagerBuilder.standard().withS3Client(s3client).build()
                try {
                        println('TARGET BUCKET:' + System.getenv('S3_BUCKET'))
                        Upload xfer = xferMgr.upload(System.getenv('S3_BUCKET'),
                                        file,
                                        /* groovylint-disable-next-line JavaIoPackageAccess */
                                        new File(firstDir + '/' + simulationFile + '.log'))
                        xfer.waitForCompletion()
                        } catch (AmazonServiceException e) {
                        println('Error Uploading Files:' + e)
                }
                xferMgr.shutdownNow()
        }

}
