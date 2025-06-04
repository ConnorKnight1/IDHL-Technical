# IDHL-Technical

# Webpack

## Project uses Webpack to handle multiple front-end workflows. 

# 1. Module Bundling - compiles JS files into single bundle.js
# 2. SASS Precompilation - Converts scss files to CSS using sass loader.
# 3. Dev Server - webpack-dev-server servers site with live reloading.
# 4. HTML Handling - Auto injects final CSS/JS into index.html using html-webpack-plugin
# 5. Output Management - Cleans and writes compiled files to dist/ folder.

### NPM Scripts

# npm run start
# 1. Starts Development server using webpack-dev-server 
# 2. Watches for file changes 
# 3. Rebuilds / Reloads browser automatically if there's changes to files.

# npm run build
# 1. Runs webpack in either 'dev' or 'prod'
# 2. Read config from webpack.config.js 
# 3. Complies all source files 
# 4. Outputs final files within dist/ directory 

