<script setup>
import { ref } from "vue";
let shoppingList = ref([
    {
        id: 0,
        name: "milk",
        bought: false,
    },
    {
        id: 1,
        name: "cucumber",
        bought: false,
    },
    {
        id: 2,
        name: "smoked tofu",
        bought: false,
    },
    {
        id: 3,
        name: "onions",
        bought: false,
    },
    {
        id: 4,
        name: "chokolade",
        bought: false,
    },
]);
</script>
<template>
    <ul>
        <li v-for="item in shoppingList" :key="item.id">
            jeg skal have {{ item.name }}
            <button @click="bought = !bought">X</button>
        </li>
    </ul>
</template>
