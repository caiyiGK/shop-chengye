Page({

    /**
     * 管理按钮切换
     */
    handleManage () {
        this.setData({
            isManage: !this.data.isManage    
        })
    },

    data: {
        isManage: false,  // 管理
    }
})

