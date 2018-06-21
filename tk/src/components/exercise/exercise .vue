<template>
   <div>
       <van-nav-bar
        title="登录"
        left-text="返回"
        left-arrow
        @click-left="goBack"
        />
       <div class="register-panel">
            <van-field
            v-model="username"
            label="用户名"
            icon="clear"
            placeholder="输入手机号/邮箱"
            required
            @click-icon="username = ''"
        />
        <van-field
            v-model="password"
            type="password"
            label="密码"
            placeholder="输入密码"
            required
        />
        <div class="register-button">
            <van-button type="primary" size="large " @click="goBacksen">登录</van-button>
        </div>
       </div>
   </div>
</template>

<script>
    export default {
        name:'exercise',
       data(){
           return{
             username:'',
             password:''
           }
       },
        methods: {
            goBack() {
                this.$router.go(-1)   
            },
            goBacksen:function(){
               if(this.username==""&&this.password==""){
                   alert('内容不能为空')
                   
               }
           }
        },    
    }
</script>

<style scoped>
    
  .register-panel{
        width:98%;
        border-radius: 5px;
        margin:10px auto;
        padding-bottom:50px;
    }
    .register-button{
        padding-top:12px;
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