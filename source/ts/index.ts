import Vue, { ComponentOptions }  from 'vue'
import Component from 'vue-class-component'
import App from './app'

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})