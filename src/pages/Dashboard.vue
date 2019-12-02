<template>
  <div>
    <Navbar/>
    <SideMenu @menu="getMenuName($event)"/>
    <Dashboard v-if="menuTitle == 'Dashboard'" class="analytics"/>
    <Addproduct v-if="menuTitle ==  'Add Product'" class="analytics"/>
  </div>
</template>
<script>
import Navbar from "@/components/commonComponents/navBar"
import SideMenu from "@/components/commonComponents/sideMenu/sideMenu"
import Dashboard from "@/components/dashboardPage/dashboard"
import Addproduct from "../components/products/addProduct"
export default {
  components:{
    Navbar,
    SideMenu,
    Dashboard,
    Addproduct
  },
  data(){
    return{
      menuTitle : "Dashboard",
    }
  },
  methods:{
    getMenuName(name){
      this.menuTitle = name;
    }
  }
}
</script>
<style scoped>
.analytics {
    position: absolute;
    z-index: 1000;
    top: 9%;
    margin-left: 25%;
}
</style>