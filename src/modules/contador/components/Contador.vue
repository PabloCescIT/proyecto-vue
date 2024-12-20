<template>
 <h1>Contador:</h1>
 <p>{{ contador }}</p>
 <button @click="sumar">Sumar</button>
 <button @click="restar">Restar</button>
</template>

<script setup>
import { ref } from 'vue';
const contador = ref(0);
const sumar = () => {
  contador.value++;
}
const restar = () => {
  contador.value--;
}
</script>

<style scoped>
p {
  color: red;
}
</style>
