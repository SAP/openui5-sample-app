![OpenUI5 logo](http://openui5.org/images/OpenUI5_new_big_side.png)

# openui5-sample-app
> [OpenUI5](https://github.com/SAP/openui5) sample app using Grunt & Bower

## Getting started
* Install Node.js (from [nodejs.org](http://nodejs.org/)).
* Install the Grunt CLI
    ```sh
    npm install --global grunt-cli
    ```
* Clone the repository and navigate into it
    ```sh
    git clone https://github.com/SAP/openui5-sample-app.git
    cd openui5-sample-app
    ```
* Install all npm dependencies (also installs all bower dependencies)
    ```sh
    npm install
    ```

## Usage
### Server
Run `grunt serve` to start a local server with your application at [http://localhost:8080](http://localhost:8080).

Run `grunt watch` to also execute your unit tests automatically after every change.

### Code validation
Run `grunt lint` to run static code checks on your project.

Run `grunt test` to execute all tests and get a coverage report.

### Build
Run `grunt build` to build a deployable version of your app to `/dist`.
