# 请求API

项目中需要使用网络请求获取数据或者传递数据，需要进行封装。

## Axios

本项目使用Axios，且进行了二次封装。

## 登录请求例子

在src/services/api目录下新建对应的请求模块。

用户: `user.ts`

``` ts
import { LoginParams, LoginResponse, UserInfo } from '@/types/user';

import { Get, Post } from '../http';

/**
 * 登录接口
 */
export const login = (params: LoginParams) => {
  return Post<LoginResponse>('/api/login', params);
};

/**
 * 获取用户信息接口
 */
export const getUserInfo = () => {
  return Get<UserInfo>('/api/user/info');
};

```

### 定义返回类型|请求类型

例如登录传递用户名密码，设置一个参数类型为`LoginParams`
设置一个返回类型为`LoginResponse`

这样我们在使用的时候，就可以获得类型提示。

`const loginRes = await login(params);`

在 `loginRes` 上，我们可以.出返回值。
