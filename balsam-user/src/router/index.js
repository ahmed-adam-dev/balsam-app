import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HospitalsView from '../views/HospitalsView.vue'
import HospitalDetails from '../views/HospitalDetails.vue'
import IcusPage from '../views/IcusPage.vue'
import IcuBooked from '../views/IcuBooked.vue'
import ProfileView from '../views/ProfileView.vue'
import RegisterView from '../views/RegisterView.vue'
import LoginView from '../views/LoginView.vue'
import CLinicsView from '../views/CLinicsView.vue'
import ClinicBookings from '../views/ClinicBookings.vue'
import ClinicDetails from '../views/ClinicDetails.vue'
import LastOrders from '../views/LastOrders.vue'
import ContactPage from '../views/ContactPage.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/HospitalsView',
    name: 'HospitalsView',
    component: HospitalsView
  },
  {
    path: '/HospitalDetails/:id',
    name: 'HospitalDetails',
    component: HospitalDetails
  },
  {
    path: '/IcusPage',
    name: 'IcusPage',
    component: IcusPage
  },
  {
    path: '/IcuBooked/:id',
    name: 'IcuBooked',
    component: IcuBooked
  },
  {
    path: '/ProfileView',
    name: 'ProfileView',
    component: ProfileView
  },
  {
    path: '/RegisterView',
    name: 'RegisterView',
    component: RegisterView
  },
  {
    path: '/LoginView',
    name: 'LoginView',
    component: LoginView
  },
  {
    path: '/CLinicsView',
    name: 'CLinicsView',
    component: CLinicsView
  },
  {
    path: '/ClinicBookings/:id',
    name: 'ClinicBookings',
    component: ClinicBookings
  },
  {
    path: '/ClinicDetails/:id',
    name: 'ClinicDetails',
    component: ClinicDetails
  },
  {
    path: '/LastOrders',
    name: 'LastOrders',
    component: LastOrders
  },
  {
    path: '/ContactPage',
    name: 'ContactPage',
    component: ContactPage
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
