<template>
  <div class="world-container">
    <el-card class="box-card">
      <div v-for="o in 8" :key="o" class="text item">
        {{'列表内容 ' + o }}
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {};
  },
  components: {},
};
</script>

<style scoped lang="scss">
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.world-container{
  margin-top: 20px;
  margin-left: 35px;
  margin-right: 35px;
  .box-card {
    width: 100%;
    }
}
</style>
