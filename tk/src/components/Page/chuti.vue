<template>
    <div>
        <van-nav-bar
        title="标题"
        left-arrow
        @click-left="onClickLeft"
        />

        <van-tabs>
            <van-tab v-for="(tabDat,index) in tabData" :title=" tabDat.title " :key="index">
                <van-cell-group> 
                    <van-cell :title="tabDat.erjiTit" is-link :value="tabDat.erjiVal" />
                </van-cell-group>
                <div class="treeBox">
                    <treeBox></treeBox>
                </div>
            </van-tab>
        </van-tabs>
        
        <div>
            <van-button size="large" type="primary">大号按钮</van-button>
        </div>
    </div>
</template>

<script>
import treeBox from './main.vue'
var tabData = [
    {
        title : "教材同步",
        erjiTit : "教材版本",
        erjiVal : "人教A版",

    },
    {
        title : "知识点选题",
        erjiTit : "教材版本",
        erjiVal : "人教A版",
    },
    {
        title : "智能选题",
        erjiTit : "查找类型",
        erjiVal : "知识点查找",
    },
    {
        title : "套卷",
        erjiTit : "全部地区",
        erjiVal : "类型",
    },
    {
        title : "收藏",
        erjiTit : "切换题集",
        erjiVal : "默认题集",
    },
];
export default {
    data(){
        return{
            active: 0,
            tabData : tabData,
        }
    },
    methods: {
        onClickLeft() {
        Toast('返回');
        },
    },
    components: {
        treeBox
    },
}
</script>

<style>
.van-nav-bar{background-color: #09f;color: #fff;}
.van-nav-bar .van-icon{color: #fff;}
.van-tab--active{color: #09f;}
.van-tabs__line{background-color: #09f;}
</style>
