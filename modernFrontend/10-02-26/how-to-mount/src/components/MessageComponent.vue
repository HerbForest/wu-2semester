<script setup>
import { ref, onMounted } from "vue";

const message = ref();
onMounted(() => {
    message.value = "component has been mounted";
});
</script>
<template>
    <main>
        <div>
            <h1>{{ message }}</h1>
        </div>
    </main>
</template>
