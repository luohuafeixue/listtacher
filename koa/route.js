const koa=require('koa');
const fs=require('fs')
const app=new koa();

 app.use(async(ctx)=>{
       let url=ctx.request.url;
       let html=await roter(url);
        ctx.body=html;
 })

 function roter(page){
     return new Promise(function(resolve,reject){
         let pageUrl = `./page/${page}`;
            fs.readFile(pageUrl,'binary',function(err,data){
                console.log(404)
            })
           if(err){
            reject(err)
           }else{
            resolve(data) 
           }
     })
 }
 async function roter(url){
      let page ='404页面',

      switch (url) {
         case '/':;
         page='index.js'
         break;

         case '/async.js':
         page ='get.js'
         break
         case '/async.js':
         page ='get.js'
         break
         case '/async.js':
         page ='get.js'
         break
          default:
          break; 
      }

      let html=await roter(page);

       return html;
 }
app.listen(3000,function(){
     console.log('启动成功')
})