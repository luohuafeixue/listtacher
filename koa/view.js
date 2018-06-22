const koa=require('koa');
const views = require('koa-views')
const path = require('path')
const app=new koa()

 app.use(views(path.join(__dirname,'./index'),{
     extension:'ejs'
 }));

 app.use(async(ctx)=>{
     let title='你好';
     await ctx.render('view',{
        title
     })
 })

 app.listen(3000,function(){
       console.log('成功')
 })