import Vue from 'vue'
import App from './App'
import router from './router'
import './commonality/reset.css' 
import {Swipe, SwipeItem, Lazyload, Field, 
          Row, Col, Button, NavBar, Tabbar, 
          TabbarItem, SwitchCell, Icon, Collapse, 
           CollapseItem, Tag 
      } from 'vant'
Vue.use(Swipe).use(SwipeItem).use(Lazyload).use(Field).use(Row).use(Col).use(Button).use(NavBar).use(Tabbar).use(TabbarItem)
Vue.use(SwitchCell).use(Icon).use(Collapse).use(CollapseItem).use(Tag)
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
