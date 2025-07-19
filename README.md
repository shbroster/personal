# Personal Website

This repository contains a simple personal website built with React and a sample AWS CDK app to deploy it to an S3 bucket fronted by CloudFront.

## Site

The site is located in the `site/` directory. It uses React from a CDN and supports dark mode out of the box via the `prefers-color-scheme` media query.

To test locally, open `site/index.html` in a browser. Edit `js/main.js` to change the name, links, CV and project information.

## CDK Deployment

The CDK application lives in the `cdk/` directory and creates:

- an S3 bucket for static hosting,
- a CloudFront distribution serving content from the bucket,
- a deployment step that uploads the files from `site/` to the bucket and invalidates the distribution.

### Prerequisites

Install dependencies (requires internet access):

```bash
cd cdk
npm install
```

Bootstrap your environment and deploy:

```bash
npx cdk bootstrap
npx cdk deploy
```

The output will include the CloudFront distribution domain where the website will be hosted.
