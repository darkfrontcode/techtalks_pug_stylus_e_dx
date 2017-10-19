import Vue, { ComponentOptions }  from 'vue'
import Component from 'vue-class-component'

const Stylus = require('./app.style.styl')
const template = require('./app.template.pug')()

interface IFriend
{
	name: string
	url: string
}

class Friend implements IFriend
{
	public name:string
	public url:string

	constructor(name:string, url:string)
	{
		this.name = name;
		this.url = url;
	}
}

@Component({ template })
export default class App extends Vue
{
	public check: boolean = false
	public friend: IFriend = new Friend("Friend Avatar", "../assets/friend.png")

	private friends = new Array<IFriend>(
		new Friend("Wesley Safadão", "../assets/wesley_safadao.png"),
		new Friend("Compadre Washington", "../assets/compadre_washington.jpg"),
		new Friend("Nego do Borel", "../assets/nego_do_borel.jpg"),
		new Friend("Sérgio Mallandro", "../assets/sergio_mallandro.jpg")
	)

	public sort() : void
	{
		const stage = this.clone(this.friend)
		const key = this.rando()

		this.friends = this.friends.filter((friend, index) => {
			if(index != key) return friend 
			this.friend = friend
		})

		this.friends.push(stage)
		this.toogle()
	}

	public unsort() : void
	{
		this.toogle()
	}

	public clone(object:any) : any
	{
		return {...object}
	}

	public rando() : number
	{
		return Math.floor(Math.random() * this.friends.length)
	}

	private toogle() : void
	{
		this.check=!this.check
	}
}