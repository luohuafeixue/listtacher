  function test(){
      return 82
  }
  
   async function tes(){
        return 83
   }

   async function te(){
        const v1=await test();
        const v2=await tes();
        console.log(v1,v2)
   }

   te()
// async 异步运行  返回的是Promiseno