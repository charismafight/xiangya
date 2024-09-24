import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { createRouter, createWebHistory } from 'vue-router'
import Information from './components/Information.vue'
import Index from './components/Index.vue'
import Notice from './components/Notice.vue'
import Tmap from '@map-component/vue-tmap';
import Location from './components/Location.vue'
import Invitation from './components/Invitation.vue'
import Schedule from './components/Schedule.vue'
import Hotel from './components/Hotel.vue'
import Contact from './components/Contact.vue'
import Register from './components/Register.vue'
import Countdown from 'vue3-flip-countdown'
import Forecast from './components/Forecast.vue'
import Expert from './components/Expert.vue'



const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Index },
        { path: '/info', component: Invitation },
        { path: '/notice', component: Notice },
        { path: '/hotel_location', component: Location },
        { path: '/schedule', component: Schedule },
        { path: '/hotel', component: Hotel },
        { path: '/contact', component: Contact },
        { path: '/register', component: Register },
        { path: '/forecast', component: Forecast },
        { path: '/expert', component: Expert },
    ]
});

const app = createApp(App);
app.use(Tmap);
app.use(Countdown)
app.use(ElementPlus);
app.use(router);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.mount('#app')
