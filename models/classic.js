import {HTTP} from '../http/http.js';

export class classModle extends HTTP{
    getLatest(sCallback){
        this.request({
            url:"classic/latest",
            success:(res)=>{
             sCallback(res);
             this._setisNxtIindex(res.index);
             let key = this._getkey(res.index);
               wx.setStorageSync(key,res);
            },
           
          })  
    }
    getClassick(index,nextOnprevious,sCallback){
             //数据请求保存在本地缓存
             let key = nextOnprevious=='next'? this._getkey(index+1):this._getkey(index-1);
             let classic=wx.getStorageSync(key);
              if(!classic){
                this.request({
                    url:'classic/' + index + '/' + nextOnprevious,
                    success:(res)=>{
                        sCallback(res);
                        wx.setStorageSync(this._getkey(res.index),res)
                       },
                  })
              }else{
                sCallback(classic)  
              }

          
    }

    getMyFavor(success) {
        const params = {
            url: 'classic/favor',
            success: success
        }
        this.request(params)
    }

    isFist(index){
        return index==1?true:false;
    }

    isNaxt(index){
       let latestIindex=this._getisNxtIindex();
       return latestIindex==index?true:false;
    }


    _setisNxtIindex(index){
        wx.setStorageSync('lest', index);
    }

    _getisNxtIindex(){
    let index = wx.getStorageInfoSync('lest');
       return index;
    }

     _getkey(index){
          let key ='classic-' + index;
          return key
     }
   
}