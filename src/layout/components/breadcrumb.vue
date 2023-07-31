<template>
  <div class="breadcrumb_container">
    <el-breadcrumb separator="/">
        <template v-if="bread.length > 1">
            <el-breadcrumb-item v-for="(item,index) in bread" :key="index">{{item.title}}</el-breadcrumb-item>
        </template>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
    data() {
        return {
            bread: []
        }
    },
    methods:{
        getBreadData() {
            const meatched = this.$route.matched;
            const filterArr = meatched.filter(item => {
                return item.meta && item.meta.title;
            });

            const newBread = filterArr.map(item => {
                return {
                title: item.meta.title,
                path: item.path
                };
            });
            
            this.bread = [...newBread];
        }
    },
    created() {
        this.getBreadData()
    },
    watch: {
    "$route.path": function() {
      this.getBreadData()
    }
  }
}
</script>

<style lang="scss" scoped>
    .breadcrumb_container{
        width: 900px;
        height: 30px;
        background-color: #fff;
        margin-left: 30px;
        display: flex;
        align-items: center;
    }
</style>