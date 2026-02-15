<script setup>
import { ref, watchEffect } from "vue";
const count = ref(0);
watchEffect(() => {
    console.log(
        "u have clicked " + count.value + " amount of times on this button",
    );
});
</script>
<template>
    <div>
        <button @click="count++">Increment</button>
        <p>Count: {{ count }}</p>
    </div>
</template>
