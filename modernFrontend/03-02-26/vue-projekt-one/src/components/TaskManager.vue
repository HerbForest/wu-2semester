<script setup>
import { ref, computed } from "vue";
let id = 0;
const newTask = ref("");
const hideCompleted = ref(false);
const tasks = ref([
    {
        id: id++,
        text: "",
        done: false,
    },
]);
const filteredTask = computed(() => {
    return hideCompleted.value
        ? tasks.value.filter((todo) => !todo.done)
        : tasks.value;
});

function addTask() {
    tasks.value.push({ id: id++, text: newTask.value, done: false });
    newTask.value = "";
}

function removeTask(task) {
    tasks.value = tasks.value.filter((todo) => todo !== task);
}
</script>
<template>
    <main>
        <form @submit.prevent="addTask">
            <label>
                New Task
                <input v-model="newTask" name="New task" />
            </label>
            <div class="button-container">
                <button class="submitButton">Tilføj task</button>
            </div>
        </form>
        <ul>
            <li v-for="task in filteredTask" :key="task.id">
                <input type="checkbox" v-model="task.done" />
                <span :class="{ done: task.done }">{{ task.text }}</span>
                <button id="removeTask" @click="removeTask(task)">X</button>
            </li>
        </ul>
        <button @click="hideCompleted = !hideCompleted">hide Tasks</button>
    </main>
</template>

<style scoped>
main {
    max-width: 800px;
    margin: 1rem auto;
}
.button-container {
    display: flex;
    justify-content: end;
}
.submitButton {
    background-color: green;
}
.done {
    text-decoration: line-through;
}

#removeTask {
    background-color: red;
    margin-left: 10px;
}
li {
    list-style-type: none;
}
</style>
