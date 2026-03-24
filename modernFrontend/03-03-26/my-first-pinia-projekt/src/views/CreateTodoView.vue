<script setup>
import { ref } from "vue";
import { useTodoStore } from "@/stores/todoStore";
const todo = ref("");

const todoStore = useTodoStore();

const addTodo = () => {
  todoStore.addTodo(todo.value);
  todo.value = "";
};
</script>
<template>
  <form @submit.prevent="addTodo">
    <input v-model="todo" placeholder="enter new todo" />
    <button type="submit">add Todo</button>
  </form>
</template>
