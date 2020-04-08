# Webpack/TS Resolve Problem

Package `toplevel` requires `secondlevel`
Package `secondlevel` requires `firstlevel`

Build of package `toplevel` fails with:

```text
ERROR in ./node_modules/secondlevel/dist/index.mjs 1:73-74
Can't import the named export 'FirstLevel' from non EcmaScript module (only default export is available)
 @ ./src/index.ts
```

### Steps to reproduce:

```shell script
cd firstlevel
npm install
npm pack
cd ../secondlevel
npm install
npm pack
cd ../toplevel
npm install
npm run build
```
