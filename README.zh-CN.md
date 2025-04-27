# 柠檬表单

柠檬表单是一个轻量级、灵活且易于使用的表单管理库，基于 Vue.js 和 TypeScript 构建。它为现代 Web 应用程序简化了表单构建和管理的过程，注重性能、扩展性和开发者体验。

## ✨ 功能亮点

- **动态表单渲染**：轻松创建动态表单，所需配置极少。
- **简化表单验证**：内置验证规则并支持自定义验证器。
- **TypeScript 支持**：强类型和 IDE 自动补全功能。
- **响应式和轻量级**：针对桌面和移动平台优化。

## 📦 安装

通过 npm 或 yarn 安装柠檬表单：

```bash
npm install lemon-form
# 或
yarn add lemon-form
```

## 🚀 快速开始

以下是如何在项目中使用柠檬表单的示例：

```vue
<template>
  <LemonForm :model="formData" :rules="formRules">
    <LemonInput v-model="formData.name" label="姓名" />
    <LemonInput v-model="formData.email" label="邮箱" type="email" />
    <LemonButton @click="submitForm">提交</LemonButton>
  </LemonForm>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const formData = ref({
      name: '',
      email: '',
    });

    const formRules = {
      name: [{ required: true, message: '姓名是必填项。' }],
      email: [{ required: true, type: 'email', message: '邮箱格式无效。' }],
    };

    const submitForm = () => {
      console.log('表单已提交', formData.value);
    };

    return { formData, formRules, submitForm };
  },
};
</script>
```

## 📖 文档

有关详细用法和高级功能，请参阅 [柠檬表单文档](https://github.com/bojue/lemon-form/wiki)。

## 🤝 贡献

我们欢迎社区的贡献！有关更多详细信息，请查看我们的 [贡献指南](https://github.com/bojue/lemon-form/blob/main/CONTRIBUTING.md)。

## 🛡️ 许可证

柠檬表单基于 MIT 许可证发布。详细信息请参阅 [LICENSE](https://github.com/bojue/lemon-form/blob/main/LICENSE) 文件。
```
