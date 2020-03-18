# kugua-cli

### 自制前端脚手架

#### 前置知识

```base
commander: TJ大神开发的工具，能够更好的组织和处理命令的输入；

co: TJ大神开发的异步流程控制工具，用更舒服的方式写异步代码；

co-prompt: TJ大神开发的工具，传统的命令行只能单行一次性地输入所有参数和选项，使用这个工具可以自动提供提示信息，并且分步接收用户的输入，体验类似npm init时的一步一步输入参数的过程。
```

* 全局使用

在 package.json 里加入

```json
"bin": {
  "kugua-cli": "bin/kugua"
},
```

运行绑定全局命令

```cmd
npm link
```

使用命令

```cmd
kugua-cli init
```
