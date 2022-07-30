# AngularAbsolutePath

### tsconfig.json example
```
{
  "compileOnSave": false,
  "compilerOptions": {
    "baseUrl": "./",
    // each specific paths define as below
    "paths": {
      "@environments/*": ["./src/environments/*"],
      "@models/*": ["./src/app/shared/models/*"],
      "@services/*": ["./src/app/shared/services/*"]
    },
    ...
  },
}
```