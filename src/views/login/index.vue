<template>
    <div class="login_container">
        <el-row>
            <el-col :span="12" :xs="0">&nbsp;</el-col>
            <el-col :span="12" :xs="24">
                <el-form class="login_form" :model="loginForm" :rules="rules" ref="loginForms">
                    <h1>Hello</h1>
                    <div>欢迎来到后台管理系统</div>
                    <el-form-item prop="username">
                        <el-input placeholder="请输入用户名" prefix-icon="el-icon-user" v-model="loginForm.username"
                            clearable></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input type="password" placeholder="请输入用户名" prefix-icon="el-icon-lock" v-model="loginForm.password"
                            clearable></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" class="login_btn" @click="login" @keyup.enter="login"
                            :loading="loading">登录</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'login',
    data() {
        return {
            loading: false,
            loginForm: {
                username: '',
                password: ''
            },
            rules: {
                username: [
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 位', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 5, max: 8, message: '长度在 5 到 8 位', trigger: 'blur' }
                ],
            }
        }
    },
    methods: {
        login() {
            this.$refs.loginForms.validate((valid) => {
                if (valid) {
                    this.$router.replace("/")
                    this.loading = false
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        }
    }
}
</script>

<style lang="scss" scoped>
.login_container {
    width: 100%;
    height: 100vh;
    background: url('@/assets/images/background.jpg'), no-repeat;
    background-size: cover;

    .login_form {
        width: 80%;
        position: relative;
        top: 30vh;
        background: url('@/assets/images/login_form.png');
        background-size: 100% 100%;
        padding: 40px 20px;

        h1 {
            color: white;
            font-size: 40px;
        }

        div {
            color: white;
            font-size: 20px;
            margin: 10px 0;
        }

        .login_btn {
            width: 100%;
            height: 40px;
            margin-top: 20px;
        }
    }
}
</style>