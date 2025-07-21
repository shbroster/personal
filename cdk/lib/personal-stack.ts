import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { Distribution, OriginAccessIdentity } from 'aws-cdk-lib/aws-cloudfront';
import { S3Origin } from 'aws-cdk-lib/aws-cloudfront-origins';
import { BucketDeployment, Source } from 'aws-cdk-lib/aws-s3-deployment';
import { join } from 'path';

export class PersonalStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const siteBucket = new Bucket(this, 'SiteBucket', {
      websiteIndexDocument: 'index.html',
      publicReadAccess: false,
    });

    const oai = new OriginAccessIdentity(this, 'OAI');
    siteBucket.grantRead(oai);

    const distribution = new Distribution(this, 'Distribution', {
      defaultBehavior: { origin: new S3Origin(siteBucket, { originAccessIdentity: oai }) },
    });

    new BucketDeployment(this, 'DeployWebsite', {
      sources: [Source.asset(join(__dirname, '../../frontend/dist'))],
      destinationBucket: siteBucket,
      distribution,
    });
  }
}
