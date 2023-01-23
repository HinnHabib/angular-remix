/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  appDirectory: "app",
  assetsBuildDirectory: "../build/browser/remix",
  serverBuildPath: "../build/server/remix/index.js",
  publicPath: "/browser/",
};
