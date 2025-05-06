# Lemon Form 柠檬表单


柠檬表单🍋是一个基于 `Vue3` 和 ` Typescript ` 开发的表单产品，作为一个<b>🟢 重前端</b>产品形态，表单编辑器和表单组件库所以代码完全开源。

#### 在线

[OnLine 在线预览](bojue.github.io/lemon-form/)

![image](https://github.com/user-attachments/assets/ba8f1494-3cab-4053-a672-fdb7da88d1c3)

#### DEMO截图


## ✨ 为什么选择柠檬轻表单

- **使用简单**：拖拉拽的交互方式，降低上手成本
- **动态表单渲染**：轻松创建动态表单，所需配置极少。
- **完全开源**：表单编辑器核心代码完全开源，对表单研发拥有完全的自主权
- **扩展能力**：柠檬表单提供了扩展能力，同时官方也提供低代码出码能力，无缝具备【无码】研发能力



## 📦 安装

通过 npm 或 yarn 安装柠檬表单：

```bash
npm install lemon-form
# 或
yarn add lemon-form

npm run dev
```


## 📖 开发文档
<!-- 有关详细用法和高级功能，请参阅 [柠檬表单文档](https://github.com/bojue/lemon-form/wiki)。
 -->
### 代码结构

#### 1. 编辑器模块
```js
- src/views
  - FormEditor //  编辑器模块

    // 编辑器config部分
    - comp-address-data.ts // 地址组件config数据
    - comp-data.ts // 组件库数据
    - comp-icon.ts // 组件库icon管理问题

    // 布局部分
    - form-sidebar.vue // 编辑器Sidebar
    - form-setting.vue // 编辑器配置文件
    - index.vue // 入口文件，编辑器容器组件
    
```

#### 2. Form表单组件库
```js
- src/components-form
  - advanced // 高级组件
  - base // 基础组件，Form组件
  - business // 业务组件
  - contact-information // 联系方式，信息组件，比如微信

```

#### 3. Form表单配置组件库
```js
- src/components-form-setting
  - base // 基础属性
  - common-global-configurations // 全局属性
  - data // 数据属性
  - form-validation // 表单校验属性
  - logical-settings // 逻辑配置

```

## 🛡️ 许可证

柠檬表单基于 MIT 许可证发布。详细信息请参阅 [LICENSE](https://github.com/bojue/lemon-form/blob/main/LICENSE) 文件。

