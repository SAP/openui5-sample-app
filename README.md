![openui5](http://openui5.org/images/OpenUI5_new_big_side.png)

# openui5-sample-app

> [OpenUI5](https://github.com/SAP/openui5) sample app using Grunt & Bower.

Added grunt tasks for Watch, Livereload and Open.

```grunt``` will lint then build the application into the dist folder; launch a connect web server and open the default browser. The application in dist can be copied to an ABAP server.
Building includes creating a component preload file and minification.

```grunt develop``` will run the connect webserver and open the default browser. Web application files are watched with changes causing an automatic browser reload.

## Getting started

1. Install node.js (get it from [nodejs.org](http://nodejs.org/)).
  * If working behind a proxy, you need to configure it properly (HTTP_PROXY / HTTPS_PROXY / NO_PROXY environment variables)
2. Install grunt-cli and bower globally

   ```sh
npm install grunt-cli bower -g
```
3. Clone the repository and navigate into it

   ```sh
git clone https://github.com/SAP/openui5-sample-app.git
cd openui5-sample-app
```

1. Install all npm dependencies

   ```sh
npm install
```

1. Install all bower dependencies

   ```sh
bower install
```

5. Run grunt to lint, build and run a local server (have a look into `Gruntfile.js` to see all the tasks).

   ```sh
grunt
```

6. Open the app in your browser: [http://localhost:8080](http://localhost:8080)
