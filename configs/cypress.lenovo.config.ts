import { defineConfig } from 'cypress';
import baseConfig from '../cypress.config';

export default defineConfig({
    ...baseConfig,
    viewportWidth: 1920,
    viewportHeight: 1080,
});
