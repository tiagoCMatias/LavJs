// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VCard,
  VBtn,
  VIcon,
  VDialog,
  VDataTable,
  VSelect,
  VTextField,
  VProgressLinear,
  VSubheader,
  VForm,
  VGrid,
  VAlert,
  VToolbar,
  transitions
} from 'vuetify'
import '../node_modules/vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VSubheader,
    VBtn,
    VCard,
    VDataTable,
    VProgressLinear,
    VSelect,
    VDialog,
    VForm,
    VIcon,
    VAlert,
    VTextField,
    VGrid,
    VToolbar,
    transitions
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
