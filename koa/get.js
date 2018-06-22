  const koa=require('koa');
  const app=new koa();

  app.use(async(ctx)=>{
      let url=ctx.url;
      let request =ctx.request;
      let req_query=ctx.query;
      let req_querystring = request.querystring;

      ctx.body={
        url,
        request,
        req_query,
        req_querystring
      }
  })

  app.listen(3000,function(){
       console.log('服务器已经启动成功')
  })

  