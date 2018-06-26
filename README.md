# angular-aot-example

A test project for creating a angular 2+ library and app without angular-cli
### component-lib
Contains a library with a button.
``` 
npm run build && npm pack
```
It uses ngc to create the metadata for the AOT compiler and webpack to create the bundle
### app
Contains a app that uses the component-lib (and others...)

```
npm start
```
