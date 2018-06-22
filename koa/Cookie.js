const Koa  = require('koa');
const app = new Koa();

app.use(async(ctx)=>{
    if(ctx.url=== '/index'){
        ctx.cookies.set(
            'MyName','JSPang'
        );
        ctx.body = 'cookie is ok';
    }else{
        ctx.body = 'hello world'
    }
});

app.listen(3000,function(){
    console.log('启动成功')
})