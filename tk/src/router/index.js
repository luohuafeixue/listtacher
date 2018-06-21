import Vue from 'vue'
import Router from 'vue-router'
import exercise  from '@/components/exercise/exercise '
import register from '@/components/exercise/register'
import information from '@/components/exercise/information'
import Home from '@/components/Page/home'
import mor from '@/components/Page/mor'
import examination from '@/components/Page/examination'
import testpaper from '@/components/testPaper/testpaper'
import grade from '@/components/testPaper/grade'
import question from '@/components/testPaper/question'
import chuti from '@/components/Page/chuti'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'exercise ',
      component: exercise 
    },
    {
      path: '/register',
      name: 'register',
      component: register 
    },
    {
      path: '/information',
      name: 'information',
      component: information 
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home 
    },
    {
      path: '/mor',
      name: 'mor',
      component: mor 
    },
    {
      path: '/examination',
      name: 'examination',
      component: examination 
    },
    {
      path: '/testpaper',
      name: 'testpaper',
      component: testpaper 
    },   
    {
      path: '/grade',
      name: 'grade',
      component: grade 
    },
       
    {
      path: '/question',
      name: 'question',
      component: question 
    },
  
    {
      path: '/chuti',
      name: 'chuti',
      component: chuti
    },
            
  ]
})
