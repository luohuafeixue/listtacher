<template>
 <div class="tree-menu">
    <ul v-for="(menuItem,index) in theModel" :key="index">
        <my-tree :model="menuItem"></my-tree>
    </ul>
 </div>
</template>
<script>
var myData = [
    {
    'id': '1',
    'menuName': '必修1',
    'menuCode': '10',
    'children': [
        {
        'menuName': '第一章 集合与函数概念',
        'menuCode': '11'
        },
        {
        'menuName': '第二章 基本初等函数（1）',
        'menuCode': '12',
        'children': [
                {
                'menuName': '2.1 指数函数',
                'menuCode': '121'
                },
                {
                'menuName': '2.2 对数函数',
                'menuCode': '122'
                },
                {
                'menuName': '2.3 幂函数',
                'menuCode': '123'
                },
            ]
        },
        {
        'menuName': '第三章 函数的应用',
        'menuCode': '13'
        }
        ]
    },
    {
    'id': '2',
    'menuName': '必修2',
    'menuCode': ''
    },
    {
    'id': '3',
    'menuName': '必修3',
    'menuCode': '30',
    'children': [
            {
            'menuName': '第一章 算法初步',
            'menuCode': '31'
            },
            {
            'menuName': '第二章 统计',
            'menuCode': '32',
            'children': []
            },
            {
            'menuName': '第三章 概率',
            'menuCode': '32',
            'children': []
            },
        ]
    },
    {
    'id': '4',
    'menuName': '必修4',
    'menuCode': '',
    'children': []
    }
];
import myTree from './treeMenu.vue'
export default {
 components: {
    myTree
 },
 data() {
    return {
        theModel: myData
    }
 }
}
</script>

<style>

</style>
