#!/usr/bin/env node
const { program } = require('commander');
const { execSync } = require('child_process');

program
  .command('new <name>')
  .description('Create a new repository with toolkit infrastructure')
  .action((name) => {
    // Logic to set up a new repository with the given name
    // For example, you can use child_process to run shell commands:
    execSync(`git clone https://github.com/IsaacCDHall/toolkit ${name}`);
    // ... any other setup logic ...
  });

program.parse(process.argv);
