# aurelia-typescript-plugin

A simple plugin skeleton for creating Aurelia plugins written using TypeScript.

## Aurelia TypeScript Skeleton

-   Build an Aurelia plugin using TypeScript
-   Supports all module formats including; AMD, CommonJS, SystemJS, ES2015 and Native Modules
-   Supports testing using Jest
-   Supports linting using TSLint
-   Prettier for code formatting
-   Automatically handles copying of assets including; HTML, CSS and JSON

## Scripts

Run the following Node scripts defined in the `package.json` file to perform linting, testing, building and more.

**Lint:** `yarn lint`

**Test:** `yarn test`

**Build**: `yarn build`

There are more scripts defined in the `package.json` file if you want greater control over the build process and other aspects of this plugin.

## Structure

-   `src` this is where your `.ts` files go. They get compiled into the respective `dist` folders for each module type.
-   `dist` automatically transpiled/generated modules go in here, don't edit anything here.
