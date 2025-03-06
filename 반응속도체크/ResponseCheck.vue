<template>
    <div>
        <div id="screen" v-bind:class="state" @click="onClickScreen">{{message}}</div>
        <div v-show="result.length">
            <div>평균시간:{{average}}</div>
            <button @click="onReset">reset</button>
        </div>
        <!-- v-show, v-if 차이. v-show는 안보임 코드에서(?) -->
    </div>
</template>

<script>
let startTime=0;
let endTime=0;
let timeout=null;

export default {
    data(){
        return{
            result:[],
            state:'waiting',
            message:'클릭해서 시작',
        };
    },
    computed:{//계산하는 부분은 computed로 하는 것이 조하. 데이터 변경되면 이거 반영됨
        average(){
            return this.result.reduce((a,c)=>a+c,0)/this.result.length||0
        }
    },
    methods:{
        onReset(){
            this.result=[];
        },
        onClickScreen(){
            if(this.state==='waiting'){
                this.state='ready';
                this.message='초록색이 되면 클릭하세요';
                timeout=setTimeout(()=>{
                    this.state='now';
                    this.message='지금 클릭';
                },Math.floor(Math.random()*1000)+2000);
            }else if(this.state==='ready'){
                clearTimeout(timeout);
                this.state='waiting';
                this.message='너무 성급하시군요 초록색이 된 후 클릭하세요';
            }else if(this.state==='now'){
                endTime=new Date();
                this.state='waiting';
                this.message='클릭해서 시작';
                this.result.push(endTime-startTime);
            }
        }
    }
}
</script>

<style scoped>/*css가 모든 컴포넌트트에서 적용되는 것을 막는 것 scoped */
    #screen{
        width: 300px;
        height: 200px;
        text-align: center;
        user-select: none;
    }
    #screen.waiting{
        background-color: aqua;
    }
    #screen.ready{
        background-color:red;
        color:white;
    }
    #screen.now{
        background-color: greenyellow;
    }
</style>