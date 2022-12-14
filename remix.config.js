/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  serverBuildTarget: 'netlify',
  server:
    process.env.NETLIFY || process.env.NETLIFY_LOCAL
      ? './src/server.js'
      : undefined,
  ignoredRouteFiles: [
    '**/.ignore.*',
    '**/*.css',
    '**/*.scss',
    '**/components/**',
    '**/home/**',
  ],
  devServerPort: 8002, // https://github.com/remix-run/remix/issues/2958
  appDirectory: './src/app',
  assetsBuildDirectory: 'public/build',
  // serverBuildPath: '.netlify/functions-internal/server.js',
  // publicPath: "/build/",
};
