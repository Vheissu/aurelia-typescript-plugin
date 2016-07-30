# aurelia-typescript-plugin
A plugin skeleton for creating Aurelia plugins.

## Supported
- Sass for styling with CSSNano and Autoprefixer for cross-browser style prefixes
- Multiple module formats: commonjs, es2015, system and amd.
- Write plugins in TypeScript
- Definition files automatically generated using the TypeScript native compiler

## Structure
- `src` this is where your `.ts` files go. They get compiled into the respective `dist` folders for each module type.
- `dist` automatically transpiled/generated modules go in here, don't edit anything here.
- `styles` the root styles directory is where your styles go. These are then put into the `dist` folder so your modules can include/reference any styles.

## CommonJS Modules
Your module will by default be configured as a CommonJS module. The recommended approach at present is to expose all of your public imports/exports in your `src/index.ts` file to ensure that your plugin can be imported in the following format you might be used to:

```
import {SomeExport} from 'my-cool-plugin';
```

Your `src/index.ts` file might resemble the following (with your own exports, of course):

```
export * from './MyClass';
export * from './SomeFile';
export * from './utilities/MathUtils';
export * from './utilities/LanguageUtils';
```

This means when you import using the above format of which you might notice is how Aurelia libraries are consumed, you're taking the export from the `src/index.ts` file which gets transpiled to `dist/commonjs/index.js` and is reference in the `main` property inside of `package.json`.

## Webpack Support
If you want your module to work appropriately with Aurelia and Webpack, ensure you define in your `package.json` an Aurelia build resources map so the compiler knows where each file lives. This makes it easier for the end user consuming your package to use it without issue.
