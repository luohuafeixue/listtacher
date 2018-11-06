// pages/book/book.js
 import {BookMidle} from '../../models/book.js';
 import {random} from '../../models/model.js';
   const BookM=new BookMidle();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    book:[],
    searchRing:false,
    more:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    BookM.getHotlist().then(res=>{
      this.setData({
         book:this.data.book=res
      })
    })
  },
  
  onSearching(event){
     this.setData({
      searchRing:true
     })
  },

  oncancel(event){
    this.setData({
      searchRing:false
     })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
       
  },

  /**
   * 页面上拉触底事件的处理函数
   */


  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  onReachBottom() {
    
    this.setData({
      more:random(16)
    })
 },
})