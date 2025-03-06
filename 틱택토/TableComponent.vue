<template>
    <div>
        <tr-component v-for="(rowData, index) in tableData" 
            :row-data="rowData" 
            :row-index="index"
            v-bind:key="index"
            :turn="turn">
        </tr-component>

    </div>
    
</template>

<script>
import TrComponent from './TrComponent.vue';

export default {
    props:{
        tableData:Array,
    },
    components:{
        TrComponent,
    },
    data() {
        return {
        turn: 'O',
        };
    }

}
</script>