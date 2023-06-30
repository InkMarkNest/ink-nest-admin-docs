# 使用Svg图标

项目中如何使用自定义的Svg？

## 下载svg

[iconfont](https://www.iconfont.cn/)

可以在iconfont网站中下载svg图标

保存到 src/assets/svg中，可以自己设置一个文件夹，也可以放在通用common-icon文件夹中。

## 使用Svg

**引入组件**
Svg图标命名：CILogout，CI = common-icon 缩写，Logout为图标名称

SvgIcon组件，用于渲染Svg图标

``` tsx
import { ReactComponent as CILogout } from '@/assets/svg/common-icon/logout.svg';

import { SvgIcon } from '../Icon';
```

**使用组件**
SvgIcon组件有多个参数
element也就是Svg图标
size就是svg图标的大小

``` ts
small: '16px',
middle: '20px',
large: '24px',
xl: '28px',
```

``` tsx
<SvgIcon element={CILogout} size="small" />
```
