# Personal Website

This repository contains a minimal React site with native dark mode and an AWS CDK stack that deploys the static site to S3 and serves it via CloudFront. The frontend uses Tailwind CSS for styling.

## Structure

- `frontend/` – React application.
- `cdk/` – AWS CDK deployment scripts.

## Building the site

```bash
cd frontend
npm install
npm run build
```

## Deploying

```bash
cd ../cdk
npm install
cdk deploy
```
