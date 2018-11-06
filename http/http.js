import {config} from '../config.js';
const tips={
    1: '抱歉，出现了一个错误',
    1005:'appkey无效，请前往www.7yue.pro申请',
    3000:'期刊不存在'
}
export class HTTP{
    request(params){
        if(!params.method){
            params.method='GET'
        }
        wx.request({
           url:config.api_base_url+params.url,
           method:params.method,
           data:params.data,
           header:{
            'content-type':'application/json',
             "appkey":config.appkey,
           },
           success:(res)=>{
              let code=res.statusCode.toString();
               if(code.startsWith('2')){
                params.success && params.success(res.data)
               }else{
                   let err_code=res.data.err_code;
                   this._show_error(err_code);
               }
           },
           fail:(err)=>{
                   this._show_error(err);
           }
        })
    }
    _show_error(err_code){
          if(!err_code){
              err_code=1;
          }
          wx.showToast({
            title: tips[err_code], 
            icon:'none',
            duration:5000
          })
    }

}