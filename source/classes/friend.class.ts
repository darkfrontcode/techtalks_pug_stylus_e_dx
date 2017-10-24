import IFriend from './friend.interface'

export default class Friend implements IFriend
{
	public name:string
	public url:string

	constructor(name:string, url:string)
	{
		this.name = name;
		this.url = url;
	}
}