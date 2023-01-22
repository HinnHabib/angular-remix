/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  appDirectory: "app",
  assetsBuildDirectory: "../build/browser/remix",
  serverBuildPath: "../build/server/index.js",
  publicPath: "/browser/",
};
