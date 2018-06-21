<template>
    <div>
      
        <div class="shengwu">
           <div v-for="(packaging,index) in json.packaging2" :key="index">
               <div class="admin">
                    <h3>
                        {{packaging.question[0]}}
                        <span>{{packaging.question[1]}}</span>
                         <span>{{packaging.question[3]}}</span>
                  </h3>
              </div>
               <div class="adminta">
                   <div><p>{{packaging.a1[0]}}</p></div>
                   <div class="pack">
                        <p>{{packaging.a2[0]}}</p>
                        <p>{{packaging.a2[1]}}</p>
                   </div>
               </div>
           </div>
        </div>
    </div>
</template>

<script>
import json from './json.json'
    export default {
        data(){
            return{
              json:json,
            }
        },
        
    }
</script>

<style scoped>
.shengwu{
    padding-top: 5%;
    padding-left: 3%;
}
 .admin{
     border-bottom: 1px solid #f5f5f5;
     padding-bottom: 3%;
 }
.admin h3{
   font-weight: normal;
    color: #333;
}
.admin h3 span:nth-child(1){
    color: #4b0;
    font-size: 1rem;
 }
 .shengwu .adminta{
     padding-top: 3%;
     color: #333;
 }
 .shengwu .adminta .pack{
     color: #333;
 }
 .shengwu .adminta .pack p{
     padding-top: 10%;
 }
</style>