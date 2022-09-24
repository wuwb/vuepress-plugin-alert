import {
  useThemeLocaleData as _useThemeLocaleData,
} from '@vuepress/plugin-theme-data/client'
import type {
  ThemeLocaleDataRef,
} from '@vuepress/plugin-theme-data/client'

export const useThemeLocaleData = (): ThemeLocaleDataRef =>
  _useThemeLocaleData()
