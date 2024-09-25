export default {
  apps: [
    {
      name: `vite-app`,
      script: "serve",
      env: {
        PM2_SERVE_PATH: "./dist",
        PM2_SERVE_PORT: 80,
        PM2_SERVE_SPA: "true",
        NODE_ENV: "production",
      },
    },
  ],
};