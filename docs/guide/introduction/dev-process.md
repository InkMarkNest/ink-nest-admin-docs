# 开发链路

在本后台项目中，如何进行开发？

## 流程

**1.确定功能**
首先确定开发的功能是组件还是页面。

**2.数据结构**
对该功能所需的数据进行规划，类型编写。
确定数据结构后，设计mockAPI。

**3.全局状态**
如果设计功能设计多个组件共享状态。
请在src/store中设计你的全局状态模块。

**4.页面和组件**
页面开发位于src/pages
组件开发位于src/component

文件导出
统一使用 `export { xxComponent }`
不使用默认导出 `export default xxComponent`

index.ts 导出

``` ts
export * from './xxx.tsx'
```

**5.如果是页面**
页面分为权限和无权限
有权限需要参考项目中带有AuthGuard组件包裹的路由，还需要在Mock的User模块用户信息接口处加入你的权限！
无权限路由可不包裹AuthGuard组件。

**6.书写样式**
样式统一使用TailwindCSS进行编写。
色彩统一使用Antd-Style进行配置。

**7.书写函数**
统一使用箭头函数。

**8.书写注释&类型**
类型编写尽可能不使用any。
有条件可增加JSDoc。
