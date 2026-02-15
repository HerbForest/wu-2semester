<script setup>
import { ref, onUpdated } from "vue";
const text = ref("initial text");
onUpdated(() => {
    console.log("component updated");
});
</script>
<template>
    <main>
        <input v-model="text" />
        <h3>{{ text }}</h3>
    </main>
</template>
