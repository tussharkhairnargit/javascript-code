# typescript-module

A small TypeScript module written with strict TypeScript settings.

## Installation

Install dependencies with:

```bash
npm install
```

## Build

Compile the TypeScript source into the `dist` directory:

```bash
npm run build
```

## Project structure

```text
src/
  index.ts  # Public package entry point
  domain/
    role.ts # Role values and validation helper
```

## Role utilities

The role module provides the available roles and a validation helper:

```ts
import { isValidRole, roles } from './src/domain/role';

console.log(roles); // [ 'ADMIN', 'USER', 'GUEST' ]
console.log(isValidRole('ADMIN')); // true
console.log(isValidRole('OWNER')); // false
```

## Module configuration

The project uses `moduleResolution: "Bundler"` with `module: "ESNext"`. This allows extensionless TypeScript source imports such as:

```ts
import { isValidRole } from './domain/role';
```

The source does not need to use `.js` extensions.

## Package configuration

The main package settings are defined in `package.json`:

```json
{
  "name": "typescript-module",
  "version": "1.0.0",
  "type": "module",
  "main": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/index.js"
    }
  }
}
```

- `name` is the package name used by consumers.
- `version` identifies the package release.
- `type: "module"` enables ECMAScript module behavior for generated JavaScript.
- `main` is the traditional JavaScript entry point.
- `types` points TypeScript to the generated declaration file.
- `exports` defines the public package API and exposes only the package root.

Consumers should import from the package root:

```ts
import { isValidRole, roles } from 'typescript-module';
```

The internal role module is used by `src/index.ts` but is not intended to be imported as a package subpath.

The `build` script runs `tsc`, which reads `tsconfig.json` and generates JavaScript, declaration files, and source maps in `dist`.
