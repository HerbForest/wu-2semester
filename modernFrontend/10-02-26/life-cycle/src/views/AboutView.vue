<script setup>
import { ref } from "vue";
import Card from "@/components/Card.vue";

const user = ref({
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
});
</script>
<template>
    <card :title="user.name" class="grocery__card">
        <p>age: {{ user.age }}</p>
        <p>email: {{ user.email }}</p>
    </card>
    <card title="noget noget" />
</template>

<style></style>
