# 页面开发

页面开发很简单

## Pages文件夹

在Pages文件夹下编写对应模块的页面即可。

## 例如Dashboard/workplace

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
