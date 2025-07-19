const cdk = require('aws-cdk-lib');
const { Bucket, BucketAccessControl } = require('aws-cdk-lib/aws-s3');
const { CloudFrontWebDistribution, OriginAccessIdentity } = require('aws-cdk-lib/aws-cloudfront');
const { S3Origin } = require('aws-cdk-lib/aws-cloudfront-origins');
const { BucketDeployment, Source } = require('aws-cdk-lib/aws-s3-deployment');
const path = require('path');

class PersonalSiteStack extends cdk.Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    const siteBucket = new Bucket(this, 'SiteBucket', {
      accessControl: BucketAccessControl.PRIVATE,
      websiteIndexDocument: 'index.html',
      websiteErrorDocument: 'index.html'
    });

    const oai = new OriginAccessIdentity(this, 'OAI');
    siteBucket.grantRead(oai);

    const distribution = new CloudFrontWebDistribution(this, 'SiteDistribution', {
      originConfigs: [
        {
          s3OriginSource: {
            s3BucketSource: siteBucket,
            originAccessIdentity: oai
          },
          behaviors: [{ isDefaultBehavior: true }]
        }
      ]
    });

    new BucketDeployment(this, 'DeployWebsite', {
      sources: [Source.asset(path.join(__dirname, '../../site'))],
      destinationBucket: siteBucket,
      distribution,
      distributionPaths: ['/*']
    });
  }
}

module.exports = { PersonalSiteStack };
