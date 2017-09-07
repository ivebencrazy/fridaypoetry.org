/**
 * Function that mutates original webpack config.
 * Supports asynchronous changes when promise is returned.
 *
 * @param {object} config - original webpack config.
 * @param {object} env - options passed to CLI.
 * @param {WebpackConfigHelpers} helpers - object with useful helpers when working with config.
 **/
export default function (config, env, helpers) {
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
