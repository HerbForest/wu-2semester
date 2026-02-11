<script setup>
import { ref, onMounted } from "vue";
const UserData = "https://jsonplaceholder.typicode.com/users";
const users = ref([]);
onMounted(async () => {
    const response = await fetch(UserData);
    users.value = await response.json();
});
</script>

<template>
    <main>
        <ul>
            <li v-for="user in users" :key="user.id">
                <h2>{{ user.name }}</h2>
                <p>{{ user.email }}</p>
            </li>
        </ul>
    </main>
</template>
