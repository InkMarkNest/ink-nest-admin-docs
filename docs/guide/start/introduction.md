
# 介绍

## 为什么是通用后台？

为了之后其他的拓展应用作为基础后台进行二次开发，做出了一个后台的基础框架。
涵盖了基础功能，例如登录、路由、鉴权、权限菜单、用户、文章等模块。
通过不断的更新后台内部逻辑，实现一套符合技术标准的通用后台管理系统。

## React？

React作为一个知名的前端框架，组件UI和Hook用来开发后台模块非常的流畅，无需使用太多的API即可搭建应用。
[React文档](https://react.dev/)

## Antd5？

Antd5自带一套主题配置功能，在后台中可以快速实现主题切换，Antd5使用CSS in JS，在动态主题上更灵活，且组件的功能也非常完善。
[Antd5-组件](https://ant.design/components/overview-cn/)
[Antd5-主题](https://ant.design/docs/react/customize-theme-cn)

## Zustand

全局状态管理的JS库很多，选择Zustand的原因是上手简单，配合localforage作为本地缓存方案，体验感很好。
[Zustand](https://docs.pmnd.rs/zustand/guides/practice-with-no-store-actions)

## TailwindCSS

避免过多的Class类名编写，选择了原子化的CSS框架，在布局和样式方面可直接通过TailwindCSS定义的类名进行样式书写，而主题和颜色则通过Antd-Style库来完成色彩定义。
[TailwindCSS](https://tailwindcss.com/docs/installation)
[antd-style](https://ant-design.github.io/antd-style)

## React-Router

唯一的选择。
[React-Router](https://reactrouter.com/en/main)

## Vite

使用Vite开发和构建，无脑简单，能快速上手，心智负担小。
[Vite](https://cn.vitejs.dev/)
