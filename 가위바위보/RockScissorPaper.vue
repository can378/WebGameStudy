<template>
    <div>
        <div id="computer" :class="{state:true,hello:false}" 
            :style="computedStyleObject"></div>
        <div>
            <button @click="onClickBtn('가위')">가위</button>
            <button @click="onClickBtn('바위')">바위</button>
            <button @click="onClickBtn('보')">보</button>
        </div>
        <div>{{result}}</div>
        <div>현재 {{score}}점</div>
        
    </div>
</template>

<script>
let interval=null;
let timeout=null;

const rspCoords={
    바위:'0',
    가위:'-142px',
    보:'-284px',
};
const scores={
    가위:1,
    바위:0,
    보:-1,
};

const computerChoice=(imgCoord)=>{
    return Object.entries(rspCoords).find(function(v){
        return v[1]===imgCoord;
    })[0];
};


export default {
    data(){
        return{
            imgCoord:rspCoords.바위,
            result:'',
            score:0,
        };
    },
    computed:{
        computedStyleObject() {
            return {
                backgroundImage: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg)`,
                backgroundPosition: `${this.imgCoord} 0`,
            };
        }

    },
    methods:{
        changeHand(){
            interval=setInterval(()=>{
            if(this.imgCoord === rspCoords.바위){
            this.imgCoord = rspCoords.가위;
            }else if(this.imgCoord === rspCoords.가위){
            this.imgCoord = rspCoords.보;
            }else if (this.imgCoord === rspCoords.보){
            this.imgCoord = rspCoords.바위;
            }
        },100);
        },
        async onClickBtn(choice){
            await new Promise()//async는 await를 쓰기 위해서 사용하고 await는 Promise를 쓰기 위해서 쓰는거다.
            clearInterval(interval);
            const myScore=scores[choice];
            const cpuScore=scores[computerChoice(this.imgCoord)];
            const diff=myScore-cpuScore;
            if(diff===0){
                this.result='비겼';
            }else if([-1,2].includes(diff)){
                this.result='이겼당';
                this.score+=1;
            }else{
                this.result='졌다..';
                this.score-=1;
            }
            setTimeout(()=>{
                this.changeHand();
            },1000);
        },
    },
    beforeCreate(){
        console.log('beforeCreate');
    },
    created(){
        console.log('created');//화면에 나타나기는전이지만 보여질때
    },
    beforeMounted(){
        console.log('before mounted');
    },
    mounted(){
        console.log('mounted');//
        this.changeHand();
    },
    updated(){
        console.log('updated');
    },
    beforeDestroy(){
        console.log('beforeDestroy');
        clearInterval(interval);//메모리 누수를 방지하기 위해 필요없으면 멈춤
    },
    destroyed(){
        console.log('destroyed');
    }
}
</script>

<style>
#computer {
    width: 142px;
    height: 200px;
}
</style>
