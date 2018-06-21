<template>
    <div>
       <van-nav-bar
        title="练习"
        left-arrow
        @click-left="goBack"
        />
        <div class="swiper-area">
            <van-swipe :autoplay="3000">
                <van-swipe-item v-for="(banner,index) in bannerPicArray" :key="index">
                    <img :src="banner.imageUrl" width="100%"/>
                </van-swipe-item>
           </van-swipe>
        </div>
        <div class="elment">
           <van-row>
            <van-col span="24">
               <a href="#" class="clearfix">
                    <img :src="locationIcon" width="20%" class="fl"/>
                    <div class="fr andmss">
                        <h3>罗明</h3>
                        <p>本周还没有大队题目，快去练习吧</p>
                    </div>
               </a>
            </van-col>
           </van-row>
        </div>
        <!--语文部分-->
        <div class="spaterAndes">
            <van-row>
                <van-col span="6" v-for=" (tbrns,index) in bannerPicArr" :key="index">
                  <a href="#">
                       <img :src="tbrns.imageUr" width="45%"/>
                       <p>{{tbrns.name}}</p>
                  </a>
                </van-col>
            </van-row>
        </div>
        <div class="nts"></div>
        <!--高中推荐-->
        <div class="recommended">
            <h2>高中推荐</h2>
            <van-row>
                <van-col :span="12" v-for=" (brtche,index) in brtcher" :key="index">
                    <img :src="brtche.image" width="93%"/>
                </van-col>
            </van-row>
        </div>
       <div class="active">
         <van-tabbar v-model="active">
            <van-tabbar-item icon="wap-home">标签</van-tabbar-item>
            <van-tabbar-item icon="contact" >标签</van-tabbar-item>
            <van-tabbar-item icon="pending-orders" >标签</van-tabbar-item>
         </van-tabbar>
       </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                locationIcon:require('./images/tx.jpg'),
                bannerPicArray:[
                    {imageUrl:'http://7xjyw1.com1.z0.glb.clouddn.com/simleVueDemoPic001.jpg'},
                    {imageUrl:'http://7xjyw1.com1.z0.glb.clouddn.com/simleVueDemoPic002.jpg'},
                    {imageUrl:'http://7xjyw1.com1.z0.glb.clouddn.com/simleVueDemoPic003.jpg'},
                  ],

               bannerPicArr:[
                   {
                       imageUr:require("./images/tx1.jpg"),
                       "name":"语文"
                   },
                   {
                       imageUr:require("./images/sx.jpg"),
                        "name":"数学"
                   },
                   {
                       imageUr:require("./images/yx.jpg"),
                       "name":"英语"
                   },
                   {
                       imageUr:require("./images/ts.jpg"),
                       "name":"英语听说"
                   },
                    {
                       imageUr:require("./images/wl.png"),
                       "name":"物理"
                   },
                   {
                       imageUr:require("./images/jh.jpg"),
                       "name":"更多"
                   }
               ],
                brtcher:[
                    {image:require("./images/cy.jpg")},
                    {image:require("./images/dc.jpg")},
                    {image:require("./images/cy.jpg")},
                    {image:require("./images/dc.jpg")}
                ],
                active: 0,
               
            }
        },
        methods:{
           goBack() {
                this.$router.go(-1)   
            },
        }
    }
</script>

<style scoped>
.swiper-area{
      width:20rem;
      clear:both;
      margin-top: 0.25rem;
  }
  .elment{
      padding-top: 3%;
      padding-left: 3%;
  }
  .andmss{
      width: 76%;
      padding-top: 2%;
  }
  .andmss h3,.andmss p{
      color: #333333;
      font-size: 0.8rem;
  }
  .andmss p{
      padding-top:2%; 
      color:#999999;
  }
  .fl{
      float: left;
  }
  .fr{
      float: right;
  }
   .spaterAndes{
       padding-left: 7%;
       padding-top: 5%;
       padding-bottom: 3%;
   }
   .spaterAndes a p{
       padding-top: 10%;
       color: #333333;
   }
    .spaterAndes .van-row div:nth-child(4) img{
       padding-left: 10%
    }
   .spaterAndes .van-row .van-col:nth-child(5){
           padding-top: 5%;
   }
   .spaterAndes .van-row .van-col:nth-child(6){
       padding-top: 5%;
   }
   
    .recommended h2{
       font-size: 1rem;
       padding-left: 5%;
       padding-top: 2%;
    }
    .recommended .van-row{
      padding-top: 3%;
      padding-left: 4%
    } 
    .recommended .van-row .van-col:nth-child(3){
        padding-top: 4%;
    }
    .recommended .van-row .van-col:nth-child(4){
         padding-top: 4%;
    }
    .active{
       padding-bottom: 17%;
    }

    .nts{
        background-color: #f5f5f5;
        width: 100%;
        height: 1rem;
    }
</style>