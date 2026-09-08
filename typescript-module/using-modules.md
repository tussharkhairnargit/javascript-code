# Reusing This Module

This project can be reused from another application, including an Angular application, without publishing it to npm.

Before using the module, build it:

```powershell
cd E:\Code\javascript-code\typescript-module
npm run build
```

The build creates the `dist` directory used by consuming applications.

## Method 1: Install from a local path

Use this method to install the module as a local dependency.

If the projects are on different drives, use the absolute path to this project. Run the command from the consuming application:

```powershell
cd D:\projects\angular-app
npm install "E:\Code\javascript-code\typescript-module"
```

npm reads this project's `package.json` and installs it using the package name:

```text
node_modules/typescript-module
```

Then import the public API from the package root:

```ts
import { isValidRole, roles } from 'typescript-module';
```

Do not import internal files such as `typescript-module/domain/role`.

After changing this module, rebuild it and install it again:

```powershell
cd E:\Code\javascript-code\typescript-module
npm run build

cd D:\projects\angular-app
npm install "E:\Code\javascript-code\typescript-module"
```

## Method 2: Link with `npm link`

Use this method during active development. It creates a link from the consuming application to the local module, so * you do not need to reinstall the package after every change. *

Register the module globally from its project directory:

```powershell
cd E:\Code\javascript-code\typescript-module
npm link
```

Link it into the consuming application:

```powershell
cd D:\projects\angular-app
npm link typescript-module
```

Import it in the Angular application:

```ts
import { isValidRole, roles } from 'typescript-module';
```

Rebuild the module after source changes:

```powershell
cd E:\Code\javascript-code\typescript-module
npm run build
```

Remove the link when it is no longer needed:

```powershell
cd D:\projects\angular-app
npm unlink typescript-module
```

## Method 3: Create a package with `npm pack`

Use `npm pack` when you want to test or transfer the exact package archive that would be published to npm. It creates a `.tgz` file without publishing anything.

Build the module and create the archive:

```powershell
cd E:\Code\javascript-code\typescript-module
npm run build
npm pack
```

This creates an archive similar to:

```text
typescript-module-1.0.0.tgz
```

Install that archive in the consuming application. An absolute path works when the projects are on different drives:

```powershell
cd D:\projects\angular-app
npm install "E:\Code\javascript-code\typescript-module\typescript-module-1.0.0.tgz"
```

The Angular application can then use the package normally:

```ts
import { isValidRole, roles } from 'typescript-module';
```

`npm pack` is useful because it verifies the files included in the package, the `package.json` entry points, and the generated `dist` output. It is closer to a real published-package installation than installing directly from the source folder.

## Which method should I use?

- Use a local path install for a normal local dependency or a repeatable project setup.
- Use `npm link` for active development when the library and consuming application are changing together.
- Use `npm pack` to test or share a versioned package archive before publishing.

All three methods use the package configuration in `package.json` and expose the package through the root import:

```ts
import { isValidRole, roles } from 'typescript-module';
```
