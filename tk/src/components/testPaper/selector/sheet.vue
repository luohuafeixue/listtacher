<template>
    <div>

        <div class="arrow">
           <div class="arrows">
                <h2>2018届四川省内江市高三第一次</h2>
                <p>模拟考试:文综</p>
           </div>
             <div class="wenzong">
                 <div>
                  <h4>选择题</h4>
                 <ul class="clearfix">
                     <li>1</li>
                     <li>2</li>
                     <li>3</li>
                     <li>4</li>
                     <li>5</li>
                     
                 </ul>
                 </div>
                 <div class="clearf">
                 <h4>非选择题</h4>
                 <ul class="clearfix">
                     <li>1</li>
                     <li>2</li>
                     <li>3</li>
                     <li>4</li>
                     <li>5</li>
                     <li>6</li>
                     <li>7</li>
                 </ul>
                 </div>
             </div>
             <div class="register-button">
                <van-button type="primary" size="large ">交卷</van-button>
               </div>
           </div>
        </div>
  
</template>

<script>
import json from './json.json'
    export default {
        data(){
            return{
              json:json
            }
        },
        methods:{
           goBack() {
                this.$router.go(+1);
                
            }

        }

    }
</script>

<style scoped>
  .arrows{
      padding-top: 5%;
      text-align: center;
  }
  .arrows h2{
      font-weight: normal;
      font-size: 1rem;
      color: #333;
  }
  .wenzong{
      padding-left: 5%;
  }
  .wenzong h4{
     font-weight: normal;
     color: #333;
     font-size: 0.8rem;
     
  }
  .wenzong ul {
      width: 96%;
      padding-left: 4%;
  }
  .wenzong ul li{
      float: left;
      margin-right: 8%;
      width: 2rem;
      text-align: center;
      height: 2rem;
      line-height: 2rem;
      border-radius: 50%;
      border: 1px solid #4b0;
      margin-top: 5%;
  }
  .wenzong .clearf{
      padding-top: 7%;
  }
  .register-button{
     padding-top:10%;
     width: 94%;
     padding-left: 3%;
      
    }
   .van-button--large{
     height: 40px;
   }
   .van-button--large{
    line-height: 40px;
   }
 .van-field .van-cell__title {
   max-width: 57px;
}
</style>