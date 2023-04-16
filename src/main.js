import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createStore } from 'vuex'
import { createVuetify } from 'vuetify'

import App from './App.vue'
import router from './router'
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import './assets/main.css'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
    components,
    directives,
})


const app = createApp(App)

app.use(vuetify)
app.use(createPinia())
app.use(createStore())
app.use(router)
app.mount('#app')
