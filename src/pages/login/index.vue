<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage } from "element-plus"
import { login } from '../../api/login'

const router = useRouter()
const userName = ref('')
const password = ref('')

const clickLogin = () => {
  login(userName.value, password.value).then((res: any) => {
    if (res.code === 20000) {
      ElMessage({
        type: 'success',
        message: '登录成功',
      })
      router.push('/')
    }
    else {
      ElMessage({
        type: 'error',
        message: '登录失败，请重试',
      })
    }
  })
}
</script>

<template>
  <div class="loginBox">
    <form action="" class="login">
      <p>登录</p>
      <input type="text" placeholder="用户名" v-model="userName" />
      <input type="password" placeholder="密码" v-model="password" />
      <input type="button" class="btn" value="登  录" @click.prevent="clickLogin" />
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
.loginBox{
  background-size: cover;
  background: url(https://w.wallhaven.cc/full/8o/wallhaven-8ogod1.jpg) no-repeat fixed;
  height: 100vh;
  width: 100vw;
}
.login {
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
</style>

<route lang="yaml">
meta:
  layout: login
</route>
