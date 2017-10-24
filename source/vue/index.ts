import Vue, { ComponentOptions }  from 'vue'
import Component from 'vue-class-component'
import App from './component/app.component'

new Vue({
	el: '#app',
	render: h => h(App)
})