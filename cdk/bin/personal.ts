#!/usr/bin/env node
import 'source-map-support/register';
import { App } from 'aws-cdk-lib';
import { PersonalStack } from '../lib/personal-stack';

const app = new App();
new PersonalStack(app, 'PersonalStack');
