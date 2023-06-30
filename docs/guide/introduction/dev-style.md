# 样式编写

如果你在纠结如何书写样式，请看这。

## Footer组件例子

这里使用Footer组件作为例子

### 使用antd-style

在你的组件中，引入`createStyles`，用来创建一个样式
token为antd的主题变量。

``` tsx
import { createStyles } from 'antd-style';

const useStyle = createStyles(({ token, css }) => ({
  footer: css`
    background: ${token.colorPrimaryBgHover};
  `,
}));
```

### 组件中使用

在你的组件中通过上面创建的样式，加载到虚拟dom中。

cx是一个拼接字符串的方法，下面例子中，包含了tailwind的样式和一个footer样式
那么使用cx，我们就获得了`'tw-flex tw-h-14 tw-w-full tw-items-center tw-justify-center tw-p-8 footer'。

``` tsx
const { styles, cx } = useStyle();

className={cx(
  'tw-flex tw-h-14 tw-w-full tw-items-center tw-justify-center tw-p-8',
  styles.footer,
  )}
```

### 完整代码

``` tsx
import { Button } from 'antd';
import { FC } from 'react';
import { createStyles } from 'antd-style';

const useStyle = createStyles(({ token, css }) => ({
  footer: css`
    background: ${token.colorPrimaryBgHover};
  `,
}));

const Footer: FC = () => {
  const { styles, cx } = useStyle();

  return (
    <footer
      className={cx(
        'tw-flex tw-h-14 tw-w-full tw-items-center tw-justify-center tw-p-8',
        styles.footer,
      )}
    >
      <p>&copy; 2023 Ink Nest Admin. All Rights Reserved. </p>
      <p>
        <Button type="link" href="https://github.com/InkMarkNest/ink-nest-admin">
          Github
        </Button>
      </p>
    </footer>
  );
};

export { Footer };
```
