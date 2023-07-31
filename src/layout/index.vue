<template>
    <div class="layout_container">
        <div class="topBox">
            <div class="logo">
                <img class="img" src="../assets/logo.png" alt="logo">
                <span>上海正也医药有限公司</span>
            </div>
            <div class="layout_tabbar">
                <Tabbar></Tabbar>
                <Breadcrumb/>
            </div>
        </div>
        <div class="bottomBox">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import Breadcrumb from "./components/breadcrumb.vue"
import Tabbar from './components/tabbar.vue'
export default {
    components: {
        Tabbar,
        Breadcrumb
    }
}
</script>

<style lang="scss" scoped>
.layout_container {
    width: 100%;
    height: 100vh;
    .topBox{
        width: 100%;
        height: 60px;
        display: flex;
        .logo{
            width: 260px;
            height: 60px;
            background-color: #001529;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: #75797e;
            font-size: 10px;
            .img {
                width: 200px;
                height: 40px;
            }
        }
        .layout_tabbar {
            width: calc(100% - 260px);
            height: 90px;
            background-color: #fff;
        }
    }       
}
</style>