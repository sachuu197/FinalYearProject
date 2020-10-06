import VueRouter from 'vue-router'
import HomePage from './HomePage.vue'
import StudentTask from './StudentAllTask.vue'
import HODHome from './HODHome.vue'
import DirectorHome from './DirectorHome.vue'
import ManagmentHome from './ManagmentHome.vue'
import GuideHomePage from './GuideHome2.vue'
import GuideHome from './GuideHome.vue'
import PageNotFound from './PageNotFound.vue'
import Director from './Director.vue'
import HOD from './HOD.vue'
import Managment from './Management.vue'
import PD from './PD.vue'
import GuideHomePage2 from './GuideHome22.vue'
import FTR from './FTR.vue'

const routes = [
  { path: '/', component: HomePage, name: 'Student-Home' },
  { path: '/GuideHome2', component: GuideHomePage, name: 'Project-1' },
  { path: '/GuideHome22', component: GuideHomePage2, name: 'Project-2' },
  { path: '/GuideHome', component: GuideHome, name: 'Guide-Home' },
  { path: '/StudentAllTask', component: StudentTask, name: 'studentalltask' },
  { path: '/HODHome', component: HODHome, name: 'HOD-Home' },
  { path: '/Director', component: Director, name: 'Director' },
  { path: '/DirectorHome', component: DirectorHome, name: 'Director-Home' }, 
  { path: '/HOD', component: HOD, name: 'HOD' },
  { path: '/Managment', component: Managment, name: 'Managment' },
  { path: '/ManagmentHome', component: ManagmentHome, name: 'Managment-Home' },
  { path: '/ProjectDescription', component: PD, name: 'ProjectDescription' },
  { path: '/FTR', component: FTR, name: 'FTR' },
  { path: '*', component: PageNotFound },
]

export const router = new VueRouter({
  mode: 'history',
  routes
})

