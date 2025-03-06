// import * as Vue from 'vue';
// import NumberBaseball from './NumberBaseball';

// //new Vue(NumberBaseball).$mount('#root');

// new Vue(NumberBaseball).$mount('#root');

import Vue from 'vue';
import NumberBaseball from './NumberBaseball.vue';

new Vue({
  render: h => h(NumberBaseball)
}).$mount('#root');
