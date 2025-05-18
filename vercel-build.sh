#!/bin/bash

# Run the build
npm run build

# Ensure assets are copied to the correct location
mkdir -p dist/src/assets
cp -r client/src/assets/* dist/src/assets/

# Ensure we have a fallback for SPA routing
echo "/* /index.html 200" > dist/_redirects