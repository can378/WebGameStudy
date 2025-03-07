import Vue from 'vue';
import VueRouter from 'vue-router';

import NumberBaseball from '../숫자야구/NumberBaseball';
import ResponseCheck from '../반응속도체크/ResponseCheck';
import RockScissorPaper from '../가위바위보/RockScissorPaper';
import LottoGenerator from '../로또/LottoGenerator';
import GameMatcher from './GameMatcher';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes:[
        {path: '/number-baseball',component:NumberBaseball },
        {path: '/response-check',component:ResponseCheck },
        {path: '/rock-scissors-paper',component:RockScissorPaper},
        {path: '/lotto-generator',component:LottoGenerator},
        {path: '/game/:name', component:GameMatcher}
    ],
});