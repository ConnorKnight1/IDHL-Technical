# IDHL Technical

## Webpack Setup

This project uses **Webpack** to manage multiple front-end workflows.

### Key Features

1. **Module Bundling**  
   Compiles JavaScript files into a single `bundle.js`.

2. **SASS Precompilation**  
   Converts `.scss` files to CSS using `sass-loader`.

3. **Development Server**  
   Uses `webpack-dev-server` to serve the site with live reloading.

4. **HTML Handling**  
   Automatically injects compiled CSS and JS into `index.html` using `html-webpack-plugin`.

5. **Output Management**  
   Cleans and writes compiled files to the `dist/` folder.

---

## NPM Scripts

### `npm run start`

- Starts the development server using `webpack-dev-server`.
- Watches for file changes.
- Rebuilds and reloads the browser automatically on changes.

### `npm run build`

- Runs Webpack in either development or production mode.
- Uses configuration from `webpack.config.js`.
- Compiles all source files.
- Outputs final files to the `dist/` directory.

---

## Cart Script

For an explanation of how the cart script works, refer to the following files:

- `index.html`
- `LoadModules.js`
- `cart.js`
- `cart.scss`
