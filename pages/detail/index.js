Page({

    /**
     * tabId 切换 ['商品' = 0, '详情' = 1, '评价' = 2]
     */
    handleTab (e) {
        this.setData({
            tabActive: e.currentTarget.dataset.index
        })
    },

    data: {
        tabData: ['商品', '详情', '评价'],
        tabActive: 0,

        indicatorDots: true, // 是否显示面板指示点
        autoplay: true, // 是否自动切换
        interval: 5000, // 自动切换时间间隔
        indicatorColor: '#D3D3D3', // 指示点颜色
        indicatorActiveColor: '#999999', // 当前选中的指示点颜色
    }
})

