const guide = {
  '/guide': [
    {
      text: '开始',
      items: [
        { text: '介绍', link: '/guide/start/introduction' },
        { text: '快速开始', link: '/guide/start/quick-start' }
      ]
    },
    {
      text: '功能',
      items: [
        { text: 'Git提交检查', link: '/guide/feature/git-commit' },
        { text: '布局组件', link: '/guide/feature/layout-component' },
        { text: '主题皮肤', link: '/guide/feature/theme' },
        { text: '请求设置', link: '/guide/feature/fetch' },
        { text: '路由设置', link: '/guide/feature/route' },
        { text: 'mockAPI', link: '/guide/feature/mock' },
        { text: '国际化', link: '/guide/feature/i18n' },
      ]
    }
  ]
}

const plan = {
  '/plan': [
    {
      text: '计划',
      items: [
        { text: '目前结构', link: '/plan/structure' },
        { text: '开发计划', link: '/plan/dev-plan' }
      ]
    }
  ]
}

export { guide, plan }