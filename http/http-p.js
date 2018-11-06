import {config} from '../config.js';
const tips={
    1: '抱歉，出现了一个错误',
    1005:'appkey无效，请前往www.7yue.pro申请',
    3000:'期刊不存在'
}
export class HTTP{
    request({url,data={},method='GET'}){
       
       return new Promise((resolve,reject)=>{
         
         this._request(url,resolve,reject,data,method)

       });
    }
    _request(url,resolve,reject,data={},method='GET'){
      
        wx.request({
        
           url:config.api_base_url+url,
           method:method,
           data:data,
           header:{
            'content-type':'application/json',
             "appkey":config.appkey,
           },
           success:(res)=>{
              const code=res.statusCode.toString();
               if(code.startsWith('2')){
                resolve(res.data)
               }else{
                   reject()
                   const err_code=res.data.err_code;
                   this._show_error(err_code);
               }
           },
           fail:(err)=>{
            reject()
            this._show_error(1);
           }
        })
    }
    _show_error(err_code){
          if(!err_code){
              err_code=1;
          }
           const tip=this.tips[err_code];
          wx.showToast({
            title: tip?tip:tips[1], 
            icon:'none',
            duration:5000
          })
    }

}