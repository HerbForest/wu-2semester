<script setup>
import Counter from "@/components/Counter.vue";
import { ref } from "vue";
const currentCount = ref(0);
const handleCountChange = (newValue) => {
    currentCount.value = newValue;
};
</script>

<template>
    <Counter @countChanged="handleCountChange" />
</template>

<style scoped></style>
