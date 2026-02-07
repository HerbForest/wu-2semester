<script setup>
import { ref } from "vue";
const isShow = ref("true");
</script>
<template>
    <button @click="isShow = !isShow" v-if="isShow">this is if</button>

    <button @click="isShow = !isShow" v-show="!isShow">this is show</button>
</template>
