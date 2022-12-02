import { useState } from "nuxt/app"

export const langCode = () => useState('langCode', () => 0);

export const lang = () => useState('lang', () => (
    {
        titles:
            [
                {
                    text: ["活動", "动态", "Activity"],
                    index: "news"
                },
                {
                    text: ["音楽", "音乐", "Music"],
                    index: "music"
                },
                {
                    text: ["動画", "视频", "Video"],
                    index: "video"
                },
                {
                    text: ["イラスト", "插画", "Gallery"],
                    index: "pic"
                }
            ],
        theme_setting: ['テーマ設定', '主题', 'Theme'],
        lang_setting: ['言語設定', '语言', 'Language'],
        light: ['明り', '明亮', 'Light'],
        dark: ['黒', '黑暗', 'Dark'],
        setting: ['設定', '设置', 'Settings'],
        more: ['もっと', '更多', 'More'],
        moreUrls: [
            {
                text: ["Cloud Music ページへ", '前往网易云音乐主页', 'To Cloud Music page'],
                url: "https://music.163.com/#/artist?id=34227281",
            },
            {
                text: ["Bilibili ページへ", '前往哔哩哔哩主页', 'To Bilibili page'],
                url: "https://space.bilibili.com/43914903",
            },
            {
                text: ["Github ページへ", '前往Github主页', 'To Github page'],
                url: "https://github.com/Kiramei",
            },
            {
                text: ["元のぺーじへ", '前往先前的主页', 'To former page'],
                url: "https://kiramei.cn/former",
            }
        ],
        news_content: [{
            "title": ['新しいアプリ', '新的软件', 'New App'],
            'content': [`<img src='https://kiramei.cn/former/webp/show.png' style="width: 100%;"/>｢Ascii Art」プロジェクトが終に完成いたしました、<br/>アプリはAscii動画の生成ができる、<br/>またこのあぷりはVideo2Text」の改正バージョンて、<br/>Windowsの环境が必要です、<br/>どうぞご覧で下さい。`,
                `<img src='https://kiramei.cn/former/webp/show.png' style="width: 100%;"/>Ascii Art项目完成了，<br/>软件可以将视频转换为ascii序列，<br/>这个程序是Video2Text的改版，<br/>需要windows的运行环境，<br/>请前往项目页浏览一下吧。`,
                `<img src='https://kiramei.cn/former/webp/show.png' style="width: 100%;"/>Video2Text has been finished.<br/>It can process videos to ascii ones.<br/>It's a new version of Video2Text.<br/>It's still only available on Windows.<br/>Please go to the project page to view it.`],
            "date": '2022-11-19',
            "hasBtn": true,
            "btnUrl": "https://github.com/Kiramei/ASCII-Art",
            "btnMode": 2,
            "btnName": ['アプリページへ', '前往项目页', 'To the App page']
        },
        {
            "title": ["イラスト追加", '新增插画', 'New illustrations'],
            "content": [`いろいろなイラストを追加しました,ぜひお見て下さい！`,
                `新增了一些插画，看一下吧`,
                `I added some new illustrations.<br/>You may go and view them.`],
            "date": "2022-10-17",
            "hasBtn": true,
            "btnUrl": '/pic',
            "btnMode": 1,
            "btnName": ['イラストへ', '前往插画', 'To Gallery']
        },
        {
            "title": ["音楽追加", '新增音乐', 'New music'],
            "content": [`いろいろな歌を追加しました,ぜひお聞て下さい！`,
                `新增了一些音乐，听一下吧`,
                `I added some new music.<br/>You may go and listen to them.`],
            "date": "2022-9-6",
            "hasBtn": true,
            "btnUrl": '/music',
            "btnMode": 1,
            "btnName": ['音楽へ', '前往音乐', 'To Music']
        },
        {
            "title": ["新しいアプリ", '新的软件', 'New App'],
            "content": ["｢Video2Text」プロジェクトが終に完成いたしました、<br/>アプリはAscii動画の生成ができる、<br/>一先ずこのアプリはPC限定です",
                `Video2Text 项目完工了，<br/>这个软件可以将视频转换为Ascii序列，<br/>目前这个软件只能在电脑端运行`,
                `Video2Text has been finished.<br/>It can process videos to ascii ones.<br/>It's only available on Windows.`],
            "date": "2020-2-13",
            "hasBtn": true,
            "btnUrl": 'https://github.com/Kiramei/Video2Text',
            "btnMode": 2,
            "btnName": ['アプリページへ', '前往项目页', 'To the App page']
        },
        {
            "title": ["個人情報", '个人信息', 'Personal Infomation'],
            "content": ["僕は今は「Netease Cloud Music｣に音楽を作りているの、どうかよろしくたのむ！",
                '从现在开始我将在网易云音乐作曲，请多关照！',
                `From now on, I'll post some music on Netease Cloud Music.<br/>Please be concerned.`],
            "date": "2020-1-26",
            "hasBtn": true,
            "btnUrl": 'https://music.163.com/#/artist?id=34227281',
            "btnMode": 2,
            "btnName": ['ネトイスページへ', '前往网易云音乐主页', 'To Netease Music page']
        },
        ],
        music_list: [{
            "title": ["最後は、海で来た", '终于到达大海', 'Finally arrive at the Sea'],
            "src": "https://link.jscdn.cn/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBdGpqY2tQeDRTVW9tWGdjbk51aXZfRGhuZWg5P2U9cVUyRWlG.mp3",
        }, {
            "title": ["突然、雨が降りました", '突然，点点细雨', 'Suddenly, it Rains'],
            "src": "https://link.jscdn.cn/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBdGpqY2tQeDRTVW9uSElmdG5ONmpMRWxEWm5WP2U9RzZuUjBs.mp3",
        }, {
            "title": ["秋のイメージ", '秋之印象', 'Image of Autumn'],
            "src": "https://link.jscdn.cn/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBdGpqY2tQeDRTVW9uSHU0UEFTMkNTSFQ1VmstP2U9QTVYbHNY.mp3",
        }, {
            "title": ["旅の初め", '旅行的开始', 'Journey Start'],
            "src": "https://link.jscdn.cn/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBdGpqY2tQeDRTVW9uSF9NYzRNV3NxU0xsbUNWP2U9bldMMjFC.mp3",
        }, {
            "title": ["流ストリーム", '涓涓细流', 'Streaming'],
            "src": "https://link.jscdn.cn/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBdGpqY2tQeDRTVW9uSEFJMXk0V3lkVHZUY3AwP2U9Y3pEWE1s.mp3",
        }, {
            "title": ["空気の匂い", '空气的味道', 'The Smell of Air'],
            "src": "https://link.jscdn.cn/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBdGpqY2tQeDRTVW9uSDNVTnAzMDJaR1JoNTNBP2U9VFgwdjFx.mp3",
        }, {
            "title": ["空が明くる日々", '空明的日子', 'Effulgent Day'],
            "src": "https://link.jscdn.cn/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBdGpqY2tQeDRTVW9uSG9xU0FWOEFQRjhPb3B0P2U9ZzgwREVi.mp3",
        }, {
            "title": ["静がな空", '清净的日子', 'Silent Day'],
            "src": "https://link.jscdn.cn/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBdGpqY2tQeDRTVW9uSDRmMjAwd1ZMUnFLbFREP2U9VnFMRWFD.mp3",
        }, {
            "title": ["今日も始まりましょう", '今天也开始吧', `Let's start the day`],
            "src": "https://link.jscdn.cn/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBdGpqY2tQeDRTVW9uSFl6SjZRU0pXR0RnWmVRP2U9Zjg2Wklo.mp3",
        }, {
            "title": ["闇の中で光を探す", '暗中循光', 'Looking for light in the dark'],
            "src": "https://link.jscdn.cn/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBdGpqY2tQeDRTVW9uSHpINmZ0WUxfbi1QYmx1P2U9YnNSSDhi.mp3",
        }, {
            "title": ["だんだん晴れました", '渐渐晴了', 'It clears up'],
            "src": "https://link.jscdn.cn/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBdGpqY2tQeDRTVW9uSE9odWJHYmNSZ3JaM1piP2U9RENzRnNk.mp3",
        },
        {
            "title": ["星空を見上げ", '仰望星空', 'Starry Sky'],
            "src": "https://link.jscdn.cn/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBdGpqY2tQeDRTVW9uUUNpaTRsU1Z6ZFU0WE1JP2U9VUQ5aUxv.mp3",
        }
        ],
        video_list: [{
            "name": ["空気の匂い", '空气的味道', 'The Smell of Air'],
            "url": "//player.bilibili.com/player.html?aid=500000331&bvid=BV1HK411A7Ap&cid=249115573&page=1&high_quality=1",
            "value": 0
        },
        {
            "name": ["暑い日々", '酷暑的日子', 'Summer Days'],
            "url": "//player.bilibili.com/player.html?aid=85144012&bvid=BV1o7411k7Gy&cid=145570548&page=1&high_quality=1",
            "value": 1
        },
        {
            "name": ["星空を見上げ", '仰望星空', 'Starry Sky'],
            "url": "//player.bilibili.com/player.html?aid=85133801&bvid=BV1Q7411k7Zw&cid=249059267&page=1&high_quality=1",
            "value": 2
        }
        ]
    }
))