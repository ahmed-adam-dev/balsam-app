import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import BookedPage from "../views/BookedView.vue";
import CareRoom from "../views/CareRoom.vue";
import AddIcu from "../views/AddIcu.vue";
import CareRoomOrders from "../views/CareRoomOrders.vue";
import ClinicView from "../views/ClinicView";
import AddClinic from "../views/AddClinic";




const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/BookedPage",
    name: "BookedPage",
    component: BookedPage,
  },  {
    path: "/CareRoom",
    name: "CareRoom",
    component: CareRoom,
  },

  {
    path: "/AddIcu",
    name: "AddIcu",
    component: AddIcu,
  },

  {
    path: "/AddClinic",
    name: "AddClinic",
    component: AddClinic,
  },

  
  {
    path: "/CareRoomOrders",
    name: "CareRoomOrders",
    component: CareRoomOrders,
  },
  {
    path: "/ClinicView",
    name: "ClinicView",
    component: ClinicView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
