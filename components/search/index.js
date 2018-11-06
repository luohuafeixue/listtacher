// components/search/index.js
 import {keywordMudle} from '../../models/keyword.js';
 import {BookMidle} from '../../models/book.js';
 import {paginationBev} from '../behaviors/pagination.js'
 const keyword=new keywordMudle();
 const keyliatData=new BookMidle();
Component({
  /**
   * 组件的属性列表
   */
  behaviors:[paginationBev],
  properties: {
    more: {
      type: String,
      observer: 'loadMore'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    triggerList:[],
    keywords:[],
    searching:false,
    loading: false,
    loadingCenter:false,
    q:''
  },
   attached(){
      const triggerList = keyword.getHistory();
      const keywords=keyword.getHot();
      this.setData({
        triggerList,
      })
      keywords.then(res=>{
           this.setData({
            keywords:res.hot
           })
      })  
     
   },
  /**
   * 组件的方法列表
   */
  methods: {
    loadMore(){
         if(!this.data.q){
           return
         }
         if(this._islocked()){
            return 
         }
         if(this.hasMore()){
          this.locked();
          keyliatData.search(this.getCurrentStart(),this.data.q).then(res=>{
            this.setMoreData(res.books);
            this.unlocked();//成功以后调用锁
          },()=>{
            this.unlocked();//失败也调用锁

          })
         }

    },
    onCancel(event){
      this.triggerEvent('cancel', {}, {})
    },
    onDelete(event){
     this._clashowResult();
    },
    onConfirm(event){
      this._showResult();
      this._showLoadingCenter();
      this.initialize();
       let q=event.detail.value || event.detail.text;
       keyliatData.search(0,q).then(res=>{
           this.setMoreData(res.books);
           this.setTotal(res.total);
            this.setData({
              q:q
            })
       })
       keyword.addToHistory(q);
       this._hideLoadingCenter();
    },

    _showLoadingCenter() {
      this.setData({
        loadingCenter: true
      })
    },

    _hideLoadingCenter() {
      this.setData({
        loadingCenter: false
      })
    },

    _showResult(){
      this.setData({
        searching:true
      })
    },
    _clashowResult(){
      this.setData({
        searching:false,
        q:''
      })
    },
   _islocked(){
      return this.data.loading?true:false
   },
   locked(){
     this.data.loading=true;
   },

   unlocked(){
    this.data.loading=false;
  },

  },
  

})
