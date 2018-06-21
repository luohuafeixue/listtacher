<template>
    <div>
       <van-nav-bar
        left-arrow
        @click-left="goBack"/>
    </div>
</template>

<script>
    export default {
       name:"examination",
       data(){
           return{

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

</style>
