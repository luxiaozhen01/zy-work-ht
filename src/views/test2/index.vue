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
        { path: '/test2/test2-1', title: '二级菜单2-1', icon:'el-icon-goods' },
        { path: '/test2/test2-2', title: '二级菜单2-2', icon:'el-icon-warning-outline' },
      ]
    }
  }
}
</script>
<style lang="scss" scoped>

</style>