<template>
  <div>
    <h1>number baseball</h1>
    <form @submit.prevent="onSubmitForm">
        <input ref="answer" maxlength="4" v-model="value"/>
        <button type="submit">입력</button>
    </form>
    <div v-if="tries">시도:{{tries.length}}</div>
    <ul>
        <li v-for="t in tries" v-bind:key="t.try">
            <div>{{t.try}}</div>
            <div>{{t.result}}</div>
        </li>
    </ul>
  </div>
</template>

<script>
const getNumbers=()=>{
    const candidate=[1,2,3,4,5,6,7,8,9];
    const array=[];
    for(let i=0;i<4;i+=1){
        const chosen=candidate.splice(Math.floor(Math.random()*(9-i)),1)[0];
        array.push(chosen);
    }
    return array;
};

export default {
    data(){
        return{
            answer:getNumbers(), //배열
            tries:[],
            value:'',
            result:'',
        }
    },
    methods:{
        onSubmitForm(){
            if(this.value===this.answer.join('')){
                this.tries.push({
                    try: this.value,
                    result:'홈런',
                });
                this.result='홈런';
                alert("홈런! 게임을 다시 실행");
                this.tries=[];
                this.answer=getNumbers();
                this.$refs.answer.focus();
            }else{
                if(this.tries.length>=9){
                    this.result=`10번 넘게 시도해서 실패. 답=${this.answer.join(',')}`;
                    alert('오답. 게임을 다시 시작');
                    this.value='';
                    this.answer=getNumbers();
                    this.tries=[];
                    this.$refs.answer.focus();
                }

                let strike=0;
                let ball=0;
                const answerArray=this.value.split('').map(v=>parseInt(v));
                for(let i=0;i<4;i+=1){
                    if(answerArray[i]===this.answer[i]){//숫자 자릿수 까지 다 맞을때
                        strike++;
                    }else if(this.answer.includes(answerArray[i])){ //숫자만 정답
                        ball++;
                    }
                }
                this.tries.push({
                    try:this.value,
                    result:`${strike}스트라이크 ${ball}볼`,
                });
            }
            
            this.value='';
            
            this.$refs.answer.focus();
        }
    }
}
</script>

<style>

</style>