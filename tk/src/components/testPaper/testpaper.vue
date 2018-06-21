<template>
    <div>
      <van-nav-bar
        title="试卷"
        left-arrow
        @click-left="goBack"
        />
        <!--热门推荐-->
         <div class="volume">
             <h3>热门套卷</h3>
             <div class="spanTacer">
                <van-row>
                 <van-col span="12" v-for="(volumes,index) in volume" :key="index">
                     <a href="#" >{{volumes.name}}</a>
                 </van-col>
             </van-row>
             </div>
         </div>
         <div class="endes">
            <h3>高考真题/模拟题<span>11026份</span></h3>
            <packaging :floorData="datas.packaging1"></packaging>
         </div>
           <div class="endes">
            <h3>期末考试<span>3628份</span></h3>
             <packaging :floorData="datas.packaging2"></packaging>
            </div>
            <div class="endes">
            <h3>期中考试<span>355份</span></h3>
             <packaging :floorData="datas.packaging3"></packaging>
            </div>
       </div>
</template>

<script>
 var admster=[

    {'name':'高二下期中试卷'},
    {'name':'高二下期末试卷'},
    {'name':'高一下期中试卷'},
    {'name':'高一下期末试卷'}   
 ]
 import axios from 'axios'
 import packaging from '@/components/testPaper/packaging/packaging'
 var datas=require('./packaging.json')
 
    export default {
        data(){
            return{
               datas:datas, 
               volume:admster,
            }
        },
         components:{
            packaging
         },
         methods:{
           goBack() {
                this.$router.go(+1)    
            },
        },
       

    }
</script>

<style scoped>
  .van-row{
      padding: 0 5%;
  }
  
  
  .volume h3,.endes h3{
      font-weight: normal;
      padding-top: 2%;
      padding-left: 5%;
      color: #333;
      font-size: 0.95rem;
      border-bottom: 1px solid #f5f5f5;
      padding-bottom: 2%;
  }
  .spanTacer{
      font-size: 0.8rem;
  }
  .spanTacer .van-col{
    border-bottom: 1px solid #e8e8e8;
    padding-left: 5%;
    line-height: 2.5rem;
  }
  .spanTacer .van-col:nth-child(3){
      border-bottom: none;
  }
  .spanTacer .van-col:nth-child(4){
      border-bottom: none;
  }
  .spanTacer a{
      color: #0099ff;
     
  }
  .endes{
      width: 90%;
      padding-left: 5%;
  }
  .endes h3 {
      padding-left: 0;
  }
  .endes h3 span{
      font-size: 0.5rem;
      display: inline-block;
      text-indent: 1rem;
      color: #333
  }
</style>