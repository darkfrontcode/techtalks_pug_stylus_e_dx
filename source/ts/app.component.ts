import Vue, { ComponentOptions }  	from 'vue'
import Component 					from 'vue-class-component'
import IFriend 						from './friend.interface'
import Friend 						from './friend.class'
import friends, { avatar } 			from './friends.list'

const Stylus 	= require('./app.style.styl')
const template 	= require('./app.template.pug')()

@Component({ template })
export default class App extends Vue
{
	public check: boolean 			= false
	public friend: IFriend 			= avatar
	private friends: Array<IFriend> = friends

	public shuffle() : void
	{
		const stage = this.clone(this.friend)
		const key = this.random()

		this.friends = this.friends.filter((friend, index) => {
			if(index != key) return friend 
			this.friend = friend
		})

		this.friends.push(stage)
	}

	public sort() : void
	{
		this.shuffle()
		this.check=!this.check
	}

	public clone(friend:Friend) : Friend
	{
		return {...friend}
	}

	public random() : number
	{
		return Math.floor(Math.random() * this.friends.length)
	}
}