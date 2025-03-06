<template>
  <div>
    <h1>Lotto Generator</h1>
    <div>당첨 숫자</div>
    <div id="결과창">
        <lotto-ball v-for="ball in winBalls" v-bind:key=ball v-bind:number=ball></lotto-ball>
    </div>
    <div>보너스</div>
    <lotto-ball v-if="bonus" v-bind:number="bonus"></lotto-ball>
    <button v-if="redo" @click="onClickRedo">one more time</button>
  </div>
</template>

<script>
import LottoBall from './LottoBall.vue';

//shuffle정렬후 랜덤으로 몇개 뽑는 것것
function getWinNumbers(){
    const candidate=Array(45).fill().map((v,i)=>i+1);
    const shuffle=[];
    while(candidate.length>0){
        shuffle.push(candidate.splice(Math.floor(Math.random()*candidate.length),1)[0]);
    }
    const bonusNumber=shuffle[shuffle.length-1];
    const winNumbers=shuffle.slice(0,6).sort((p,c)=>p-c);
    return [...winNumbers,bonusNumber];
}
const timeouts=[];
export default {
    components:{
        'lotto-ball':LottoBall,//Pascal case는 cababcase로 자동으로 바꿔서 LottoBall로만 할 수도 있다.
    },
    data(){
        return{
            winNumbers:getWinNumbers(),
            winBalls:[],
            redo:false,
            bonus:null,
        };
    },
    computed:{
    },
    methods:{
        onClickRedo(){
            this.winNumbers=getWinNumbers();
            this.winBalls=[];
            this.bonus=null;
            this.redo=false;
            //this.showBalls();
        },
        showBalls(){
            for(let i=0;i<this.winNumbers.length-1;i++){
                timeouts[i]=setTimeout(()=>{
                    this.winBalls.push(this.winNumbers[i]);
                },(i+1)*1000);
            }
            timeouts[6]=setTimeout(()=>{
                this.bonus=this.winNumbers[6];
                this.redo=true;
            },7000);
        }
    },
    mounted(){
        this.showBalls();
    },
    watch:{
        winBalls(val,oldVal){//winBalls를 감시! 하지만 이거는 웬만하면 쓰지마라. 최후의 수단.
            if(val.length===0){
                this.showBalls();
            }
        }
    },
    beforeDestroy(){
        timeouts.forEach((t)=>{
            clearTimeout(t);
        });
    }

}
</script>

<style>

</style>