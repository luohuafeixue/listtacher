// components/classic/music/index.js
 const mMgr=wx.getBackgroundAudioManager();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    img:String,
    content:String,
    src:String
  },

  /**
   * 组件的初始数据
   */
  data: {
   palyingSrc:false,
   pauseSrc:'images/player@pause.png',
   playSrc: 'images/player@play.png'
  },

  attached:function(event){
     this.onchealisrBlae()
     this.onetBackgroun();
  },
   detached:function(event){

   },
  /**
   * 组件的方法列表
   */
  methods: {
    onplay:function(event){
         if(!this.data.palyingSrc){
          this.setData({
            palyingSrc:true
          })
          mMgr.src=this.properties.src;
         }else{
            this.setData({
              palyingSrc:false
            })

            mMgr.pause()

         }
    },
     onchealisrBlae:function(){
         if(mMgr.paused){
            this.setData({
              palyingSrc:false
            })
         }

         if(mMgr.src==this.properties.src){
          this.setData({
            palyingSrc:true
          }) 
         }
     },

     onetBackgroun:function(event){
      mMgr.onPlay(()=>{
         this.onchealisrBlae();

      })
       
      mMgr.onPause(()=>{
        this.onchealisrBlae();
      })

      mMgr.onStop(()=>{
        this.onchealisrBlae();
      })

     mMgr.onEnded(()=>{
      this.onchealisrBlae();
     })
     }
    
  }
})
