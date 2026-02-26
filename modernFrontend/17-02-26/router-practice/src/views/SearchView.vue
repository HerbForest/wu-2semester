<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
console.log(route.query.q);
</script>
<template>
<h1 v-if="route.query.q">{{route.query.q}}</h1>
<h1 v-else>Search</h1>
</template>
