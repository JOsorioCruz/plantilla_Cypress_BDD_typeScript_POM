import { defineConfig } from "cypress";
const browserify = require('@cypress/browserify-preprocessor');
const cucumber = require('cypress-cucumber-preprocessor').default;
const resolve = require('resolve');

export default defineConfig({
    e2e: {
        video: true,
        screenshotOnRunFailure: true,
        setupNodeEvents(on, config) {
            // Define the baseUrl directly
            const options = {
                ...browserify.defaultOptions,
                typescript: resolve.sync('typescript', { baseDir: config.projectRoot }),
            };
            on('file:preprocessor', cucumber(options));

            return config;
        },
        specPattern: "cypress/e2e/**/*.feature",
    },
});
