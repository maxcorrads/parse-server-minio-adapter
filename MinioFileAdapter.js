var AWS = require("aws-sdk");
var S3Adapter = require('@parse/s3-files-adapter');

class MinioFileAdapter extends S3Adapter {
  constructor(...args) {
    //Set Minio EndPoint
    const minioEndpoint = new AWS.Endpoint(process.env.MINIO_ENDPOINT);
    
    //Define S3 options
    var s3Options = {
      bucket: process.env.MINIO_BUCKET_NAME,
      baseUrl: process.env.MINIO_BASE_URL,
      region: process.env.MINIO_REGION,
      bucketPrefix: process.env.MINIO_BUCKET_PREFIX,
      s3overrides: {
        accessKeyId: process.env.MINIO_ACCESS_KEY,
        secretAccessKey: process.env.MINIO_SECRET_KEY,
        endpoint: minioEndpoint
      }
    };
    super(s3Options);
  }
}

module.exports = MinioFileAdapter;
module.exports.default = MinioFileAdapter;
