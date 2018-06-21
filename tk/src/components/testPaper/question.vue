<template>
    <div>
      <van-nav-bar
        title="高考生物"
        left-arrow
        @click-left="goBack"
        />
        <swiper>
            <swiper-slide>
             <difficulty></difficulty>
            </swiper-slide>
            <swiper-slide>
                <selector></selector>
            </swiper-slide>
            <swiper-slide>
            <biology></biology>
            </swiper-slide>
            <swiper-slide>
             <gibberellin></gibberellin>
            </swiper-slide>
             <swiper-slide>
             <nonselective></nonselective>
            </swiper-slide>
             <swiper-slide>
                <tions></tions>
            </swiper-slide>
             <swiper-slide>
                <must></must>
            </swiper-slide>
             <swiper-slide>
                <sheet></sheet>
            </swiper-slide>
      </swiper>
    </div>

</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
   import difficulty from './selector/difficulty.vue'
   import selector from './selector/selector.vue'
   import biology from './selector/biology.vue'
   import gibberellin from './selector/gibberellin.vue'
   import nonselective from './selector/nonselective.vue'
   import tions from './selector/tions.vue'
   import must from './selector/must.vue'
   import sheet from './selector/sheet.vue' 
   name:"question"
    export default {
        data(){
            return{
              
            }
        },
         methods:{
             goBack() {
                this.$router.go(+1)  
               
            },
         },
         components:{
             swiper,
             swiperSlide,
             difficulty,
             selector,
             biology,
             gibberellin,
             nonselective,
             tions,
             must,
             sheet,
             
             }
    }
</script>

<style scoped>

</style>