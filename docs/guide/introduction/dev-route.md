# 路由配置

你应该在写页面了，不会配置路由？

## 配置路由

在src/router文件夹中配置我们的路由

### routesConfig.tsx 文件

在这个文件中，所有的路由模块都导入这里，这里也就是主入口。

### modules

我们的模块路由都编写在modules中，便于管理。

## dashboard 例子

以dashboard控制台为例

首先创建了src/router/modules/dashboard文件夹

并创建一个`index.tsx`文件

### 路由项

路由项是一个对象，包含了index、path、props、element等字段。

如果有`index:true`，那么这就是进入dashboard时会加载的路由，这里`index`为`true`时，通过`Navigate`跳转到了`workplace`，重定向了。

如果有`props.isMenu`,那么这就是控制是否显示在侧边栏的一个标识。

`element`则是接收一个React组件，如果不需要权限控制，则直接添加，有权限需要设置AuthGuard组件。

`AuthGuard`组件，接收element、moduleId、routeId。
moduleId为模块的Id，这里也就是dashboard
routeId则是自己的名称，例如workplace

``` tsx
{
  index: true,
  path: '',
  props: {
    isMenu: false,
  },
  element: <Navigate to="/dashboard/workplace" />,
},
{
  path: 'workplace',
  props: {
    isMenu: true,
  },
  element: <AuthGuard element={<Workplace />} moduleId="dashboard" routeId="workplace" />,
},
```

### 完整的`index.tsx`

``` tsx
import { Navigate } from 'react-router-dom';

import { Monitor, Workplace } from '@/pages/Dashboard';

import { ExtendedRouteObject } from '@/types/route';

import { AuthGuard } from '@/permission/AuthGuard';

const dashboardRoutes: ExtendedRouteObject[] = [
  {
    path: 'dashboard',
    props: {
      isMenu: true,
    },
    children: [
      {
        index: true,
        path: '',
        props: {
          isMenu: false,
        },
        element: <Navigate to="/dashboard/workplace" />,
      },
      {
        path: 'workplace',
        props: {
          isMenu: true,
        },
        element: <AuthGuard element={<Workplace />} moduleId="dashboard" routeId="workplace" />,
      },
      {
        path: 'monitor',
        props: {
          isMenu: true,
        },
        element: <AuthGuard element={<Monitor />} moduleId="dashboard" routeId="monitor" />,
      },
    ],
  },
];

export { dashboardRoutes };
```
