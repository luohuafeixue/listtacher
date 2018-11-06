import {HTTP} from '../http/http.js';

export class likeModel extends HTTP{
     like(behavior,artID,category){
        
         let url=behavior=='like'?'like':'like/cancel'
         this.request({
            url:url,
            method:'POST',
            data:{
                art_id:artID,
                type:category
            }
         })
     }

    getclassicList(artID,category,sCallback){
         this.request({
             url:'classic/' + category + '/' + artID + '/favor',
             success:sCallback
         })
    }


}