# Koa2 + TypeScript + Linter

基于 Koa2，集成必要的中间件（`@koa/router`, `koa-views`、`koa-static`、`koa-bodyparser`），并集成 Linter 配置。

## 推荐 IDE

- [VS Code](https://code.visualstudio.com/)

## 安装

### VSCode 安装扩展

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

### VSCode配置保存时自动修复

```json
// setting.json
{
  // 保存时自动修复
  "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true,
      // 或者可以直接这样配，但是可能有性能问题
      // "source.fixAll": true,
  },
}
```

### 安装依赖

```shell
npm install
```

## 使用

```shell
# 启动服务器
npm run serve
# 热更新
npm run watch
# 代码检查修复
npm run lint
```
