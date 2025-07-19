#!/usr/bin/env node
const cdk = require('aws-cdk-lib');
const { PersonalSiteStack } = require('../lib/personal-site-stack');

const app = new cdk.App();
new PersonalSiteStack(app, 'PersonalSiteStack', {});
