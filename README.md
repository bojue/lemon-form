# Lemon Form 柠檬表单


柠檬表单🍋是一个基于 `Vue3` 和 ` Typescript ` 开发的表单产品，作为一个<b>🟢 重前端</b>产品形态，表单编辑器和表单组件库所有代码完全开源。

#### 在线

[OnLine 在线预览](https://bojue.github.io/lemon-form)

![image](https://github.com/user-attachments/assets/8afe0a8b-3147-4769-8aa0-4077723b093b)



## ✨ 为什么选择柠檬轻表单

- **使用简单**：拖拉拽的交互方式，降低上手成本
- **动态表单渲染**：轻松创建动态表单，所需配置极少。
- **完全开源**：表单编辑器核心代码完全开源，对表单研发拥有完全的自主权
- **扩展能力**：柠檬表单提供了扩展能力，同时官方也提供低代码出码能力，无缝具备【无码】研发能力



## 📦 安装

通过 npm 或 yarn 安装柠檬表单：

```bash
git clone git@github.com:bojue/lemon-form.git
cd lemon-form
yarn 
npm run dev
```


## 📖 开发文档
<!-- 有关详细用法和高级功能，请参阅 [柠檬表单文档](https://github.com/bojue/lemon-form/wiki)。
 -->
### 代码结构

#### 1. 编辑器模块
```js
src/
├── views/                # 编辑器模块
│   ├── FormEditor/       # 主编辑器容器
│   │   ├── comp-address-data.ts  # 地址组件配置
│   │   ├── comp-data.ts        # 组件库元数据
│   │   ├── comp-icon.ts        # 图标管理系统
│   │   ├── form-sidebar.vue    # 侧边栏配置项
│   │   └── form-setting.vue    # 属性配置面板
│   └── index.vue           # 编辑器入口
│
├── components-form/      # 表单组件库
│   ├── advanced/         # 高级组件（如动态表单）
│   ├── base/             # 基础表单元素
│   ├── business/         # 业务专用组件
│   └── contact-info/     # 联系方式组件
│
└── components-form-setting/ # 表单配置项
    ├── base/              # 基础属性配置
    ├── global/            # 全局配置项
    ├── validation/        # 校验规则配置
    └── logic/             # 逻辑控制配置

```

## 🛡️ 许可证

柠檬表单基于 MIT 许可证发布。详细信息请参阅 [LICENSE](https://github.com/bojue/lemon-form/blob/main/LICENSE) 文件。

