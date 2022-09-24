import { getDirname, path } from '@vuepress/utils';
const __dirname = getDirname(import.meta.url);
export const alertPlugin = () => ({
    name: 'vuepress-plugin-alert',
    clientConfigFile: path.resolve(__dirname, '../client/config.js'),
});
