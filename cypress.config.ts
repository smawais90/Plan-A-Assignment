import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'https://api.v2.emissions-api.org/api/v2',
  },
  viewportWidth: 2000,
  viewportHeight: 1200,
  responseTimeout: 60000
});
