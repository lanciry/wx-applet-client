//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'GO-->',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function (options) {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  toAudio: function() {
    wx.navigateTo({
      url: '../audio/audio?msg=哈哈'
    });
  },
  toVidio: function() {
    wx.navigateTo({
      url: '../video/video?msg=呵呵&type=2'
    });
  },
  toTest: function() {
    wx.navigateTo({
      url: '../test/test?msg=呵呵&type=3'
    });
  },
  onShareAppMessage: function () {
    return {
      title: '张建军的小程序',
      path: '/page/index',
      desc: '这就是一个小程序',
      success: function(res) {
        // 分享成功
      },
      fail: function(res) {
        // 分享失败
      }
    }
  }
})
