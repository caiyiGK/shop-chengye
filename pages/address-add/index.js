Page({
    /**
     * 设置默认地址
     */
    handleSetDefault (e) {
        this.setData({
            isDefault: e.detail.value
        })
    },

    data: {
        maxLength: 200,  // 地址栏最大输入长度，设置为 -1 的时候不限制最大长度
        isDefault: false, // 是否默认地址
    }
})

