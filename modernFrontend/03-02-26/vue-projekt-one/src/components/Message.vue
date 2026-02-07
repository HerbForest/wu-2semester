<script setup>
import { ref } from "vue";
const password = ref("");
const isPasswordVisible = ref(false);
</script>
<template>
    <!-- <div>
        <button @click="isPasswordVisible = !isPasswordVisible">
            show password
        </button>
        <p :class="'success'">{{ password }}</p>
        <input
            :type="isPasswordVisible ? 'text' : 'password'"
            v-model="password"
            :class="{
                error: password.length < 8,
                success: password.length >= 8,
            }"
        />
    </div> -->
</template>

<style scoped>
input {
    outline: none;
}
.error {
    border: red 1.5px solid;
}
.success {
    border: lightgreen 1.5px solid;
}
</style>
