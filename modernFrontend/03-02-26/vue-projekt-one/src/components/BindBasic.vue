<script setup>
import { ref } from "vue";
const facIcon = "/old-Insta.png";
let amIDisabled = ref(true);
let nowUSeeME = ref("makeMeRed");
</script>
<template>
    <div>
        <p :id="nowUSeeME">dynamictext</p>
    </div>

    <img :src="facIcon" />

    <button
        @click="amIDisabled = !amIDisabled"
        :class="{ disabled: amIDisabled, NotDisabled: !amIDisabled }"
    >
        disabled
    </button>
</template>

<style scoped>
#makeMeRed {
    color: red;
}
button {
    background: yellow;
}
.disabled {
    background-color: red;
    color: light green;
}
.NotDisabled {
    background-color: green;
}
</style>
