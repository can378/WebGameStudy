import Vue from 'vue';
import TicTacToe from './TicTacToe.vue';

new Vue({
  render: h => h(TicTacToe)
}).$mount('#root');
