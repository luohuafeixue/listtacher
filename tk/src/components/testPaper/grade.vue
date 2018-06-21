<template>
    <div>
      <van-nav-bar
        left-arrow
        @click-left="goBack"
        />
        <div class="wndeter">
            <img src="./images/gs.jpg" width="100%"/>
        </div>
        <div class="goBacks">
        </div>
        <div class="goBackstr">
            <h4>推荐</h4>
        </div>
         <div class="admin" v-for="(item,index) in admin" :key="index">      
           <van-tag plain type="primary">新</van-tag>
           <a href="#">{{item.composition}}
               <p>{{item.name}}
               <span>{{item.pages}}</span>
               </p>
           </a>
         </div>
    </div>
</template>
 
<script>
  var admin=[
         {
          "composition":"2018届广西桂林市,贺州市高三上学期期末联考:语文",
           "name":"新课标111地区",
           "pages":"共23道题"
          
          },
           {
          "composition":"2018届广西桂林市,贺州市高三上学期期末联考:语文",
           "name":"新课标111地区",
           "pages":"共23道题"
          
          },
           {
          "composition":"2018届广西桂林市,贺州市高三上学期期末联考:语文",
           "name":"新课标111地区",
           "pages":"共23道题"
          
          },
           {
          "composition":"2018届广西桂林市,贺州市高三上学期期末联考:语文",
           "name":"新课标111地区",
           "pages":"共23道题"
          
          },
           {
          "composition":"2018届广西桂林市,贺州市高三上学期期末联考:语文",
           "name":"新课标111地区",
           "pages":"共23道题"
          
          },
           {
          "composition":"2018届广西桂林市,贺州市高三上学期期末联考:语文",
           "name":"新课标111地区",
           "pages":"共23道题"
          
          },
           {
          "composition":"2018届广西桂林市,贺州市高三上学期期末联考:语文",
           "name":"新课标111地区",
           "pages":"共23道题"
          
          },
           {
          "composition":"2018届广西桂林市,贺州市高三上学期期末联考:语文",
           "name":"新课标111地区",
           "pages":"共23道题"
          
          },
           {
          "composition":"2018届广西桂林市,贺州市高三上学期期末联考:语文",
           "name":"新课标111地区",
           "pages":"共23道题"
          
          },
           {
          "composition":"2018届广西桂林市,贺州市高三上学期期末联考:语文",
           "name":"新课标111地区",
           "pages":"共23道题"
          
          },
  ]
    export default {
        data(){
            return{
             admin:admin
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
 .goBacks{
    border-bottom: 2px solid #f5f5f5;
 }
 .goBackstr{
    padding-left: 5%;
    background-color: #f9f9f9;
    
 }
 .goBackstr h4{
     font-weight: normal;
     color: #82888f;
     border-bottom: 1px solid #e7e7e7;
 }
 .admin{
     padding-left: 5%;
     height: 4.5rem;
     line-height: 1.2rem;
     border-bottom: 1px solid #e7e7e7;
     padding-top: 5%;
 }
 .admin a{
     color: #4d4d4d;
     padding-left: 2%;
 }
 .admin a p{
     font-size: 0.5rem;
     padding-top: 2%;
     color: #9d9d9d
 }
 .admin a p span{
     padding-left: 2%;
 }
 .van-tag--primary.van-tag--plain {
    color: #4b0;
}
</style>