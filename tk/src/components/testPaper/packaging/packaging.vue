<template>
   <div>
         <div class="endes">
            <div class="end">
                <van-row>
               <van-col span="8" v-for="(nbst,index) in floorData" :key="index" class="col">
                   <a href="#"> 
                     <img :src="nbst.img" width="25%"/>
                     <span>{{nbst.name}}</span>
                   </a>
               </van-col>
            </van-row>
            </div>
         </div>
         
    </div>
</template>

<script>
    export default {
        props:['floorData'],
        data(){
            return{
             
            }
        },
        
        
    }
</script>

<style scoped> 
  .van-row .van-col{
      height: 3rem;
  }
  .van-row .col:nth-child(3n){
      text-align: right;
  }
  .van-row .col:nth-child(3n-1){
      text-align: center;
  }
  .endes .end{
     padding-top: 4%;
  }
  .endes .end span{
      padding-left: 5%;
      color: #0099ff;
  }
</style>