import Vue, { ComponentOptions }  	from 'vue'
import Component 					from 'vue-class-component'
import Friend 						from '../../classes/friend.class'
import friends, { avatar } 			from '../../classes/friends.list'

const Stylus 	= require('./app.style.styl')
const template 	= require('./app.template.pug')()

@Component({ template })
export default class App extends Vue
{
	public active: boolean = false
	public friend: Friend = avatar
	private friends: Array<Friend> = friends

	get isActive() : string
	{
		return this.active ? 'active' : ''
	}

	public shuffle() : void
	{
		const stage = this.clone<Friend>(this.friend)
		const key = this.random()

		this.friends = this.friends.filter((friend, index) => {
			if(index != key) return friend 
			this.friend = friend
		})

		this.friends.push(stage)
	}

	public start() : void
	{
		this.shuffle()
		this.active = true
	}

	public clone<T>(friend:T) : T
	{
		return <T>{...<any>friend}
	}

	public random() : number
	{
		return Math.floor(Math.random() * this.friends.length)
	}

}