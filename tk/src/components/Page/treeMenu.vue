<template>
    <li>
        <span @click="toggle">
            <i v-if="isT" class="icon" :class="[open ? 'folder-open': 'folder']"></i>
            <i v-else-if="!isT" class="icon file-text"></i>
            {{ model.menuName }}
        </span>
        <ul v-show="open" v-if="isTree">
            <tree-menu v-for="(item,index) in model.children" :model="item" :key="index"></tree-menu>
        </ul>
        <b><img src="../../assets/images/export.png" width="16"></b>
    </li>
</template>
<script>

export default {
    name: 'treeMenu',
    props: ['model'],
    data() {
        return {
            open: false,
            isT:true
        }
    },
    computed: {
        isTree: function() {
            return this.model.children && this.model.children.length
        }
    },         
    methods: {
        toggle: function() {
            if (this.isT) {
                if(this.model.children === undefined){
                    isT:!isT;
                }
                this.open = !this.open
            }
           
        }
    }
}
</script>
 <style>
ul {
    list-style: none;
}
i.icon {
    display: inline-block;
    margin-top: -0.2rem;
    width: 15px;
    height: 15px;
    background-repeat: no-repeat;
    vertical-align: middle;
    background-size: cover;
}
.icon.folder {
    background-image: url(../../assets/images/folder.png);
}
.icon.folder-open {
    background-image: url(../../assets/images/folder-open.png);
}
.icon.file-text {
    background-image: url(../../assets/images/file-text.png);
}
.tree-menu li {
    position: relative;
    line-height: 2rem;
    padding-left: 1rem;
    border-bottom: 1px solid #f5f5f5;
    background: #fff;
}
.tree-menu>ul>li>ul>li{
    padding-left: 0;
}
.tree-menu span{
    display: block;
}
.tree-menu b{
    position: absolute;
    top: 0;
    right: 1rem;
}
</style>