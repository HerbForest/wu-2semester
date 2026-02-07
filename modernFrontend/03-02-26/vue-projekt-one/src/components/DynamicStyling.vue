<script setup>
import { ref } from "vue";
let isActive = ref(true);
</script>
<template>
    <button @click="isActive = !isActive">active</button>
    <p
        :class="{
            active: isActive,
            notActive: !isActive,
        }"
    >
        i am active now
    </p>
</template>
<style scope>
.active {
    color: green;
}
.notActive {
    display: none;
}
</style>
