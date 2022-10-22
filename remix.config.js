/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  serverBuildTarget: 'netlify',
  server:
    process.env.NETLIFY || process.env.NETLIFY_LOCAL
      ? './src/server.js'
      : undefined,
  ignoredRouteFiles: ['**/.*', '*.css', '*.scss'],
  appDirectory: './~',
  assetsBuildDirectory: 'public/build',
  // serverBuildPath: ".netlify/functions-internal/server.js",
  // publicPath: "/build/",
};
