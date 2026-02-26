<script setup>
import { ref } from "vue";
const emit = defineEmits(["countChanged"]);
const increment = () => {
    counter.value++;
    emit("countChanged", counter.value);
};
const counter = ref(0);
</script>

<template>
    <button @click="increment">Increment</button>
    <p>Counter: {{ counter }}</p>
</template>
