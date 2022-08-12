import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import messagePlugin from '@/utils/message.plugin'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)

firebase.initializeApp({
  apiKey: "AIzaSyBwdKti06m4cuR7OA36KslHpbFoRJFF8Y8",
  authDomain: "vue2-crm-42dfb.firebaseapp.com",
  projectId: "vue2-crm-42dfb",
  storageBucket: "vue2-crm-42dfb.appspot.com",
  messagingSenderId: "280009318756",
  appId: "1:280009318756:web:c9b807f60d1dd6ecf81a71"
})

let app

firebase.auth().onAuthStateChanged(()=> {
  if(!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
