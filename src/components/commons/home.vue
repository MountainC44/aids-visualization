<template>
  <div>
    <Header></Header>
    <transition name="move" mode="out-in">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './header';
import Footer from './footer';

export default {
  name: '',
  data() {
    return {};
  },
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped lang="scss">
</style>
