<script setup>
import { ref, onUnmounted, onMounted } from "vue";
const seconds = ref(0);
let interval;
const showTimer = ref(true);

onMounted(() => {
    interval = setInterval(() => {
        seconds.value++;
    }, 1000);
});
onUnmounted(() => {
    clearInterval(interval);
});
</script>
<template>
    <main>
        <h2 v-if="showTimer">time counter :{{ seconds }}</h2>
        <button @click="showTimer = !showTimer">Toggle Timer</button>
    </main>
</template>
<style>
.opacity {
    opacity: 0.5;
}
</style>
