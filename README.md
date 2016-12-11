# aurelia-typescript-plugin
A plugin skeleton for creating Aurelia plugins. This plugin is based off of some code from the official Aurelia setup used for newer plugins written in TypeScript. It strenghtens upon ideas from my original plugin, with less bloat.

## Supported
- [x] Multiple module formats: commonjs, es2015, system and amd.
- [x] Write plugins in TypeScript
- [x] Definition files automatically generated using the TypeScript native compiler
- [x] Implement testing
- [x] Implement better linting
- [x] Better definition generation and singular index.js export strategy

## Todo
- [ ] Implement support for Wallaby.js
- [ ] Implement code coverage

## Structure
- `src` this is where your `.ts` files go. They get compiled into the respective `dist` folders for each module type.
- `dist` automatically transpiled/generated modules go in here, don't edit anything here.
- `styles` the root styles directory is where your styles go. These are then put into the `dist` folder so your modules can include/reference any styles.

## Webpack Support
If you want your module to work appropriately with Aurelia and Webpack, ensure you define in your `package.json` an Aurelia build resources map so the compiler knows where each file lives. This makes it easier for the end user consuming your package to use it without issue.

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
