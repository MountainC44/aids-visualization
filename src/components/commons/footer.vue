<template>
  <div id="footer">
    <span>Copyright ©2018 {{name}}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'MountainC44',
    };
  },
};
</script>

<style scoped lang="scss">
#footer {
  position: fixed;
  bottom: 10px;
  left: 0px;
  right: 0px;
  width: 220px;
  height: 25px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  color: #36353575;
  font-size: 15px;
}
</style>
