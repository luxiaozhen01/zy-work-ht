<template>
  <div class="content">
    <div>
      <Mneus :itemList='itemList'></Mneus>
    </div>
    <div class="bottomMain">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
import Mneus from "@/layout/components/menus/index.vue"
export default {
  components: {
    Mneus
  },
  data(){
    return{
      itemList: [
        { 
          path: '/test3/test3-1', 
          title: '二级菜单3-1', 
          icon:'el-icon-setting',
          children:[
            { path: '/test3/test3-1/test3-1-1', title: '三级菜单3-1-1', icon:'el-icon-zoom-in'},
            { path: '/test3/test3-1/test3-1-2', title: '三级菜单3-1-2', icon:'el-icon-office-building'}
          ]
        },
        { path: '/test3/test3-2', title: '二级菜单3-2', icon:'el-icon-zoom-in'},
        { path: '/test3/test3-3', title: '二级菜单3-3', icon:'el-icon-help'},
        { path: '/test3/test3-4', title: '二级菜单3-4', icon:'el-icon-date'},
        { path: '/test3/test3-5', title: '二级菜单3-5', icon:'el-icon-tickets'},
        { path: '/test3/test3-6', title: '二级菜单3-6', icon:'el-icon-suitcase'}
      ]
    }
  }
}
</script>
<style lang="scss" scoped>

</style>