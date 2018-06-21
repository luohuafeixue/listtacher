<template>
    <div>
        <div class="shengwu">
            <div v-for="(packaging,index) in json.packaging1" :key="index">
                <div class="admin">
                    <h3>{{packaging.name1}}
                        <span>{{packaging.name2}}</span>
                        <span>{{packaging.name3}}</span>
                    </h3>
              </div>
             <div class="admintaer">
                 <div><p>{{packaging.name4}}</p></div>
                  <div class="btnacer">
                      <p> 
                          <span>{{packaging.name5}}</span>
                         <b> {{packaging.name7}} </b>
                      </p>
                      <p> 
                           <span>{{packaging.name8}}</span>
                           <b> {{packaging.name9}} </b>
                      </p>

                      <p> 
                          <span>{{packaging.name10}}</span>
                           <b>{{packaging.name11}}</b>
                      </p>
                      <p>
                          <span>{{packaging.name12}}</span>
                           <b> {{packaging.name13}}</b>
                         </p>
                  </div>
             </div>
            </div>
        </div>
    </div>
</template>

<script>
 import json from './json.json'
  import './sele.css'
    export default {
        data(){
           return{
              json:json
           }
        },
    }
</script>

<style scoped>
 
</style>