/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  appDirectory: "app",
  assetsBuildDirectory: "../build/remix/build",
  serverBuildPath: "../build/remix/index.js",
  publicPath: "/remix/build/",
};
