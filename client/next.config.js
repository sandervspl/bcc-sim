/* eslint-disable */
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
var __objSpread = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __commonJS = (cb, mod) => () => (mod || cb((mod = {exports: {}}).exports, mod), mod.exports);
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, {get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable});
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? {get: () => module2.default, enumerable: true} : {value: module2, enumerable: true})), module2);
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// node_modules/next/dist/next-server/lib/constants.js
var require_constants = __commonJS((exports2) => {
  "use strict";
  exports2.__esModule = true;
  exports2.STATIC_STATUS_PAGES = exports2.OPTIMIZED_FONT_PROVIDERS = exports2.SERVER_PROPS_ID = exports2.STATIC_PROPS_ID = exports2.PERMANENT_REDIRECT_STATUS = exports2.TEMPORARY_REDIRECT_STATUS = exports2.CLIENT_STATIC_FILES_RUNTIME_POLYFILLS = exports2.CLIENT_STATIC_FILES_RUNTIME_WEBPACK = exports2.CLIENT_STATIC_FILES_RUNTIME_AMP = exports2.CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH = exports2.CLIENT_STATIC_FILES_RUNTIME_MAIN = exports2.STRING_LITERAL_DROP_BUNDLE = exports2.AMP_RENDER_TARGET = exports2.CLIENT_STATIC_FILES_RUNTIME = exports2.CLIENT_STATIC_FILES_PATH = exports2.CLIENT_PUBLIC_FILES_PATH = exports2.BLOCKED_PAGES = exports2.BUILD_ID_FILE = exports2.CONFIG_FILE = exports2.SERVERLESS_DIRECTORY = exports2.SERVER_DIRECTORY = exports2.FONT_MANIFEST = exports2.REACT_LOADABLE_MANIFEST = exports2.DEV_CLIENT_PAGES_MANIFEST = exports2.SERVER_FILES_MANIFEST = exports2.IMAGES_MANIFEST = exports2.ROUTES_MANIFEST = exports2.PRERENDER_MANIFEST = exports2.EXPORT_DETAIL = exports2.EXPORT_MARKER = exports2.BUILD_MANIFEST = exports2.PAGES_MANIFEST = exports2.PHASE_DEVELOPMENT_SERVER = exports2.PHASE_PRODUCTION_SERVER = exports2.PHASE_PRODUCTION_BUILD = exports2.PHASE_EXPORT = void 0;
  var PHASE_EXPORT = "phase-export";
  exports2.PHASE_EXPORT = PHASE_EXPORT;
  var PHASE_PRODUCTION_BUILD2 = "phase-production-build";
  exports2.PHASE_PRODUCTION_BUILD = PHASE_PRODUCTION_BUILD2;
  var PHASE_PRODUCTION_SERVER2 = "phase-production-server";
  exports2.PHASE_PRODUCTION_SERVER = PHASE_PRODUCTION_SERVER2;
  var PHASE_DEVELOPMENT_SERVER = "phase-development-server";
  exports2.PHASE_DEVELOPMENT_SERVER = PHASE_DEVELOPMENT_SERVER;
  var PAGES_MANIFEST = "pages-manifest.json";
  exports2.PAGES_MANIFEST = PAGES_MANIFEST;
  var BUILD_MANIFEST = "build-manifest.json";
  exports2.BUILD_MANIFEST = BUILD_MANIFEST;
  var EXPORT_MARKER = "export-marker.json";
  exports2.EXPORT_MARKER = EXPORT_MARKER;
  var EXPORT_DETAIL = "export-detail.json";
  exports2.EXPORT_DETAIL = EXPORT_DETAIL;
  var PRERENDER_MANIFEST = "prerender-manifest.json";
  exports2.PRERENDER_MANIFEST = PRERENDER_MANIFEST;
  var ROUTES_MANIFEST = "routes-manifest.json";
  exports2.ROUTES_MANIFEST = ROUTES_MANIFEST;
  var IMAGES_MANIFEST = "images-manifest.json";
  exports2.IMAGES_MANIFEST = IMAGES_MANIFEST;
  var SERVER_FILES_MANIFEST = "required-server-files.json";
  exports2.SERVER_FILES_MANIFEST = SERVER_FILES_MANIFEST;
  var DEV_CLIENT_PAGES_MANIFEST = "_devPagesManifest.json";
  exports2.DEV_CLIENT_PAGES_MANIFEST = DEV_CLIENT_PAGES_MANIFEST;
  var REACT_LOADABLE_MANIFEST = "react-loadable-manifest.json";
  exports2.REACT_LOADABLE_MANIFEST = REACT_LOADABLE_MANIFEST;
  var FONT_MANIFEST = "font-manifest.json";
  exports2.FONT_MANIFEST = FONT_MANIFEST;
  var SERVER_DIRECTORY = "server";
  exports2.SERVER_DIRECTORY = SERVER_DIRECTORY;
  var SERVERLESS_DIRECTORY = "serverless";
  exports2.SERVERLESS_DIRECTORY = SERVERLESS_DIRECTORY;
  var CONFIG_FILE = "next.config.js";
  exports2.CONFIG_FILE = CONFIG_FILE;
  var BUILD_ID_FILE = "BUILD_ID";
  exports2.BUILD_ID_FILE = BUILD_ID_FILE;
  var BLOCKED_PAGES = ["/_document", "/_app"];
  exports2.BLOCKED_PAGES = BLOCKED_PAGES;
  var CLIENT_PUBLIC_FILES_PATH = "public";
  exports2.CLIENT_PUBLIC_FILES_PATH = CLIENT_PUBLIC_FILES_PATH;
  var CLIENT_STATIC_FILES_PATH = "static";
  exports2.CLIENT_STATIC_FILES_PATH = CLIENT_STATIC_FILES_PATH;
  var CLIENT_STATIC_FILES_RUNTIME = "runtime";
  exports2.CLIENT_STATIC_FILES_RUNTIME = CLIENT_STATIC_FILES_RUNTIME;
  var AMP_RENDER_TARGET = "__NEXT_AMP_RENDER_TARGET__";
  exports2.AMP_RENDER_TARGET = AMP_RENDER_TARGET;
  var STRING_LITERAL_DROP_BUNDLE = "__NEXT_DROP_CLIENT_FILE__";
  exports2.STRING_LITERAL_DROP_BUNDLE = STRING_LITERAL_DROP_BUNDLE;
  var CLIENT_STATIC_FILES_RUNTIME_MAIN = `main`;
  exports2.CLIENT_STATIC_FILES_RUNTIME_MAIN = CLIENT_STATIC_FILES_RUNTIME_MAIN;
  var CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH = `react-refresh`;
  exports2.CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH = CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH;
  var CLIENT_STATIC_FILES_RUNTIME_AMP = `amp`;
  exports2.CLIENT_STATIC_FILES_RUNTIME_AMP = CLIENT_STATIC_FILES_RUNTIME_AMP;
  var CLIENT_STATIC_FILES_RUNTIME_WEBPACK = `webpack`;
  exports2.CLIENT_STATIC_FILES_RUNTIME_WEBPACK = CLIENT_STATIC_FILES_RUNTIME_WEBPACK;
  var CLIENT_STATIC_FILES_RUNTIME_POLYFILLS = `polyfills`;
  exports2.CLIENT_STATIC_FILES_RUNTIME_POLYFILLS = CLIENT_STATIC_FILES_RUNTIME_POLYFILLS;
  var TEMPORARY_REDIRECT_STATUS = 307;
  exports2.TEMPORARY_REDIRECT_STATUS = TEMPORARY_REDIRECT_STATUS;
  var PERMANENT_REDIRECT_STATUS = 308;
  exports2.PERMANENT_REDIRECT_STATUS = PERMANENT_REDIRECT_STATUS;
  var STATIC_PROPS_ID = "__N_SSG";
  exports2.STATIC_PROPS_ID = STATIC_PROPS_ID;
  var SERVER_PROPS_ID = "__N_SSP";
  exports2.SERVER_PROPS_ID = SERVER_PROPS_ID;
  var OPTIMIZED_FONT_PROVIDERS = ["https://fonts.googleapis.com/css"];
  exports2.OPTIMIZED_FONT_PROVIDERS = OPTIMIZED_FONT_PROVIDERS;
  var STATIC_STATUS_PAGES = ["/500"];
  exports2.STATIC_STATUS_PAGES = STATIC_STATUS_PAGES;
});

// node_modules/next/constants.js
var require_constants2 = __commonJS((exports2, module2) => {
  module2.exports = require_constants();
});

// package.json
var require_package = __commonJS((exports2, module2) => {
  module2.exports = {
    name: "land-game-client",
    version: "0.0.1",
    description: "Land game client",
    author: "Sander Vispoel",
    license: "ISC",
    engines: {
      node: ">=14.7.0",
      npm: "~7.8.0"
    },
    scripts: {
      dev: "npm run build:nextconfig && DEV=true node scripts/esbuild.server.js",
      build: "npm run build:nextconfig && next build && node scripts/esbuild.server.js",
      "build:nextconfig": "node scripts/esbuild.nextconfig.js",
      server: "NODE_ENV=production node dist/server/index.js",
      lint: "eslint --ext .ts --ext .tsx src/",
      analyze: "BUNDLE_ANALYZE=both npm run build",
      typecheck: "tsc --noEmit",
      postinstall: "npx patch-package"
    },
    dependencies: {
      express: "4.17.1",
      lodash: "4.17.21",
      next: "10.2.0",
      "next-redux-wrapper": "6.0.2",
      react: "17.0.2",
      "react-dom": "17.0.2",
      "react-redux": "7.2.4",
      redux: "4.1.0",
      "redux-thunk": "^2.3.0",
      "styled-components": "5.2.3",
      "typesafe-actions": "5.1.0"
    },
    devDependencies: {
      "@babel/plugin-proposal-export-default-from": "7.12.13",
      "@next/bundle-analyzer": "10.2.0",
      "@svgr/webpack": "5.5.0",
      "@types/copy-webpack-plugin": "8.0.0",
      "@types/express": "4.17.11",
      "@types/lodash": "4.14.168",
      "@types/node": "15.0.1",
      "@types/react": "17.0.4",
      "@types/react-dom": "17.0.3",
      "@types/react-redux": "7.1.16",
      "@types/redux": "3.6.31",
      "@types/styled-components": "5.1.9",
      "@types/webpack": "5.28.0",
      "@typescript-eslint/eslint-plugin": "4.22.0",
      "@typescript-eslint/parser": "4.22.0",
      "babel-plugin-lodash": "3.3.4",
      "babel-plugin-styled-components": "1.12.0",
      chokidar: "3.5.1",
      "copy-webpack-plugin": "8.1.1",
      esbuild: "0.11.16",
      eslint: "7.25.0",
      "eslint-config-react-app": "6.0.0",
      "eslint-import-resolver-babel-module": "5.3.1",
      "eslint-plugin-flowtype": "5.7.2",
      "eslint-plugin-import": "2.22.1",
      "eslint-plugin-jsx-a11y": "^6.4.1",
      "eslint-plugin-react": "7.23.2",
      "eslint-plugin-react-hooks": "4.2.0",
      "file-loader": "6.2.0",
      "next-offline": "5.0.5",
      "ts-toolbelt": "9.6.0",
      "tsconfig-paths-webpack-plugin": "3.5.1",
      typescript: "4.2.4",
      "url-loader": "4.1.1",
      webpack: "5.36.1"
    }
  };
});

// next.config.ts
var import_path = __toModule(require("path"));
var import_constants = __toModule(require_constants2());

// config/env.ts
var PORT = process.env.PORT || 3e3;
var NODE_ENV = process.env.NODE_ENV || "development";
var APP_ENV = process.env.APP_ENV || "development";

// next.config.ts
var GLOBALS = {
  "process.env": {
    NODE_ENV: JSON.stringify(NODE_ENV),
    APP_ENV: JSON.stringify(APP_ENV),
    PORT
  },
  __DEV__: APP_ENV === "development",
  __TEST__: APP_ENV === "test",
  __ACC__: APP_ENV === "acceptation",
  __PROD__: APP_ENV === "production"
};
var config = (phase, config2) => {
  let cfg = __objSpread(__objSpread({}, config2), {
    distDir: "dist",
    poweredByHeader: false,
    future: {
      webpack5: true
    },
    target: "serverless"
  });
  if (phase !== import_constants.PHASE_PRODUCTION_SERVER) {
    const webpack = require("webpack");
    const CopyWebpackPlugin = require("copy-webpack-plugin");
    const TSConfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
    cfg = __objSpread(__objSpread({}, cfg), {
      webpack: (config3, {isServer}) => {
        function isEntryFn(obj) {
          return typeof obj === "function";
        }
        const originalEntry = config3.entry;
        if (isEntryFn(originalEntry)) {
          config3.entry = () => __async(void 0, null, function* () {
            const entries = yield originalEntry();
            const mainEntry = entries["main.js"];
            const polyfillsPath = import_path.default.resolve("config/polyfills.ts");
            if (mainEntry && !mainEntry.includes(polyfillsPath)) {
              mainEntry.unshift(polyfillsPath);
            }
            return entries;
          });
        }
        const staticPathConfig = {
          publicPath: "/_next/static/",
          outputPath: `${isServer ? "../" : ""}static/`
        };
        const rules = [
          {
            test: /\.svg$/,
            oneOf: [
              {
                resourceQuery: /external/,
                use: [{
                  loader: "url-loader",
                  options: {
                    limit: 1e4
                  }
                }]
              },
              {
                use: ["@svgr/webpack"]
              }
            ]
          },
          {
            test: /\.(jpe?g|png|gif|ico|webp)$/,
            oneOf: [
              {
                resourceQuery: /external/,
                use: [{
                  loader: "file-loader",
                  options: __objSpread(__objSpread({}, staticPathConfig), {
                    name: "[name].[ext]"
                  })
                }]
              },
              {
                use: [{
                  loader: "url-loader",
                  options: __objSpread(__objSpread({}, staticPathConfig), {
                    limit: 1e4,
                    name: "[name].[ext]"
                  })
                }]
              }
            ]
          }
        ];
        if (!config3.module) {
          config3.module = {
            rules: []
          };
        }
        config3.module.rules = [
          ...config3.module.rules,
          ...rules
        ];
        if (!config3.plugins) {
          config3.plugins = [];
        }
        config3.plugins = [
          ...config3.plugins,
          new webpack.DefinePlugin(GLOBALS),
          new CopyWebpackPlugin({
            patterns: [
              {from: import_path.default.resolve("public"), to: import_path.default.resolve("dist/static")}
            ]
          })
        ];
        if (!config3.resolve) {
          config3.resolve = {
            plugins: []
          };
        }
        config3.resolve.plugins = [
          ...config3.resolve.plugins,
          new TSConfigPathsPlugin()
        ];
        return config3;
      }
    });
  }
  if (phase === import_constants.PHASE_PRODUCTION_BUILD) {
    const withOffline = require("next-offline");
    const pkg = require_package();
    cfg = withOffline(__objSpread(__objSpread({}, cfg), {
      transformManifest: (manifest) => ["/"].concat(manifest),
      workboxOpts: {
        swDest: "static/service-worker.js",
        cacheId: pkg.name,
        skipWaiting: true,
        clientsClaim: true,
        include: [/\.html$/, /\.js$/, /\.png$/],
        runtimeCaching: [
          {
            urlPattern: /^https?.*/,
            handler: "NetworkFirst",
            options: {
              cacheName: "https-calls",
              networkTimeoutSeconds: 15,
              expiration: {
                maxEntries: 150,
                maxAgeSeconds: 30 * 24 * 60 * 60
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          }
        ]
      }
    }));
    if (process.env.BUNDLE_ANALYZE) {
      const withBundleAnalyzer = require("@next/bundle-analyzer");
      cfg = withBundleAnalyzer(__objSpread(__objSpread({}, cfg), {
        analyzeServer: ["server", "both"].includes(process.env.BUNDLE_ANALYZE),
        analyzeBrowser: ["browser", "both"].includes(process.env.BUNDLE_ANALYZE),
        bundleAnalyzerConfig: {
          server: {
            analyzerMode: "static",
            reportFilename: "../bundle_analytics/server.html"
          },
          browser: {
            analyzerMode: "static",
            reportFilename: "../bundle_analytics/client.html"
          }
        }
      }));
    }
  }
  return cfg;
};
module.exports = config;
