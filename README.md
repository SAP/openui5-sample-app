![OpenUI5 logo](http://openui5.org/images/OpenUI5_new_big_side.png)

# openui5-sample-app
> [OpenUI5](https://github.com/SAP/openui5) sample app using the [UI5 Tooling](https://github.com/SAP/ui5-tooling).

[![REUSE status](https://api.reuse.software/badge/github.com/SAP/openui5-sample-app)](https://api.reuse.software/info/github.com/SAP/openui5-sample-app)

## Live Demo
A deployed version of the [openui5-sample-app](http://sap.github.io/openui5-sample-app/index.html) is hosted on GitHub Pages.

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

For local development of your applications' dependencies (like OpenUI5 libraries) you can use [UI5 Workspaces](https://sap.github.io/ui5-tooling/stable/pages/Workspace/). This will allow you to make changes to those dependencies locally and see the impact in your application immediately.

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
    npm install
    ```

### Setup UI5 Workspace

Would you like to work on the application project and one or more of its UI5 framework dependencies at the same time? We got you covered!

1. Create a new file `ui5-workspace.yaml` in the root folder of the project, right next to the `ui5.yaml`
2. In `ui5-workspace.yaml`, add the paths to the local dependencies you'd like to use from your local machine:
    ```yaml
    specVersion: workspace/1.0
    metadata:
        name: default
    dependencyManagement:
        resolutions:
            # local path to OpenUI5. It will resolve all required libraries and transitive dependencies.
            - path: /local/path/to/openui5
    ```
3. Start the development server with default dependency resolution
    ```sh
    npm run start
    ```

You can now make changes in your local OpenUI5 repository and see the impact directly when serving or building your application.

If a dependency that is listed in `ui5.yaml` is omitted in the `resolutions` section of `ui5-workspace.yaml`, the library is resolved in the usual way by downloading it from the registry. For more information about dependency resolutions, check [here](https://sap.github.io/ui5-tooling/v3/pages/Workspace/#dependency-management).

#### Non-default workspace

The workspace feature always uses the `default` workspace and always attempts to resolve any dependencies from it. If you'd like to use the workspace for local development but want to resolve the libraries in the usual way by default, you can name the workspace and use that name later, for example like this:

```yaml
specVersion: workspace/1.0
metadata:
    name: local-dependencies # Not "default"
dependencyManagement:
    resolutions:
        - path: /local/path/to/openui5
```

```sh
# Starts a server with a named workspace
npm run start -- -w local-dependencies
```
