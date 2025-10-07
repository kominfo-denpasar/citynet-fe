import { createApp } from "vue";
import { createHead } from '@vueuse/head'

import App from "./App.vue";
import router from "./router";
import pinia from "./store";

import "./assets/main.css";

const head = createHead()
const app = createApp(App)

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faSearch, faMicrophone, faBars, faTimes, faMinus, faPlus, faFileAlt, faHome, faUser, faCog, faWheelchair } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'

library.add(faSearch, faMicrophone, faBars, faFacebook, faTwitter, faTimes, faMinus, faPlus, faFileAlt, faHome, faUser, faCog, faWheelchair)

app.use(pinia)
app.use(router)
app.use(head)

app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')