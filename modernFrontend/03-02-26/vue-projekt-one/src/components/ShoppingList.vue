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
        <li  v-for="item in shoppingList" :key="item.id" :class="{ bought: item.bought}">
            jeg skal have {{ item.name }}
            <input type="checkbox" :class="bought" v-model="item.bought">{{}}</input>
        </li>
    </ul>
</template>
<style scoped>
.bought{

    text-decoration: line-through;
    opacity: 0,6

}
</style>
