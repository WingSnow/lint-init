# Vue 3 + TypeScript + Vite + Linter

基于 Vite 的基础模板，集成 Linter 配置，包括 ESLint、Prettier 和 Stylelint。

## 推荐 IDE

- [VS Code](https://code.visualstudio.com/)

## 安装

### VSCode 安装扩展

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)

### VSCode配置保存时自动修复

```json
// setting.json
{
  // 保存时自动修复
  "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true,
      "source.fixAll.stylelint": true,
      // 或者可以直接这样配，但是可能有性能问题
      // "source.fixAll": true,
  },
  // 扩展stylelint的支持文件
  "stylelint.validate": [
      "css",
      "scss",
      "vue",
    ]
}
```

### 安装依赖

```shell
npm install
```

## 使用

```shell
# 启动
npm run dev
# 构建
npm run build
# 构建预览
npm run preview
# 代码检查修复
npm run lint
```

