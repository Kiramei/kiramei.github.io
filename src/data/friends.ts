// 友情链接数据配置
// 用于管理友情链接页面的数据

export interface FriendItem {
	id: number;
	title: string;
	imgurl: string;
	desc: string;
	siteurl: string;
	tags: string[];
}

// 友情链接数据
export const friendsData: FriendItem[] = [
	{
		id: 1,
		title: "HydrogenE7",
		imgurl: "https://avatars.githubusercontent.com/u/37802781?v=4",
		desc: "A dream chaser with high enthusiasm of computer science.",
		siteurl: "https://www.hz2016.com/",
		tags: ["Security", "Friend"],
	},
	{
		id: 2,
		title: "pur1fy",
		imgurl: "https://avatars.githubusercontent.com/u/139786997?v=4",
		desc: "Main developer of Blue Archive Auto Script",
		siteurl: "https://github.com/pur1fying",
		tags: ["Backend", "Friend"],
	},
	{
		id: 3,
		title: "abinea",
		imgurl: "https://avatars.githubusercontent.com/u/73068450?v=4",
		desc: "A lazy coder👿, like everything particularly front-end. Vuejs enthusiast, also a rustacean.",
		siteurl: "https://github.com/abinea",
		tags: ["Frontend", "Friend"],
	},
	{
		id: 4,
		title: "wenjiu",
		imgurl: "https://avatars.githubusercontent.com/u/118751360?v=4",
		desc: "Dedicated into IC Design and opensource community. A rust enthusiast.",
		siteurl: "https://github.com/CodeWenjiu",
		tags: ["Frontend", "Friend"],
	},
	{
		id: 5,
		title: "BAAS Wiki",
		imgurl:
			"https://github.com/pur1fying/blue_archive_auto_script/blob/master/gui/assets/logo.png?raw=true",
		desc: "Blue Archive Auto Script Manual",
		siteurl: "https://baas.wiki",
		tags: ["Docs"],
	},
];

// 获取所有友情链接数据
export function getFriendsList(): FriendItem[] {
	return friendsData;
}

// 获取随机排序的友情链接数据
export function getShuffledFriendsList(): FriendItem[] {
	const shuffled = [...friendsData];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}
