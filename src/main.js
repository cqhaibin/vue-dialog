// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import HDialog from './components/master'

Vue.component('HDialog', HDialog) /** 存放在根组件同级的Vue实例上 */

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<div><App></App><HDialog ref="hDialog" ></HDialog></div>',
  components: { App }
})
