// import { defineConfig } from 'cypress';
// import endpoints from './resourcers/endpoints.json';
// import fs from 'fs';

// export default defineConfig({
//     projectId: '7wmxm7',
//     chromeWebSecurity: false,

//     retries: {
//         runMode: process.env.CI ? 1 : 0,
//         openMode: 0,
//     },

//     viewportWidth: 1536,
//     viewportHeight: 960,

//     e2e: {
//         setupNodeEvents(on, config) {
//             on('after:spec', (spec: Cypress.Spec, results: CypressCommandLine.RunResult) => {
//                 if (results && results.video) {
//                     const failures = results.tests.some((test) => test.attempts.some((attempt) => attempt.state === 'failed'));
//                     if (!failures) {
//                         fs.unlinkSync(results.video);
//                     }
//                 }
//             });
//         },

//         baseUrl: endpoints.baseUrl,
//         video: true,
//         screenshotsFolder: 'cypress/screenshots',
//         screenshotOnRunFailure: true,

//         defaultCommandTimeout: 5000,
//         execTimeout: 80000,
//     },
// });

import { defineConfig } from 'cypress';
import createBundler from '@bahmutov/cypress-esbuild-preprocessor';
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
import { createEsbuildPlugin } from '@badeball/cypress-cucumber-preprocessor/esbuild';

export default defineConfig({
    e2e: {
        specPattern: '**/*.feature',
        async setupNodeEvents(on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions): Promise<Cypress.PluginConfigOptions> {
            await addCucumberPreprocessorPlugin(on, config);

            on(
                'file:preprocessor',
                createBundler({
                    plugins: [createEsbuildPlugin(config)],
                })
            );
            return config;
        },
    },
});
