![OpenUI5 logo](http://openui5.org/images/OpenUI5_new_big_side.png)

# openui5-sample-app
> [OpenUI5](https://github.com/SAP/openui5) sample app using the [UI5 Tooling](https://github.com/SAP/ui5-tooling).

## Prerequisites
- The **UI5 CLI** of the [UI5 Tooling](https://github.com/SAP/ui5-tooling#installing-the-ui5-cli).
    - For installation instructions please see: [Installing the UI5 CLI](https://github.com/SAP/ui5-tooling#installing-the-ui5-cli).

## Getting started
1. Clone this repository and navigate into it
    ```sh
    git clone https://github.com/SAP/openui5-sample-app.git
    cd openui5-sample-app
    ```
1. Install all dependencies
    ```sh
    npm install
    ```

1. Start a local server and run the application (http://localhost:8080/index.html)
    ```sh
    ui5 serve -o index.html
    ```

## Testing
* Run [ESLint](https://eslint.org/) code validation
    ```sh
    npm run lint
    ```
* Start the [Karma Test Runner](https://karma-runner.github.io/latest/index.html) with the [UI5 Plugin](https://github.com/SAP/karma-ui5) and execute the tests automatically after every change
    ```sh
    npm run watch
    ```
* Run both ESLint and Karma in CI mode
    ```sh
    npm test
    ```
## Building
### Option 1: Standard preload build
1. Execute the build
    ```sh
    ui5 build -a
    ```
1. Run the result
    1. Run a local HTTP server on the build results (`/dist` directory)  
	(**Note:** This script is using the [local-web-server](https://www.npmjs.com/package/local-web-server) npm module, but you can use any HTTP server for that)
        ```sh
        npm run serve-dist
        ```
    1. Open the app at http://localhost:8000

### Option 2: Self-contained build
1. (Optional) Remove previous build results
   ```sh
   rm -rf ./dist
   ```
1. Execute the `self-contained` build to create a bundle with all of your applications runtime dependencies
    ```sh
    ui5 build self-contained -a
    ```
1. Run the result
    1. Run a local HTTP server on the build results (`/dist` directory)  
	(**Note:** This script is using the [local-web-server](https://www.npmjs.com/package/local-web-server) npm module, but you can use any HTTP server for that)
        ```sh
        npm run serve-dist
        ```
    1. Open the app at http://localhost:8000

## Working with local dependencies

For local development of your applications' dependencies (like OpenUI5 libraries) you can link them by using Yarn. This will allow you to make changes to your applications dependencies locally and see the impact in your application immediately.

**Note:** Currently only Yarn understands the [workspace](https://yarnpkg.com/lang/en/docs/workspaces/) package setting used in the OpenUI5 repository. If you do not plan to work with OpenUI5 you might as well use npm. But keep in mind that linking the same module with npm and Yarn might lead to issues. Also, Yarn can't work with links created by npm and vice versa. See [FAQ: What's the thing with yarn?](https://github.com/SAP/ui5-tooling#whats-the-thing-with-yarn) for details.

### Prerequisites

- [Yarn](https://yarnpkg.com/en/docs/install) (**version must be 1.0 or higher**)
    - *Note that you can use npm instead of Yarn if you do not plan to work with a local copy of the [OpenUI5 main repository](https://github.com/SAP/openui5). See [FAQ: What's the thing with yarn?](https://github.com/SAP/ui5-tooling#whats-the-thing-with-yarn)*

### Preparation
The following needs to be done just once per setup.

1. Clone the OpenUI5 repository and navigate into it
    **Note:** The UI5 version must be 1.65.0 or higher, you can check that in the root `package.json` file
    ```sh
    git clone https://github.com/SAP/openui5.git
    cd openui5
    ```
1. Install all dependencies (this also links all OpenUI5 libraries between each other)
    ```sh
    yarn
    ```
1. Make all projects available as global links. **Note**: The OpenUI5 project uses [wsrun](https://github.com/whoeverest/wsrun) to link all libraries with one command. See [Linking Projects](https://github.com/SAP/ui5-tooling#linking-projects) for general information about project linking.
    ```sh
    yarn run link-all
    ```

### Linking
1. In your application directory: Link the required OpenUI5 libraries
    ```sh
    yarn link @openui5/sap.ui.core
    yarn link @openui5/sap.m
    yarn link @openui5/themelib_sap_fiori_3
    ```

You can now make changes in your local OpenUI5 repository and see the impact directly when serving or building your application.

### Unlinking
To return to using the OpenUI5 npm packages

1. Remove the links
    ```sh
    yarn unlink @openui5/sap.ui.core
    yarn unlink @openui5/sap.m
    yarn unlink @openui5/themelib_sap_fiori_3
    ```
1. Re-install the packages from the registry
    ```sh
    yarn
    ```
