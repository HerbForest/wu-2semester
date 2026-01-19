<script lang="js" setup>
import { ref } from "vue";
const message = ref("Hello World!");
const newTask = ref("");

function formSubmitted() {
    console.log(newTask.value);
}
</script>

<template>
    <main>
        <div>{{ message }}</div>
        <form @submit.prevent="formSubmitted">
            <label>
                New Task:
                <input v-model="newTask" name="new task" />
            </label>
            <div class="button-container">
                <button>Add</button>
            </div>
        </form>
        <h3>{{ newTask }}</h3>
    </main>
</template>

<style scoped>
main {
    max-width: 600px;
    margin: 1rem auto;
}
.button-container {
    display: flex;
    justify-content: end;
}
</style>
