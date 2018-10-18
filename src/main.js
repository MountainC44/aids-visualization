import ElementUI from 'element-ui';
import Echarts from 'echarts';
import 'element-ui/lib/theme-chalk/index.css'; // element-ui样式文件需要单独引入
import Vue from 'vue';
import Vuex from 'vuex';
import App from './App';
import router from './router';

Vue.config.productionTip = false; // 设置为 false 以阻止 vue 在启动时生成生产提示
Vue.use(Vuex);
Vue.use(ElementUI);
Vue.prototype.$Echarts = Echarts;

const store = new Vuex.Store({
  state: {
    NewMsg: {
      Msgs: [{
        title: '暂无消息',
        content: '暂无消息！',
        url: '#no_msg',
        id: 'no_msg',
      }],
    },
  },
  mutations: {
    modifyMsg(state, Obj) {
      if (state.NewMsg.Msgs[0].id === 'no_msg') {
        state.NewMsg.Msgs.shift();
      }
      const obj = {
        title: Obj.title,
        content: Obj.content,
      };
      obj.id = `Msg_${Obj.id}`;
      obj.url = `#${obj.id}`;
      state.NewMsg.Msgs.push(obj);
    },
  },
  actions: {
    // fetchMsg(context) {
    //   $.ajax({
    //     url: 'PHP/GetMsgs.php',
    //     type: 'GET',
    //     data: {},
    //     dataType: 'json',
    //     success(response) {
    //       if (typeof response === 'string') {
    //         response = JSON.parse(response);
    //       }
    //       $(response).each((k, v) => {
    //         // console.log(v.id+v.title+v.content);
    //         context.commit('modifyMsg', v);
    //       });
    //     },
    //   });
    // },
  },
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  // created() {
  //   store.dispatch('fetchMsg');
  // },
  components: {
    App,
  },
  template: '<App/>',
});
