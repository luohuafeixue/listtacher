<template>
    <div>
          <van-nav-bar
        title="科目设置"
        left-text="返回"
        left-arrow
        @click-left="goBack"/>
      <!--科目设置-->
      <div class="btns clearfix " v-for="(ban,index) in bans" :key="index">
         <img :src="ban.imageUr" width="8%" class="fl"/>
         <van-switch-cell v-model="ban.isSelected" :title="ban.name" class="fr" />
      </div>
    </div>
</template>
<script>
    export default {
       data(){
           return{
              bans:[
                   {
                       imageUr:require("./images/tx1.jpg"),
                       "name":"语文",
                       isSelected:false
                   },
                   {
                       imageUr:require("./images/sx.jpg"),
                         "name":"数学",
                         isSelected:false
                   },
                   {
                       imageUr:require("./images/yx.jpg"),
                       "name":"英语",
                       isSelected:false
                   },
                   {
                       imageUr:require("./images/ts.jpg"),
                       "name":"英语听说",
                       isSelected:false
                   },
                    {
                       imageUr:require("./images/wl.png"), 
                       "name":"物理",
                       isSelected:false
                   },
                    {
                       imageUr:require("./images/hx.jpg"), 
                       "name":"化学",
                       isSelected:false 
                   },
                    {
                       imageUr:require("./images/sw.jpg"), 
                       "name":"生物",
                       isSelected:false 
                   },
                    {
                       imageUr:require("./images/ls.jpg"), 
                       "name":"历史",
                       isSelected:false
                   },
                    {
                       imageUr:require("./images/dl.jpg"), 
                       "name":"地理",
                       isSelected:false,
                   },
                    {
                       imageUr:require("./images/zz.jpg"), 
                       "name":"政治" ,
                       isSelected:false
                   },
                    {
                       imageUr:require("./images/xxjs.jpg"), 
                       "name":"信息技术",
                       isSelected:false 
                   },
                   {
                       imageUr:require("./images/tyjs.jpg"), 
                       "name":"通用技术",
                       isSelected:false

                   }
               ],  
           }
       },
        methods:{
             goBack() {
                this.$router.go(-1)   
            },
            change(){
                
            }

        }
    }
</script>

<style scoped>
  .btns{
    padding-top: 5%;
    padding-left: 5%;
    padding-right: 5%;
    border-bottom: 1px solid #f5f5f5;
    padding-bottom: 3%;
   
  }
  .fl{
      float: left;
  }
  .fr{
      float: right;
  }
  .van-cell{
      padding: 0;
      width: 88%;
  }
</style>