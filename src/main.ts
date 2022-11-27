import './style.css'
import 'uno.css'
import 'primevue/resources/themes/saga-blue/theme.css' // theme
import 'primevue/resources/primevue.min.css' // core css
import 'primeicons/primeicons.css' // icons

import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import PButton from 'primevue/button'
import App from './App.vue'
import { router } from './router/index'

const app = createApp(App)
app.use(PrimeVue)
app.use(router)
app.component('PButton', PButton)
app.mount('#app')
