import { defineConfig } from 'vitepress'
import { guide, plan } from './sidebars'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Ink Admin docs",
  description: "墨迹小窝后台管理系统",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Guide', link: '/guide/start/introduction' },
      { text: 'Plan', link: '/plan/structure' }
    ],

    sidebar: {
      ...guide,
      ...plan
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/InkMarkNest' }
    ]
  },
  // build
  outDir: '../dist'
})
