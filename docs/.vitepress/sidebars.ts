const guide = {
  '/guide': [
    {
      text: '开始',
      items: [
        { text: '介绍', link: '/guide/start/introduction' },
        { text: '如何上手', link: '/guide/start/quick-start' },
      ]
    },
    {
      text: '入门',
      items: [
        { text: '环境准备', link: '/guide/introduction/dev-environment' },
        { text: '开发链路', link: '/guide/introduction/dev-process' },
        { text: '样式编写', link: '/guide/introduction/dev-style' },
        { text: '路由配置', link: '/guide/introduction/dev-route' },
        { text: '全局状态', link: '/guide/introduction/dev-glob-state' },
        { text: 'Page开发', link: '/guide/introduction/dev-page' },
        { text: '组件开发', link: '/guide/introduction/dev-component' },
        { text: 'Svg图标使用', link: '/guide/introduction/dev-use-svg' },
        { text: 'mock接口', link: '/guide/introduction/dev-mock' },
        { text: '请求API', link: '/guide/introduction/dev-axios' },
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