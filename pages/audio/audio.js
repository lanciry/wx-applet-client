// pages/audio/audio.js
Page({
  data:{
    poster: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1493789373727&di=ecf285522f920f43055e51b481529eec&imgtype=0&src=http%3A%2F%2Fp4.gexing.com%2FG1%2FM00%2F0C%2F1D%2FrBACFFMRtt7wEStnAACop0hp178072.jpg',
    name: 'Liekkas',
    author: 'Sofia Jannok ',
    src: 'http://www.tingge123.com/mp3/2015-11-06/1446773297.mp3'
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    wx.hideShareMenu();
    console.log(options);
  },
  onReady:function(){
    // 页面渲染完成
    this.audioCtx = wx.createAudioContext("myAudio");
  },
  onShow:function(options){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  audioPlay: function() {
    this.audioCtx.play();
  },
  audioPause: function () {
    this.audioCtx.pause()
  },
  audioStart: function () {
    this.audioCtx.seek(0)
  }
})