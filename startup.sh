#!/bin/bash
echo "Removing node_modules"
rm -r node_modules

echo "Installing dependencies"
npm install --no-optional

echo "Startup commands are completed successfully"
bash
