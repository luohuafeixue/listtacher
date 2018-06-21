<template>
    <div>
        
        <div class="shengwu">
             <div v-for="(packaging,index) in json.packaging1" :key="index">
                 <div class="admin">
                    <h3>{{packaging.name1}}
                        <span>{{packaging.name36}}</span>
                        <span>{{packaging.name3}}</span>
                    </h3>
              </div>
               <div class="admintaer">
                   <div><p>{{packaging.name14}}</p></div>
                    <div class="imgse">
                      <img :src="imge" width="80%"/>
                    </div>
                    <div class="btnacer">
                         <p>
                             <span>{{packaging.name16}}</span>
                             <b>{{packaging.name17}}</b>
                         </p>
                         <p>
                             <span>{{packaging.name18}}</span>
                             <b>{{packaging.name19}}</b>
                         </p>
                         <p>
                             <span>{{packaging.name20}}</span>
                             <b>{{packaging.name21}}</b>
                         </p>
                         <p>
                             <span>{{packaging.name22}}</span>
                             <b>{{packaging.name23}}</b>
                         </p>
                   </div>
               </div>
             </div>
        </div>
    </div>
</template>

<script>
   import './sele.css'
   import json from './json.json'
    export default {
        data(){
            return{
              imge:require('../images/admin.jpg'),
              json:json
            }
        },

    }
</script>

<style scoped>
 .imgse{
     padding-top: 6%;
 }
</style>