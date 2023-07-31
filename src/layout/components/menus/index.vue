<template>
  <!-- 左侧二级菜单栏的组件封装 -->
  <div class="sidebar">
    <el-menu
      class="sidebar-el-menu"
      background-color="#001529"
      text-color="#DCDFE6"
      default-active="/test3/test3-1/test3-1-1"
      >
      <MenusInner :itemList="itemList"/>
    </el-menu>
  </div>
</template>
 
<script>
import MenusInner from "./menusInner.vue"
export default {
  name:"Menus",
  props: {
    itemList: {
      type: Array,
      default: () => []
    }
  },
  components:{
    MenusInner
  },
  data(){
    return {
 
    }
  },
  computed: {
    toIndex(){ 
      return this.$route.path.split('/')[2];
    }
  },
}
</script>

 
<style lang="scss" scoped>
.sidebar {
    width: 260px;
    height: calc(100vh - 60px);
}
.sidebar::-webkit-scrollbar {
  width: 0;
}
.sidebar-el-menu {
  width: 260px;
  margin: 0;
}
.sidebar > ul {
  height: 100%;
}
</style>