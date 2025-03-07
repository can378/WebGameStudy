<template>
  <div v-if="currentGame==='number-baseball'">
    <number-baseball></number-baseball>
  </div>

  <div v-else-if="currentGame==='response-check'">
    <response-check></response-check>
  </div>

  <div v-else-if="currentGame==='lotto-generator'">
    <lotto-generator></lotto-generator>
  </div>
  <div v-else>일치하는 게임 없음</div>
</template>

<script>
import LottoGenerator from '../로또/LottoGenerator.vue'
import ResponseCheck from '../반응속도체크/ResponseCheck.vue'
import NumberBaseball from '../숫자야구/NumberBaseball.vue'

export default {
  components: { NumberBaseball, ResponseCheck, LottoGenerator },
    mounted:{
        
    },
}
</script>

<style>

</style>