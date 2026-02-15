<script setup>
import { ref, onBeforeMount, onBeforeUnmount } from "vue";
let cycle = ref(true);
let cycletext = ref("text");

onBeforeMount(() => {
    console.log("component is about to mount");
});

onBeforeUnmount(() => {
    console.log("component is about to unmount");
});
</script>
<template>
    <main>
        <h1 v-if="cycle">{{ cycletext }}</h1>
    </main>
</template>
