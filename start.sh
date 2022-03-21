#!/bin/bash

# Stop script on error
set -e

echo "Installing dependencies..."
npm install

echo "Building..."
npm run build

echo "Deploying..."
npm run start
