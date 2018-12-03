# aurelia-typescript-plugin
A plugin skeleton for creating Aurelia plugins written using TypeScript. Supports testing, different formats and more.

## Aurelia TypeScript Skeleton
- Supports multiple module formats including; AMD, CommonJS, Native modules and more
- Works with Aurelia CLI, Webpack and JSPM based Aurelia applications
- Build an Aurelia plugin using TypeScript
- Supports testing using Jest
- Supports linting using TSLint
- Automatically handles copying of assets including; HTML, CSS and JSON
- Comes configured with support for SCSS

## Scripts
Run the following Node scripts defined in the `package.json` file to perform linting, testing, building and more.

**Lint:** `yarn lint`
**Test:** `yarn test`
**Build**: `yarn build`

There are more scripts defined in the `package.json` file if you want greater control over the build process and other aspects of this plugin.

## Structure
- `src` this is where your `.ts` files go. They get compiled into the respective `dist` folders for each module type.
- `dist` automatically transpiled/generated modules go in here, don't edit anything here.
- `styles` the root styles directory is where your styles go. These are then put into the `dist` folder so your modules can include/reference any styles.

## Aurelia CLI Support
This plugin skeleton exports an AMD module format which the Aurelia CLI currently consumes.

```
"dependencies": [
  {
    "name": "my-cool-package",
    "path": "../node_modules/my-cool-package/dist/amd",
    "main": "somefile",
    "env": "dev"
  }
]
```
