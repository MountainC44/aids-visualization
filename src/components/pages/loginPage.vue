<template>
    <div class="login-wrap" v-loading.fullscreen.lock="fullscreenLoading">
        <div class="login-div">
            <img src="../../assets/imgs/login-bg.png" class="login-img">
            <div class="ms-title">艾滋病病情监控平台</div>
            <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="0px"
            class="ms-content">
                <el-form-item prop="username">
                    <el-input
                    v-model="ruleForm.username"
                    placeholder="username">
                        <el-button slot="prepend" icon="el-icon-caret-right"></el-button>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input
                    type="password"
                    placeholder="password"
                    v-model="ruleForm.password"
                    @keyup.enter.native="submitForm('ruleForm')">
                        <el-button slot="prepend" icon="el-icon-caret-right"></el-button>
                    </el-input>
                </el-form-item>
                <div class="login-btn">
                    <el-button
                    type="primary"
                    @click="submitForm('ruleForm')"
                    class="button-font">登录</el-button>
                </div>
            </el-form>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Footer from '../commons/footer';

export default {
  data() {
    return {
      fullscreenLoading: '',
      ruleForm: {
        username: 'admin',
        password: 'admin',
      },
      rules: {
        username: [
          {
            required: true,
            message: '请输入用户名',
            trigger: 'blur',
          },
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur',
          },
        ],
      },
    };
  },
  components: {
    Footer,
  },
  created() {
    // this.openFullLoading();
    localStorage.removeItem('username');
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          localStorage.setItem('username', this.ruleForm.username);
          this.fullscreenLoading = true;
          setTimeout(() => {
            this.fullscreenLoading = false;
            this.$router.push('/world');
          }, 1000);
          return true;
        }
        // console.log('error submit!!');
        return false;
      });
    },
    openFullLoading() {
      this.fullscreenLoading = true;
      setTimeout(() => {
        this.fullscreenLoading = false;
      }, 1000);
    },
  },
};
</script>

<style scoped>
.login-wrap {
  position: relative;
  width: 100%;
  height: 100%;
}

.ms-title {
  text-align: center;
  font-size: 1.7rem;
  margin-top: 10px;
  color: #2d3b48;
  font-weight: 700;
  letter-spacing: 0.1em;
}

.ms-login {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 350px;
  margin: -190px 0 0 -175px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.3);
  overflow: hidden;
}

.ms-content {
  padding: 15px 30px;
}

.login-btn button {
  width: 100%;
  height: 40px;
  margin-bottom: 10px;
}

.login-tips {
  font-size: 12px;
  line-height: 30px;
  color: #fff;
}

.login-div {
  width: 500px;
  margin: 0 auto;
  top: 5rem;
  position: relative;
}

.login-img {
  width: 100%;
  height: 385px;
  border-radius: 30px;
}

.button-font {
  font-size: 1.1rem;
  letter-spacing: 0.3rem;
}
</style>
