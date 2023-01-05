<template>
    <div class="login">
        <div class="text-box">
            <h1 class="title">恋爱吧后台管理系统</h1>
            <p>极好的管理系统</p>
        </div>
        <div class="form">
            <el-form :model="form">
                <el-form-item>
                    <el-input v-model="form.account" type="text" placeholder="account"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="form.password" type="password" placeholder="password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm(form)">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

interface FormInt {
    account: string,
    password: string
}

const form: FormInt = reactive({
    account: '',
    password: ''
})

// 登录按钮
const submitForm = (form: FormInt): void => {
    console.log(form);

}

</script>

<style scoped lang="scss">
.login {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        display: block;
        background-image: linear-gradient(45deg, #fff 45%, rgb(135, 188, 236) 65%, rgb(227, 188, 244) 80%, #fff 90%);
        backdrop-filter: blur(10px);
        -webkit-filter: blur(10px);
        z-index: -1;
    }

    .text-box {
        font-size: 20px;
        padding: 50px 0;

        .title {
            font-weight: 900;
            font-size: 48px;
        }
    }

    .form {
        width: 400px;
        height: 200px;

        .el-button {
            width: 100%;
        }
    }
}
</style>