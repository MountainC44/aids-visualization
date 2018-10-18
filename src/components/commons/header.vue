<template>
  <div>
    <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect" v-loading.fullscreen.lock="fullscreenLoading">
      <el-menu-item index="1">
        <router-link to="/world">世界病情</router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <router-link to="/china">中国病情</router-link>
      </el-menu-item>
      <!-- <el-submenu index="2">
        <template slot="title">中国病情</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu> -->
      <el-menu-item index="3">
         <router-link to="/prevent">预防措施</router-link>
      </el-menu-item>
      <!-- <el-submenu index="4">
        <template slot="title">项目</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
      </el-submenu> -->
      <div class="header-right header-user-con">
        <!-- 用户头像 -->
        <div class="user-avator"><img src="../../assets/imgs/img1.png"></div>
        <!-- 用户名下拉菜单 -->
        <el-dropdown class="user-name" trigger="click" @command="handleCommand">
          <span class="el-dropdown-link">
            上山44 <i class="el-icon-caret-bottom"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <a href="https://github.com/MountainC44" target="_blank">
              <el-dropdown-item>关于作者</el-dropdown-item>
            </a>
            <a href="https://github.com/MountainC44/aids-visualization" target="_blank">
              <el-dropdown-item>项目仓库</el-dropdown-item>
            </a>
            <el-dropdown-item divided command="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      activeIndex: '1',
      fullscreenLoading: false,
    };
  },
  components: {},
  methods: {
    // handleSelect(key, keyPath) {
    // },
    handleCommand(command) {
      if (command === 'logout') {
        this.fullscreenLoading = true;
        setTimeout(() => {
          this.fullscreenLoading = false;
          this.$router.push('/login');
        }, 1000);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.el-menu-demo {
  padding-left: 55px;
}
.header-right {
  float: right;
  padding-right: 40px;
}

.header-user-con {
  display: flex;
  height: 60px;
  align-items: center;
  &:focus {
    outline: -webkit-focus-ring-color auto 0px;
  }
}
.user-name {
  margin-left: 10px;
}

.user-avator {
  margin-left: 20px;
}

.user-avator img {
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.el-dropdown-link {
  color: rgb(104, 102, 102);
  cursor: pointer;
}

.el-dropdown-menu__item {
  text-align: center;
}
</style>
