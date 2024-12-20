<template>
    <h3>Propiedades computadas</h3>
    <input type="text" v-model="valor">
    {{ valorCalculado }}
    <ResultadoSection v-if="mostrarElemento" :resultado="valorCalculado"></ResultadoSection>
    <div v-else-if="isNaN(valor)">Debe de ser un número para poder hacer los cálculos</div>
    <div v-else>Aquí no se muestra nada superior a la edad de Jesucristo</div>
</template>

<script setup>
import {ref, computed} from 'vue';
import ResultadoSection from './components/ResultadoSection.vue';
const valor = ref('');
const valorCalculado = computed(()=> {
    return valor.value * 3
});

const mostrarElemento = computed(()=> {
    return valor.value > 10;
})
</script>

<style scoped>

</style>
