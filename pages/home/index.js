Page({
    data: {
        quickData: [
            {imgUrl: '', text: '在线检测'},
            {imgUrl: '', text: '专家咨询'},
            {imgUrl: '', text: '活动'},
            {imgUrl: '', text: '掌柜'}
        ],
        categoryData: [
            {imgUrl: '', text: '卸妆'},
            {imgUrl: '', text: '洗面奶'},
            {imgUrl: '', text: '肌底液'},
            {imgUrl: '', text: '化妆水'},
            {imgUrl: '', text: '精华/原液'},
            {imgUrl: '', text: '乳液/面霜'},
            {imgUrl: '', text: '眼霜'},
            {imgUrl: '', text: '隔离/底妆'}
        ],

        indicatorDots: true, // 是否显示面板指示点
        autoplay: true, // 是否自动切换
        interval: 5000, // 自动切换时间间隔
        indicatorColor: '#D3D3D3', // 指示点颜色
        indicatorActiveColor: '#999999', // 当前选中的指示点颜色
    }
})

