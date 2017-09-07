import path from "path";
import { union } from "lodash";

/**
 * Function that mutates original webpack config.
 * Supports asynchronous changes when promise is returned.
 *
 * @param {object} config - original webpack config.
 * @param {object} env - options passed to CLI.
 * @param {WebpackConfigHelpers} helpers - object with useful helpers when working with config.
 **/
export default function (config, env, helpers) {
  console.log(config);
  config.resolve.alias["preact-cli-entrypoint"] = path.join(__dirname, "src", "index.tsx");

  config.module.loaders = (config.module.loaders || []).concat([
    {
      test: /\.tsx?$/,
      include: [ path.join(__dirname, "src") ],
      loader: "awesome-typescript-loader"
    },
    {
      enforce: "pre",
      test: /\.tsx?$/,
      loader: "source-map-loader"
    },
  ]);

  return config;
}

//entry: [ join(context, "source", "index.tsx") ],
// resolve: {
// extensions: [ ".js", ".jsx", ".json", ".ts", ".tsx", ".css" ],
// alias: paths
// },

// module: {
// rules: [
// {
//   test: /\.tsx?$/,
//   include: [ paths.source ],
//   loader: "awesome-typescript-loader"
// },
// {
//   enforce: "pre",
//   test: /\.tsx?$/,
//   loader: "source-map-loader"
// },
