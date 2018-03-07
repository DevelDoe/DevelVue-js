import Vue from 'vue'
import Router from 'vue-router'
import DocumentationHome from '@/documentation/DocumentationHome'
import DocumentationGuidelines from '@/documentation/DocumentationGuidelines/DocumentationGuidelines'
import DocumentationComponents from '@/documentation/DocumentationComponents/DocumentationComponents'
import DocumentationUtilities from '@/documentation/DocumentationUtilities/DocumentationUtilities'
import DocumentationPlugins from '@/documentation/DocumentationPlugins/DocumentationPlugins'

Vue.use(Router)

export default new Router({
    routes: [
          {
              path: '/',
              name: 'DocumentationHome',
              component: DocumentationHome
          },
          {
              path: '/guidelines',
              name: 'DocumentationGuidelines',
              component: DocumentationGuidelines
          },
          {
              path: '/components',
              name: 'DocumentationComponents',
              component: DocumentationComponents
          },
          {
              path: '/utilities',
              name: 'DocumentationUtilities',
              component: DocumentationUtilities
          },
          {
              path: '/plugins',
              name: 'DocumentationPlugins',
              component: DocumentationPlugins
          }
      ]
})
