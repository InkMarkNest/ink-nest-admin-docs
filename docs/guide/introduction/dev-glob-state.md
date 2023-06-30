# 全局状态

你需要使用全局状态了？可以看看这。

## store

在src/store下存放了关于全局状态模块的文件。

### modules

模块文件夹，保存了各个模块的全局状态。

## 用户状态模块

项目中的用户状态是如何定义的？

### 1.类型定义

在src/types目录下，定义了许多的类型文件。

user.ts保存了关于用户的类型

我们首先定义好数据类型和Action(方法)，再进行代码编写。

每个全局状态都包含一个State和Action
那么就会有两个类型，UserState和UserActions
我们维护好这两个TS类型即可。

``` ts
import { ModulePermission } from './route';

/**
 * 用户数据类型定义
 */
export type User = {
  id: number;
  name: string;
  email: string;
  /**
   * 用户 角色表
   */
  roles: string[];
  /**
   * 用户 路由权限
   */
  permissions: ModulePermission[];
};

/**
 * 用户状态定义
 */
export interface UserState {
  /**
   * 当前用户
   */
  user: User | null;
  /**
   * 用户 token
   */
  token: string | null;
  /**
   * 加载完成
   */
  isLoaded: boolean;
  /**
   * 记住用户
   */
  rememberMe: boolean;
}

/**
 * 用户操作定义
 */
export interface UserActions {
  /**
   * 设置当前用户
   * @param {User} user - 新的用户数据
   */
  setUser: (user: User | null) => Promise<void>;

  /**
   * 清除当前用户数据
   */
  clearUser: () => Promise<void>;
  /**
   * 设置用户 token
   * @param {string} token - 新的 token
   */
  setToken: (token: string | null) => Promise<void>;
  /**
   * 清除用户 token
   */
  clearToken: () => Promise<void>;
  /**
   * 退出登录
   */
  logout: () => Promise<void>;
  /**
   * 检查用户是否有特定角色
   * @param {string} role - 需要检查的角色
   * @return {boolean} 是否具有该角色
   */
  hasRole: (role: string) => boolean;
  /**
   * 初始化加载
   */
  init: () => Promise<void>;
  /**
   * 设置记住我
   * @param {boolean} rememberMe - 是否记住用户
   */
  setRememberMe: (rememberMe: boolean) => Promise<void>;
}

/**
 * 用户store，包括状态和操作
 */
export type UserStore = UserState & UserActions;
```

### 2.状态仓库

当定义好类型后，在我们的src/store/modules下，新建useUserStore.ts

在这个文件下维护我们用户模块的全局状态

#### 2.1 初始状态定义

``` ts
/**
 * 定义初始状态
 */
const initialState: UserState = (() => {
  const state: UserState = {
    user: null,
    token: null,
    isLoaded: true,
    rememberMe: false,
  };

  return state;
})();
```

#### 2.2 创建用户状态仓库

创建仓库时，将初始状态结构在对象中，并设置我们的其他操作函数。

最后使用createSelectors包裹我们的仓库导出即可。

``` ts
/**
 * 用户状态仓库
 */
const useUserStoreBase = create(
  immer<UserStore>((set, get) => ({
    ...initialState,
    setUser: async (user) => {
      await setItem<User | null>('userInfo', user);

      set((state) => {
        state.user = user;
        if (user && state.token) {
          state.isLoaded = false;
        }
      });
    },
    clearUser: async () => {
      await removeItem('userInfo');
      set((state) => {
        state.user = null;
      });
    },
    setToken: async (token) => {
      await setItem('inkToken', token);

      set((state) => {
        state.token = token;
        if (token && state.user) {
          state.isLoaded = false;
        }
      });
    },
    clearToken: async () => {
      await removeItem('token');

      set((state) => {
        state.token = null;
      });
    },
    logout: async () => {
      const { clearUser, clearToken } = get();

      await clearUser();
      await clearToken();

      set((state) => {
        state.isLoaded = false;
      });
    },
    hasRole: (role) => {
      const { user } = get();
      return user !== null && user.roles.includes(role);
    },
    init: async () => {
      const user = await getItem<User | null>('userInfo');
      const token = await getItem<string | null>('inkToken');
      const rememberMe = await getItem<boolean>('inkRememberMe');

      set((state) => {
        state.user = user;
        state.token = token;
        state.rememberMe = rememberMe || false;
        state.isLoaded = false;
      });
    },
    setRememberMe: async (rememberMe) => {
      await setItem('inkRememberMe', rememberMe);

      set((state) => {
        state.rememberMe = rememberMe;
      });
    },
  })),
);

const useUserStore = createSelectors(useUserStoreBase);
```

### 3.导出全局状态仓库

在src/store/index.ts中导出。
`export * from './modules/userStore';`

## 如何使用？

来到src/pages/Dashboard/workplace目录下

导入我们目标状态库然后 .use.xxx()
`useUserStore.use.user()`

具体代码如下

``` tsx
import { FC } from 'react';

import { useUserStore } from '@/store';

const Workplace: FC = () => {
  const user = useUserStore.use.user();

  return (
    <>
      <div className="">工作台</div>
      <div>
        {user && (
          <>
            <div>{user.id}</div>
            <div>{user.name}</div>
            <div>{user.email}</div>
          </>
        )}
      </div>
    </>
  );
};

export { Workplace };
```
