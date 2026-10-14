// ============================================================
// 网站上的作品数据。想改数字/加作品，只改这个文件就行。
//
// 每个作品一段 { ... }，字段说明：
//   title     作品名
//   en        英文副标题
//   desc      一句话介绍
//   role      我负责的部分
//   link      点击跳转的链接
//   highlight 绿色高亮标签（按来源保留统计口径，如使用人数）
//   tags      灰色标签（版本号等）
//   platform  小红书作品填 xiaohongshu，显示最新版 App 体验提示
//   icon      作品图标图片路径（正方形）
//   media     介绍下方的截图/视频：image 或 video（可带 poster），ratio = 宽÷高
//   qr        小程序码：image 图片，label 说明文字
//   hidden    填 true 则不在网站上展示
//   iconViewBox 作品图标在后台截图中的区域（x y width height）
//   usage     后台展示人数换算值；“万”是约数，不代表精确人数
//   link      无体验链接时填 null，作品仍可展示
//             小红书链接要用「分享 → 复制链接」得到的 pc_share 链接，别人才能打开
//   proof     用户口碑：text 一句话，links 外部链接，images 截图
//
// 注意：文字两边的英文引号 "" 和每行末尾的逗号不要删。
// 作品顺序 = 网站上的顺序，编号会自动生成。
// ============================================================

window.XHS_SNAPSHOT = {
  date: "2026-10-13",
  image: "assets/red-app-dashboard-2026-10-13.png"
};

window.WORKS = [
  {
    "title": "Glam · AI 美妆工作室",
    "en": "AI Makeup Studio",
    "icon": "assets/icon-glam.jpg",
    "media": [
      { "video": "assets/glam-demo.mp4", "poster": "assets/glam-demo-poster.jpg", "ratio": 1.82 },
      { "image": "assets/glam-result.jpg", "ratio": 1.33 }
    ],
    "desc": "上传一张参考妆容和一张自拍，AI 把参考妆容迁移到自己的脸上并解读妆容特征，可用一句话继续微调。",
    "role": "产品定义 · 色彩规则设计 · 全流程 Vibe Coding",
    "link": "https://copy-of-glam-ai-makeup-studio-final-version-859787331709.us-west1.run.app/",
    "highlight": [
      "Live · Product Demo"
    ],
    "tags": []
  },
  {
    "title": "DivaTI · 人格测试",
    "en": "Which Diva Are You",
    "icon": "assets/icon-dvti.jpg",
    "media": [{ "image": "assets/dvti-home.jpg", "ratio": 1.97 }],
    "desc": "MBTI × Diva 主题的人格测试，题目体系、结果卡片与传播链路独立完成；网站累计访问 35 万+，获得测试结果用户 180,337 UV。",
    "role": "策划 · 题目与结果体系 · 开发上线 · 数据复盘",
    "link": "https://dvti.top",
    "proof": {
      "text": "多个国家和地区均有用户参与，抖音、小红书、Threads 上均有用户自发分享，其中一条 Threads 帖子获 4,571 赞。",
      "links": [{ "label": "Threads 用户分享", "url": "https://www.threads.com/share/Fid47bGpS/" }],
      "images": ["assets/proof-dvti-threads.jpg", "assets/proof-dvti-search.jpg"]
    },
    "highlight": [
      "35 万+访问"
    ],
    "tags": [
      "180,337 结果 UV"
    ]
  },
  {
    "title": "Let's 显化 · 向宇宙下单",
    "platform": "xiaohongshu",
    "iconViewBox": "992 389 108 108",
    "usage": 124000,
    "en": "Universe Order",
    "qr": { "image": "assets/qr-universe-wechat.png", "label": "已上线微信小程序" },
    "desc": "把愿望转化为一张有仪式感的宇宙订单，围绕表达、分享与复访持续迭代。",
    "role": "产品概念 · 视觉与交互 · Vibe Coding · 数据迭代",
    "link": "https://www.xiaohongshu.com/discovery/item/6a5a06b3000000000f008bc2?source=webshare&xhsshare=pc_web&xsec_token=ABIHK82aoCTsn6XspO7KEtqDL2j4q4_ZFl5B4EZSU9yGg=&xsec_source=pc_share",
    "proof": {
      "text": "Threads 上有用户自发推荐，单帖 787 赞。",
      "links": [{ "label": "Threads 用户推荐", "url": "https://www.threads.com/@sirosyan_/post/DbJCXyelG1W" }],
      "images": ["assets/proof-universe-threads.jpg"]
    },
    "highlight": [
      "12.4 万人使用"
    ],
    "tags": [
      "V1.0.7"
    ]
  },
  {
    "title": "表情包合拍",
    "platform": "xiaohongshu",
    "iconViewBox": "38 64 108 108",
    "usage": 45000,
    "en": "Meme Photo Studio",
    "media": [
      { "video": "assets/meme-demo.mp4", "poster": "assets/meme-demo-poster.jpg", "ratio": 0.594 },
      { "image": "assets/proof-meme-ranking.jpg", "ratio": 0.599 }
    ],
    "proof": {
      "text": "登上小红书官方小工具必吃榜。"
    },
    "desc": "一个人或两个人拍照，即可生成有梗的表情包合拍图，缩短从拍摄、生成到分享的完整链路。",
    "role": "场景洞察 · 交互设计 · 前端实现 · 上线迭代",
    "link": "https://www.xiaohongshu.com/discovery/item/6a8c305200000000080139e4?source=webshare&xhsshare=pc_web&xsec_token=ABco-yNoPPcZlo7QB7m9W-9WHFAJcopUSKTx8FcVx-asE=&xsec_source=pc_share",
    "highlight": [
      "4.5 万人使用"
    ],
    "tags": [
      "V1.0.2"
    ]
  },
  {
    "title": "Y2K 彩钻贴纸",
    "platform": "xiaohongshu",
    "iconViewBox": "38 389 108 108",
    "usage": 71000,
    "en": "Y2K Gem Sticker Maker",
    "media": [{ "video": "assets/gem-demo.mp4", "poster": "assets/gem-demo-poster.jpg", "ratio": 1.92 }],
    "desc": "把照片转成千禧年彩钻贴纸风格，为头像、手帐与社交内容提供轻量化创作素材。",
    "role": "视觉概念 · 生成链路 · Vibe Coding · 发布上线",
    "link": "https://www.xiaohongshu.com/discovery/item/6a8c68f6000000002a02c5ec?source=webshare&xhsshare=pc_web&xsec_token=ABco-yNoPPcZlo7QB7m9W-9cauadxqvBkHqIEv6mz6U7o=&xsec_source=pc_share",
    "highlight": [
      "7.1 万人使用"
    ],
    "tags": [
      "V1.0.7"
    ]
  },
  {
    "title": "颠倒世界打捞队",
    "en": "Upside Down",
    "media": [{ "video": "assets/upside-demo.mp4", "poster": "assets/upside-demo-poster.jpg", "ratio": 1.79 }],
    "desc": "怪奇物语主题黄金矿工小游戏，独立完成美术资产生成、数值策划、关卡设计等。",
    "platform": "xiaohongshu",
    "iconViewBox": "38 714 108 108",
    "usage": 13000,
    "link": null,
    "highlight": ["1.3 万人使用"],
    "tags": ["V1.0.0"]
  },
  {
    "title": "第5求生",
    "hidden": true,
    "en": "Survivor Lineup Finder",
    "desc": "第五人格求生者阵容查询与配队工具。",
    "platform": "xiaohongshu",
    "iconViewBox": "992 64 108 108",
    "usage": 78,
    "link": null,
    "highlight": ["78 人使用"],
    "tags": ["V1.0.0"]
  }
];
