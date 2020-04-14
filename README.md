# Webpack/TS Resolve Problem

Package `toplevel` requires `secondlevel`
Package `secondlevel` requires `firstlevel`

Build of package `toplevel` fails with:

```text
ERROR in ./node_modules/secondlevel/dist/index.mjs 1:73-74
Can't import the named export 'FirstLevel' from non EcmaScript module (only default export is available)
 @ ./src/index.ts
```

### When it fails?

When ever the extension of the module is mjs, like index.mjs or index.module.mjs it fails:

```json
{
  "main": "dist/index.js",
  "module": "dist/index.mjs"
}
```
and also
```json
{
  "main": "dist/index.js",
  "module": "dist/index.module.mjs"
}
```

### When does it work?

When the extension of the module is set to js.

```json
{
  "main": "dist/index.js",
  "module": "dist/index.module.js"
}
```
**OR** when building with **Webpack 5 Beta** then it also works with .mjs extensions. 

### Steps to reproduce:

```shell script
cd firstlevel
rm -rf node_modules package-lock.json
npm install
npm pack
cd ../secondlevel
rm -rf node_modules package-lock.json
npm install
npm pack
cd ../toplevel
rm -rf node_modules package-lock.json
npm install
npm run build
```

