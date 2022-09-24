import { defineClientConfig } from '@vuepress/client';
import { Alert } from './components/index.js';
export default defineClientConfig({
    enhance({ app }) {
        app.component('Alert', Alert);
    },
});
