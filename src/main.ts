import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import * as ElIcons from '@element-plus/icons'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
const pinia = createPinia()
const app =createApp(App)

//全局注册icons
for(const name in ElIcons){
    app.component(name,(ElIcons as any)[name])
}

app.use(pinia)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
