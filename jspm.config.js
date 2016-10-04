SystemJS.config({
  paths: {
    "github:": "jspm_packages/github/",
    "npm:": "jspm_packages/npm/",
    "local:": "jspm_packages/local/",
    "aurelia-grid/": "dist/"
  },
  browserConfig: {
    "baseURL": "/"
  },
  transpiler: false,
  packages: {
    "aurelia-grid": {
      "main": "aurelia-grid.js"
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "local:*.json"
  ],
  map: {
    "aurelia-binding": "npm:aurelia-binding@1.0.6",
    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@1.0.0",
    "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0",
    "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0",
    "aurelia-history": "npm:aurelia-history@1.0.0",
    "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0",
    "aurelia-loader": "npm:aurelia-loader@1.0.0",
    "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0",
    "aurelia-logging": "npm:aurelia-logging@1.0.0",
    "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0",
    "aurelia-metadata": "npm:aurelia-metadata@1.0.0",
    "aurelia-pal": "npm:aurelia-pal@1.0.0",
    "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0",
    "aurelia-path": "npm:aurelia-path@1.1.1",
    "aurelia-polyfills": "npm:aurelia-polyfills@1.1.1",
    "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.1.0",
    "aurelia-router": "npm:aurelia-router@1.0.5",
    "aurelia-task-queue": "npm:aurelia-task-queue@1.1.0",
    "aurelia-templating": "npm:aurelia-templating@1.1.1",
    "aurelia-framework": "npm:aurelia-framework@1.0.5",
    "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0",
    "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0",
    "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0"
  },
  packages: {}
});
