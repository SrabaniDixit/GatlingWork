import org.gradle.api.DefaultTask
import org.gradle.api.tasks.TaskAction
import com.amazonaws.services.s3.AmazonS3Client
import com.amazonaws.AmazonServiceException
import groovy.transform.CompileStatic
import com.amazonaws.services.s3.transfer.MultipleFileDownload
import com.amazonaws.services.s3.transfer.TransferManager
import com.amazonaws.services.s3.transfer.TransferManagerBuilder

/**
 * DownloaderTask to download the .log files to the instance
 */
@CompileStatic
class DownloaderTask extends DefaultTask {

    @TaskAction
    void download() {
        // Need to replace with parameters
        final String reportDir = 'build/finalReport'

                /* groovylint-disable-next-line JavaIoPackageAccess */
        final File newDir = new File(reportDir)

        if (newDir.exists()) {
            newDir.deleteDir()
                } else {
            newDir.mkdirs()
        }

        S3ClientBuilder builder = new S3ClientBuilder()
        AmazonS3Client s3client = builder.s3client

        try {
            TransferManager xferMgr = TransferManagerBuilder
                                        .standard()
                                        .withS3Client(s3client)
                                        .build()
            try {
                MultipleFileDownload xfer = xferMgr.downloadDirectory(System.getenv('S3_BUCKET'),
                                                'simulation',
                                                /* groovylint-disable-next-line JavaIoPackageAccess */
                                                new File(reportDir))
                xfer.waitForCompletion()
                println('Downloaded Gatling log files from bucket')
                                        } catch (AmazonServiceException e) {
                println('Error downloading log files:' + e)
            }
            xferMgr.shutdownNow()
                        } catch (AmazonServiceException e) {
            println('Error Uploading Files:' + e)
        }
    }

}
