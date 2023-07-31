<template>
    <div class="tabbar">
        <el-menu  class="el-menu" mode="horizontal"  text-color="#DCDFE6" active-text-color="#E6A23C" >
            <el-menu-item class="menuItem" index="1" @click="goHome">
                <img src="../../assets/icon/2.png" alt="">
                <span>首页</span>
            </el-menu-item>
            <el-menu-item class="menuItem" index="2" @click="goTest1">
                <img src="../../assets/icon/2.png" alt="">
                <span>主数据</span>
            </el-menu-item>
            <el-menu-item class="menuItem" index="3" @click="goTest2">
                <img src="../../assets/icon/3.png" alt="">
                <span>辖区管理</span>
            </el-menu-item>
            <el-menu-item class="menuItem" index="4" @click="goTest3">
                <img src="../../assets/icon/4.png" alt="">
                <span>销讯通</span>
            </el-menu-item>
        </el-menu>
        <div class="logout">
            <div class="user_avator">
                <img src="@/assets/images/img.png" />
            </div>
            <el-dropdown @command="handleCommand" class="user-name">
                <span class="el-dropdown-link" style="color:#fff;" >1111<i class="el-icon-caret-bottom"></i></span>
                <el-dropdown-menu slot="dropdown" >
                    <el-dropdown-item command='logout'>退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods:{
        goHome(){
            this.$router.push("/home")
        },
        goTest1(){
            this.$router.push("/test1")
        },
        goTest2(){
            this.$router.push("/test2")
        },
        goTest3(){
            this.$router.push("/test3")
        },
        handleCommand(command) {
            if(command == 'logout'){
                this.logout()
            }
        },
         logout(){
            this.$router.replace('/login')
        },
    }
}
</script>

<style lang="scss" scoped>
::v-deep{
   .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover{
        background-color: rgb(7, 0, 19);
   }
    .el-menu-item.is-active{
        background-color: rgb(7, 0, 19) !important;
   }
}
.tabbar {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    background-color: #001529;
    .el-menu{
        margin-left: 20px;
        height: 100%;
        background: #001529;
        border-bottom: none;
        .menuItem{
            width: 140px;
            height: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
            img{
                width: 40px;
                height: 40px;
                margin-right: 10px;
            }
        }
    }
    .logout{
        width: 130px;
        height: 60px;
        // background-color: red;
        margin-right: 5px;
        display: flex;
        align-items: center;
        color: #fff;
        .user_avator{
            width: 50px;
            height: 50px;
            border-radius: 25px 25px;
            background-color: blue;
            overflow: hidden;
            margin-right: 10px;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
}
</style>