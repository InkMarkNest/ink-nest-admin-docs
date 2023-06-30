# 环境准备

为了保证开发时，大家有一个良好的开发环境，编写此文档。

## Git

小伙伴对于Git使用不清晰的话，我会带你设置一遍。

### 安装Git

官方地址: [git](https://git-scm.com/)

Windows 可以直接进行安装下载。

MacOS 安装可安装下面的命令
`brew install git`

### 配置Git

#### 1.配置用户和邮箱

在终端中运行下面的命令

``` bash
  git config --global user.name "你的用户名"
  git config --global user.email "你的邮箱"
```

#### 2.设置默认分支

git默认分支为master，当你每次创建一个仓库默认设置改为main
`git config --global init.defaultBranch main`

#### 3.SSH-key

当然，以下是关于如何在GitHub上配置SSH密钥的详细步骤：

**1. 检查是否已经有SSH密钥**
在你的终端中输入`ls -al ~/.ssh`来查看是否已经有SSH密钥。如果你看到`id_rsa.pub`（或`id_dsa.pub`），那就说明你已经有了一个SSH密钥。

**2. 生成新的SSH密钥**
如果你没有SSH密钥或者想要为GitHub创建一个新的SSH密钥，可以通过以下命令生成一个新的SSH密钥：

``` bash
ssh-keygen -t rsa -b 4096 -C "你的邮箱"
```

这里的"你的邮箱"是你在GitHub上注册的邮箱，这会将你的密钥与你的GitHub账户相关联。

你会被提示输入文件保存位置和设置密码，如果想要使用默认设置，可以一路回车即可。

**3. 添加SSH密钥到ssh-agent**
在默认设置下，你的私钥将会保存在`~/.ssh/id_rsa`，公钥则会保存在`~/.ssh/id_rsa.pub`。

运行以下命令以确保ssh-agent是启动的：

``` bash
eval "$(ssh-agent -s)"
```

然后，添加你的私钥到ssh-agent：

``` bash
ssh-add ~/.ssh/id_rsa
```

注意，如果你在第二步中选择了不同的文件名或路径，你需要将上述命令中的`~/.ssh/id_rsa`替换为你的私钥文件路径。

**4. 添加SSH密钥到GitHub账户**
首先，你需要获取你的公钥的内容，你可以通过以下命令查看和复制你的公钥：

``` bash
cat ~/.ssh/id_rsa.pub
```

然后，在GitHub的设置页面中找到"SSH and GPG keys"，点击"New SSH key"。

在"Title"字段中，输入一个对你有意义的标题，如"我的个人电脑"。然后在"Key"字段中，粘贴你的公钥内容。

最后，点击"Add SSH key"。

**5. 测试SSH连接**
你可以通过以下命令测试你的SSH连接是否正常：

``` bash
ssh -T git@github.com
```

如果看到“Hi username! You've successfully authenticated, but GitHub does not provide shell access.”的消息，那就说明你已经成功配置了SSH密钥。

## node.js

建议使用nvm进行node版本控制。
确实，`nvm`（Node Version Manager）是一个非常方便的工具，它可以让你在同一台机器上安装和使用多个版本的Node.js。然后，`pnpm`是一种用于Node.js包管理的有效工具，它使用硬链接和符号链接的策略来节省存储空间并提高性能。

下面是在Windows上使用`nvm`安装Node.js和`pnpm`的步骤：

**1. 安装nvm**
在Windows上，你可以使用`nvm-windows`，它是`nvm`的一个Windows版本。首先，你需要访问其GitHub页面：<https://github.com/coreybutler/nvm-windows>

然后，点击"latest version"链接，下载`nvm-setup.zip`文件。解压这个文件，然后运行其中的`nvm-setup.exe`进行安装。

**2. 安装Node.js**
使用nvm安装Node.js非常简单。在命令行中输入以下命令：

``` bash
nvm install latest
```

这将会安装最新版本的Node.js。你也可以通过指定版本号来安装特定版本的Node.js，例如：

``` bash
nvm install 18.16.0
```

然后，你可以使用下面的命令来设置默认使用的Node.js版本：

``` bash
nvm use 18.16.0
```

**3. 安装pnpm**
一旦你已经安装了Node.js，你就可以使用Node.js的包管理器npm来安装pnpm。在命令行中输入以下命令：

``` bash
npm install -g pnpm
```

这个命令将会全局安装pnpm。

## 运行后台

项目地址: [通用后台Github](https://github.com/InkMarkNest/ink-nest-admin)

### 拉取代码

运行下面的命令，把远程仓库的代码拉到本地上

``` bash
git clone git@github.com:InkMarkNest/ink-nest-admin.git
or
git clone https://github.com/InkMarkNest/ink-nest-admin.git
```

### 安装开发依赖

当你把代码拉到本地上时，记得进入当前项目的文件。
运行下面命令进入到项目文件夹中。
`cd ink-nest-admin`

**1.安装依赖**
运行下面的命令，安装所需的文件。

```  bash
pnpm install
```

**2.运行程序**
当安装成功后，运行我们的后台。

``` bash
pnpm dev
```

**3.在浏览器中预览**
当运行成功后，命令行会提示成功
我们可以进入到浏览器，访问后台。
[http:localhost:2333](http:localhost:2333)

这就是后台基本的环境以及运行项目的大致过程。
