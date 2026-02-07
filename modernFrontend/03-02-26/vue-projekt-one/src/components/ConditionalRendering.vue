<script setup>
import { ref } from "vue";
let score = ref(75);
</script>
<template>
    <div>
        <input v-model.number="score" min="0" max="100" />
        <p v-if="score >= 90">fantastisk</p>
        <p v-else-if="score >= 70">godt!</p>
        <p v-else-if="score >= 50">det gik okay</p>
        <p v-else="score < 50">du skal øve dig noget mere</p>
    </div>
</template>
