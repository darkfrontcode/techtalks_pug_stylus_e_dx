import Vue, { ComponentOptions }  from 'vue'
import Component from 'vue-class-component'

const Pug = require('./test.pug')
// const Stylus = require('./app.component.styl')

@Component({
	template: Pug()
})
export default class App extends Vue
{
	public message: string = 'Hello!'

	public onClick (): void
	{
		window.alert(this.message)
	}
}