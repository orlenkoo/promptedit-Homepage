import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { vReveal } from './directives/reveal'
import { vCountUp } from './directives/countUp'

const app = createApp(App)
app.directive('reveal', vReveal)
app.directive('count-up', vCountUp)
app.mount('#app')
