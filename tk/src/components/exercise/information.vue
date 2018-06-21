<template>
    <div>
       <van-nav-bar
        title="完善信息"
        left-arrow
        @click-left="goBack"/>
        <div class="scope">
            <p>请完善信息确定练习范围</p>
        </div>
        <div class="top">
            <div class="xueyi">
                <span>学习阶段:</span>
                <ul>
                    <li v-bind:style="styleObject">初中</li>
                    <li>高中</li>
                </ul>
            </div>
            <div class="xue">
                <span>考试时间:</span>
                <ul>
                    <li v-for="(item,index) in xue" :key="index">{{item}}</li>
                </ul>
            </div>
            <div class="username">
            <van-field
                v-model="username"
                label="昵称"
                icon="clear"
                placeholder="2-8个字"
                
                @click-icon="username = ''"/>
            </div>
             <div class="register-button">
            <van-button type="primary" size="large">完成</van-button>
        </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
          return{
            styleObject:{
              color: '#fff',
              backgroundColor: '#4b0'
            },
            xue:[2019,2020,2021,2022],
            username:''
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
 .top{
     padding-top: 4%;
 }
  .scope{
      background-color: #f5f5f5;
      width: 96%;
      padding: 0.4rem;
   
  }
  .scope p,.xueyi{
      padding-left: 0.5rem;
      font-size: 0.8rem;
      color: #a2a2a3;
  }
  .xueyi{
      color: #333;
      clear: both;
  }
 .xueyi ul{
    width: 70%;
    float: right;
    clear: both;
    border: 1px solid #4b0;
    color: #4b0;
    margin-right: 3%;
    
 }
 .xueyi ul li{
    float: left;
    padding-left: 15%;
    width: 35%;
    line-height: 1.6rem;
 }
 .xueyi span{
     padding-top: 0.2em;
     display: inline-block;
     padding-left: 1%;
 }
  .xue{
      padding-top: 5%;
      clear: both;
  }
 .xue span{
   padding-left: 3%;
   font-size: 0.8rem;
 }
 .xue ul{
     width: 68%;
     float: right;
     border: 1px solid #4b0;
     clear: both; 
     margin-right: 3%;
 }
 .xue ul li{
     float: left;
     width: 24%;
     font-size: 0.8rem;
     border-right: 1px solid #4b0;
     text-align: center;
 }
 .xue ul li:last-child{
     border-right:none;
 }
 .username{
     padding-top: 3%;
 }

 .register-button{
    width: 94%;
    padding-left: 3%;
    padding-top: 2%;
 }
 .van-button--large {
   height: 40px;
   line-height: 40px;
}
</style>