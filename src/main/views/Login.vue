<template>
  <div class="flex-row align-center justify-center loginPage">
    <div>
      <h1 class="main-title">[平台名称]后台管理系统</h1>

      <el-form
        ref="validForm"
        :model="formData"
        :rules="rules"
        class="login-form"
        @submit.native.prevent="login"
      >
        <h2 class="sub-title">
          <span class="_text">请登录</span>
        </h2>
        <el-form-item prop="account">
          <el-input
            :autofocus="true"
            placeholder="请输入用户名"
            v-model="formData.account"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            placeholder="请输入密码"
            type="password"
            v-model="formData.password"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item prop="captcha">
          <InputCaptchaImage ref="InputCaptchaImage" />
        </el-form-item>
        <div class="flex-row align-center">
          <div class="flex-1">
            <!-- <el-checkbox v-model="$store.rememberLogin">记住我</el-checkbox> -->
          </div>
          <el-link type="info" @click="handleChangePw"> 忘记密码？ </el-link>
        </div>
        <el-form-item class="submit-item">
          <el-button
            native-type="submit"
            class="submit-button"
            type="primary"
            :loading="loading"
            >登录</el-button
          >
        </el-form-item>
        <div class="flex-row">
          <div class="flex-1"></div>
          <el-link type="primary" @click="$router.push({ name: '注册' })">
            立即注册
            <i class="el-icon-right"></i>
          </el-link>
        </div>
      </el-form>
      <div class="footer-info">@2022 版权所有 占位文字</div>
    </div>
    <!-- 验证身份 -->
    <auth ref="auth" :types="['email', 'mobile']" command="reset" />
  </div>
</template>

<script>
import { event } from "@/core"
import { login } from "@/main/api/common"
import { SetAccountToken } from "@/plugin.permission.config"

export default {
  data() {
    const validImage = () => {
      return new Promise((resolve, reject) => {
        if (this.formData.captcha) {
          resolve()
        } else {
          this.$refs.InputCaptchaImage.valid()
            .then(captcha => {
              console.log("then", captcha)
              this.formData.captcha = captcha
              resolve()
            })
            .catch(msg => {
              console.log("catch", msg)
              reject(msg)
            })
        }
      })
    }

    return {
      loading: false,
      formData: {
        account: "",
        password: "",
        captcha: "",
      },
      rules: {
        account: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 3,
            max: 30,
            message: "长度在 3 到 30 个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 30,
            message: "长度在 6 到 30 个字符",
            trigger: "blur",
          },
        ],
        captcha: [{ validator: validImage, trigger: [] }],
      },
    }
  },
  methods: {
    login() {
      if (this.loading) {
        return null
      }
      this.loading = true
      this.$refs.validForm.validate(valid => {
        if (valid) {
          login(this.formData)
            .then(res => {
              if (res.status === 200) {
                this.loading = false
                // 存储token
                SetAccountToken(res.data)
                // 登录后全局发布 login 事件, 将被 权限模块 接收
                event.emit("login", () => {
                  this.$router.replace({
                    path: this.$router.currentRoute.query.redirect || "/",
                  })
                })
              } else {
                this.$message({
                  message: "登陆失败",
                  type: "warning",
                })
              }
            })
            .catch(() => {
              this.loading = false
            })
        } else {
          this.loading = false
        }
      })
    },
    handleChangePw() {
      this.$refs.auth.auth().then(authCode => {
        this.$router.push({
          name: "修改密码",
          query: {
            authCode,
          },
        })
      })
    },
  },
}
</script>

<style scoped>
.loginPage {
  background: url(../assets/img/b.jpg) center no-repeat;
  background-size: cover;
}

.login-form {
  width: 320px;
  background: #fff;
  border-radius: 10px;
  padding: 20px 40px;
  margin: auto;
}
.main-title {
  font-size: 28px;
  color: #257ff7;
  margin-bottom: 40px;
  text-align: center;
}
.sub-title {
  font-size: 18px;
  font-weight: normal;
  text-align: center;
  color: #257ff7;
  margin-bottom: 20px;
}
.sub-title ._text {
  display: inline-block;
  line-height: 1.4;
  border-bottom: 3px solid #257ff7;
}
.des {
  text-align: center;
  color: #999;
  margin-bottom: 2em;
}

.submit-item {
  margin-top: 20px;
}
.submit-button {
  width: 100%;
}
.footer-info {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  font-size: 0.9em;
  color: #999;
}
.footer-info ._s {
  display: inline-block;
  margin: 0 0.5em;
}
</style>

