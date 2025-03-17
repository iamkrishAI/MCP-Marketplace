#!/bin/bash

# Build the project with proper base path
GITHUB_REPOSITORY="iamkrishAI/MCP-Marketplace" NODE_ENV=production npm run build

# Create .nojekyll file to prevent Jekyll processing
touch out/.nojekyll

# Copy CNAME file to the output directory
cp public/CNAME out/

# Initialize gh-pages branch if it doesn't exist
if ! git show-ref --quiet refs/heads/gh-pages; then
  git checkout --orphan gh-pages
  git rm -rf .
  git commit --allow-empty -m "Initialize gh-pages branch"
  git checkout main
fi

# Deploy to GitHub Pages
echo "Deploying to GitHub Pages..."
git add -f out/
git commit -m "Deploy to GitHub Pages"
git subtree push --prefix out origin gh-pages

echo "Deployment complete! Your site should be available at https://iamkrishai.github.io/MCP-Marketplace/"
