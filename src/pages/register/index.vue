<script setup lang="ts">
import { ElMessage } from 'element-plus'
import { register } from '../../api/login'
const router = useRouter()
const name = ref('')
const mobile = ref('')
const password = ref('')
const clickRegister = () => {
  register(name.value, mobile.value, password.value).then((res: any) => {
    if (res.code === 20000) {
      ElMessage({
        type: 'success',
        message: '注册成功',
      })
      router.push('/login')
    }
    else {
      ElMessage({
        type: 'error',
        message: '注册失败,请重试！',
      })
    }
  })
}
</script>

<template>
  <div class="registerBox">
    <form class="register">
      <p>注册</p>
      <input id="name" v-model="name" type="text" placeholder="请输入用户名">
      <input id="name" v-model="mobile" type="text" placeholder="请输入手机号">
      <input id="password" v-model="password" type="text" placeholder="请输入密码">
      <div>
        <input type="button" value="注册" class="btn" @click.prevent="clickRegister">
      </div>
      <div class="login">
        已有账号?
        <a @click.prevent="router.push('/login')">点击登录</a>
      </div>
    </form>
  </div>
</template>

<style scoped>
* {
  user-select: none;
  padding: 0;
  margin: 0;
  /* 无法选中，整体感更强 */
}
.registerBox{
  background: url(https://w.wallhaven.cc/full/8o/wallhaven-8ogod1.jpg) no-repeat;
  background-size: cover;
  background-attachment: fixed;
  height: 100vh;
  width: 100vw;
}
.register {
  position: absolute;
  top: 50%;
  margin-top: -200px;
  left: 50%;
  margin-left: -200px;
  /* absolute居中的一种方法 */
  background-color: whitesmoke;
  width: 400px;
  border-radius: 25px;
  text-align: center;
  padding: 5px 40px;
  box-sizing: border-box;
  /* 这样padding就不会影响大小 */
}
p {
  font-size: 35px;
  font-weight: 600;
  margin-top: 40px;
  margin-block: 40px;
}
input,
select {
  background-color: whitesmoke;
  width: 100%;
  height: 48px;
  margin-bottom: 10px;
  border: none;
  border-bottom: 2px solid silver;
  /* 下面的会覆盖上面的步伐 */
  outline: none;
  font-size: 22px;
}
.btn {
  background-color: #59c2c5;
  width: 38%;
  height: 48px;
  border-radius: 8px;
  margin-top: 15px;
  font-size: 28px;
  font-weight: 600;
  color: white;
}
.btn:hover {
  background-color: #59c2a0;
}
.login {
  padding-left: 210px;
  font-size: 10px;
}
</style>

<route lang="yaml">
meta:
  layout: login
</route>
