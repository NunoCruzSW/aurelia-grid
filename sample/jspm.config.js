SystemJS.config({
  browserConfig: {
    "baseURL": "/"
  },
  paths: {
    "*": "src/*",
    "github:": "jspm_packages/github/",
    "npm:": "jspm_packages/npm/"
  },
  devConfig: {
    "map": {
      "core-js": "npm:core-js@1.2.7",
      "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.93",
      "traceur": "github:jmcriffey/bower-traceur@0.0.93",
      "process": "github:jspm/nodelibs-process@0.2.0-alpha",
      "path": "github:jspm/nodelibs-path@0.2.0-alpha",
      "fs": "github:jspm/nodelibs-fs@0.2.0-alpha"
    }
  },
  transpiler: "traceur",
  packages: {
    ".": {},
    "/src/aurelia-grid": {
      "main": "index",
      "dependencies": {
        "aurelia-binding": "github:aurelia/binding@1.0.0",
        "aurelia-dependency-injection": "github:aurelia/dependency-injection@1.0.0",
        "aurelia-templating": "github:aurelia/templating@1.0.0"
      }
    }
  },
  map: {
    "twbs/bootstrap": "github:twbs/bootstrap@3.3.7"
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "aurelia-binding": "npm:aurelia-binding@1.0.6",
    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@1.0.0",
    "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0",
    "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0",
    "aurelia-framework": "npm:aurelia-framework@1.0.5",
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
    "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0",
    "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0",
    "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0",
    "boostrap": "github:twbs/bootstrap@3.3.7",
    "bootstrap": "github:twbs/bootstrap@3.3.6",
    "css": "github:systemjs/plugin-css@0.1.30",
    "font-awesome": "npm:font-awesome@4.6.3",
    "systemjs/plugin-css": "github:systemjs/plugin-css@0.1.30"
  },
  packages: {
    "npm:font-awesome@4.6.3": {
      "map": {
        "css": "github:systemjs/plugin-css@0.1.30"
      }
    },
    "github:twbs/bootstrap@3.3.7": {
      "map": {
        "jquery": "npm:jquery@3.1.1"
      }
    },
    "github:twbs/bootstrap@3.3.6": {
      "map": {
        "jquery": "npm:jquery@2.2.4"
      }
    }
  }
});
