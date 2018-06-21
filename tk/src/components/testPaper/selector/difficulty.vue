<template>
    <div>
       <div class="arrow">
           <div class="arrows">
                <h2>2018届四川省内江市高三第一次</h2>
                <p>模拟考试:文综</p>
           </div>
             <div class="arrowster">
               <h3>试卷难度4.9,满分300分</h3>
               <div class="arrowster-p">
                <p>共分为2个部分:</p>
                 <p>选择题 
                     <span>140分</span>
                 </p>
                 <p> 
                    非选择题 
                    <span>160分</span>
                 </p>
               </div>
             </div>
             <div class="register-button">
            <van-button type="primary" size="large ">开始答题</van-button>
        </div>
       </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{

            }
        },
    }
</script>

<style scoped>
  .arrows{
      padding-top: 5%;
      text-align: center;
  }
  .arrows h2{
      font-weight: normal;
      font-size: 1.1rem;
      color: #333;
  }
  .arrows p{
      font-size: 1rem;
  }
  .arrowster{
      padding-left: 11%;
      padding-top: 15%;
  }
  .arrowster h3{
      font-weight: normal;
      color: #333;
      border-left: 3px solid #4b0;
      text-indent: 0.8rem;
  }
  .arrowster .arrowster-p{
      padding-top: 4%;
  }
  .arrowster .arrowster-p p{
      padding-top: 2%;
      font-size: 0.5rem;
      color:#858585
  }
  .arrowster .arrowster-p p span{
     float: right;
     padding-right: 19%; 
  }
   .register-button{
        padding-top:10%;
        width: 83%;
        padding-left: 8%;
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