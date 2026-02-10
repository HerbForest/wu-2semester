<script setup>
import { onBeforeMount, onMounted, onUpdated, ref, watch } from "vue";
const messageVisable = ref(true);
const message = ref("");

onUpdated(() => {
    console.log("this is updated");
});
onMounted(() => {
    console.log("det her er onmounted");
});
onBeforeMount(() => {
    console.log("det her er on before mount");
});
watch(message, () => {
    if (message.value.length > 3) {
        console.log("nu dit password sikkert");
    }
});
</script>

<template>
    <input v-model="message" />
    <p v-if="messageVisable">{{ message }}</p>
    <button @click="messageVisable = !messageVisable">det en knap</button>
</template>
