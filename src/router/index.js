import Vue from 'vue'
import Router from 'vue-router'
import DocumentationHome from '@/documentation/DocumentationHome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DocumentationHome',
      component: DocumentationHome
    }
  ]
})
