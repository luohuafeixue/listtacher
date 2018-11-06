   import {HTTP} from '../http/http-p.js'
 
 export class keywordMudle extends HTTP{
    key = 'q'
    maxLength = 10

    getHistory(){
        //读取缓存
        const words = wx.getStorageSync(this.key);
            if(!words){
                 return [];
            }
            return words
    }

    getHot(){
       return this.request({
           url:'/book/hot_keyword'
       })
    }
    addToHistory(keyword){
      let words=this.getHistory();
      let haslist=words.includes(keyword);
          if(!haslist){
            const length = words.length;
               if(length>=this.maxLength){
                    words.pop();
               }
               words.unshift(keyword)
               wx.setStorageSync(this.key, words)
          }



    }
 }