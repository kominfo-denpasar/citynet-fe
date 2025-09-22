import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faSearch, faMicrophone, faBars, faTimes, faMinus, faPlus, faFileAlt, faHome, faUser, faCog } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'

library.add(faSearch, faMicrophone, faBars, faFacebook, faTwitter, faTimes, faMinus, faPlus, faFileAlt, faHome, faUser, faCog)

const app = createApp(App)
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')