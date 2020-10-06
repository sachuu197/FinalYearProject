
<script>
import Vue from 'vue'
import BootstrapSidebar from '@/vue-bootstrap-sidebar.vue'

export default Vue.extend({
  name: 'App',
  components: {
    BootstrapSidebar
  },
  data () {
    return {
      initialShow: true,
      header: '<h3>BE PROJECT</h3>',
      links: [
         { name: 'Student',
          faIcon: ['fas', 'users'],
          children: [
            { name: 'StudentHome', href: { name: 'Student-Home' }, 
              faIcon: ['fas', 'home'] },
            { name: 'Alltask', href: { name: 'studentalltask' }, 
              faIcon: ['fas', 'tasks'] },
           { name: 'Project details', href: { name: 'ProjectDescription' }, 
               faIcon: ['fas', 'th-large'] }
          ]
        },
         { name: 'Guide',
          faIcon: ['fas', 'users'],
          children: [
            { name: 'GuideHome', href: { name: 'Guide-Home' }, 
              faIcon: ['fas', 'home'] },
            { name: 'Project1', href: { name: 'Project-1' }, 
              faIcon: ['fas', 'project-diagram'] },
           { name: 'Project2', href: { name: 'Project-2' }, 
                   faIcon: ['fas', 'project-diagram'] },
          
         {  name: 'Alltask', href: { name: 'studentalltask' }, 
              faIcon: ['fas', 'tasks'] },
            { name: 'Project details', href: { name: 'ProjectDescription' }, 
              faIcon: ['fas', 'th-large'] }
          ]
        },
        { name: 'HOD',
          faIcon: ['fas', 'users'],
          children: [
            { name: 'HODHome', href: { name: 'HOD-Home' }, 
              faIcon: ['fas', 'home'] },
            { name: 'HOD', href: { name: 'HOD' }, 
              faIcon: ['fas', 'table'] },
            { name: 'Project details', href: { name: 'ProjectDescription' }, 
              faIcon: ['fas', 'th-large'] }
          ]
        },
         { name: 'Director',
          faIcon: ['fas', 'users'],
          children: [
            { name: 'DirectorHome', href: { name: 'Director-Home' }, 
              faIcon: ['fas', 'home'] },
            { name: 'Director', href: { name: 'Director' }, 
              faIcon: ['fas', 'table'] },
            { name: 'Project details', href: { name: 'ProjectDescription' }, 
              faIcon: ['fas', 'th-large'] }
          ]
        },
         { name: 'Managment',
          faIcon: ['fas', 'users'],
          children: [
            { name: 'ManagmentHome', href: { name: 'Managment-Home' }, 
              faIcon: ['fas', 'home'] },
            { name: 'Managment', href: { name: 'Managment' }, 
              faIcon: ['fas', 'table'] },
            { name: 'Project details', href: { name: 'ProjectDescription' }, 
              faIcon: ['fas', 'th-large'] }
          ]
        },
      ]
    }
  },
  methods: {
    onSidebarChanged () {
    }
  }
});
</script>

<template>
  <div id="App">
    <BootstrapSidebar 
      :initial-show="initialShow" 
      :links="links"
      :header="header"
      :fa="true"
      @sidebarChanged="onSidebarChanged"
    >
    
      
      <template v-slot:content>
        <b-container style="margin-top: 56px">
          
           <router-view />
         
        </b-container>
      </template>
    </BootstrapSidebar>
  </div>
</template>

<style lang="scss">
@import 'node_modules/bootstrap/scss/bootstrap';
@import 'node_modules/bootstrap-vue/src/index.scss';
@import './scss/default-theme';

</style>
