#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const [_, _n, project] = process.argv;
const currentDir = process.cwd();

let jsonTemplate = JSON.parse(fs.readFileSync(`${currentDir}/package.json`, 'utf8'));
jsonTemplate.name = project.replace('/','-');
jsonTemplate.version = '1.0.0';
jsonTemplate.description = `Hey ${project}! A fancy description goes here`;
jsonTemplate.repository.url = `git+https://github.com/${project}.git`;
jsonTemplate.bugs.url = `https://github.com/${project}/issues`;
jsonTemplate.homepage = `https://github.com/${project}#README`;;
fs.writeFileSync(`package.json`, JSON.stringify(jsonTemplate));

let mdTemplate = '';
mdTemplate += `# Project ${project} \n`;
mdTemplate += `Hey ${project}! A fancy description goes here \n`;
mdTemplate += `## First Step \n`;
mdTemplate += "Run `node start-here.ts {package name`, for example: \n";
mdTemplate += "```node start-here.ts danielnaranjo/hello-world```\n";
mdTemplate += `## Start coding\n`;
mdTemplate += `Ladies and Gentlemen, you know what to do. \n`;
mdTemplate += `## VIP  - Very Important Part \n`;
mdTemplate += `Please, follow those steps to [host a private NPM packages](https://andreybleme.com/2020-05-31/hosting-private-npm-packages-for-free/) for free on GitHub. If you did this step, please omit it.\n`;
mdTemplate += `## To the space and beyond\n`;
mdTemplate += "Run `npm publish`\n \n \n \n \n";

mdTemplate += `Based on [Daniel Naranjo](https://twitter.com/naranjodaniel) starter kit\n`;
fs.writeFileSync(`README.md`, mdTemplate);
