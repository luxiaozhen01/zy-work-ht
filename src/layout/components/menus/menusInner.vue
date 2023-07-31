<template>
  <div>
  <div v-for="item in itemList" :key="item.path">
        <el-menu-item :index="item.path" v-if="!item.children" @click="goView(item.path)">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.title }}</span>
        </el-menu-item>
        <el-submenu :index="item.path" v-if="item.children && item.children.length>0">
            <template slot="title">
                <i :class="item.icon"></i>
                <span slot="title">{{ item.title }}</span>
            </template>
            <MenusInner :itemList="item.children"/>
        </el-submenu>
      </div>
  </div>
</template>
 
<script>
export default {
  name:"MenusInner",
   props: {
    itemList: {
      type: Array,
      default: () => []
    }
  },
  data(){
    return {}
  },
  methods:{
    goView(path){
      this.$router.push(path)
    }
  },
}
</script>

 
<style lang="scss" scoped></style>