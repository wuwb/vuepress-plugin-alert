import type { Plugin } from '@vuepress/core'
import { getDirname, path } from '@vuepress/utils'

const __dirname = getDirname(import.meta.url)

export const alertPlugin = (): Plugin => ({
    name: 'vuepress-plugin-alert',
    clientConfigFile: path.resolve(__dirname, '../client/config.js'),
})
