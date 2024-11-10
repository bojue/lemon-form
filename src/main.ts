import './assets/main.css'
import 'ant-design-vue/dist/reset.css';
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { DatePicker,Button,Tag,Typography,Radio  } from 'ant-design-vue';

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(Radio);
app.use(Button);
app.use(Tag);

app.use(Typography);
app.use(DatePicker);
app.use(createPinia())
app.use(router)

app.mount('#app')
