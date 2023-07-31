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
        { path: '/test1/test1-1', title: '二级菜单1-1',icon:'el-icon-edit' },
        { path: '/test1/test1-2', title: '二级菜单1-2',icon:'el-icon-eleme' },
      ]
    }
  },
 
}
</script>
<style lang="scss" scoped>
    
</style>