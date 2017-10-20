import IFriend from './friend.interface'
import Friend from './friend.class'

export const avatar = new Friend("Friend Avatar", "../assets/friend.png")

export default new Array<IFriend>(
	new Friend("Wesley Safadão", "assets/wesley_safadao.png"),
	new Friend("Cpd. Washington", "assets/compadre_washington.jpg"),
	new Friend("Nego do Borel", "assets/nego_do_borel.jpg"),
	new Friend("Sérgio Mallandro", "assets/sergio_mallandro.jpg"),
	new Friend("Gugu", "assets/gugu.jpg"),
	new Friend("Latino", "assets/latino.jpg"),
	new Friend("Naldo Benny", "assets/naldo.jpg"),
	new Friend("Abestado", "assets/tiririca.jpg")
)