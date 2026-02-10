<script setup>
import { ref } from "vue";
import Message from "@/components/Message.vue";
import MyName from "@/components/MyName.vue";
import BindBasic from "@/components/BindBasic.vue";
import DynamicStyling from "@/components/DynamicStyling.vue";
import ConditionalRendering from "@/components/ConditionalRendering.vue";
import VshowVSVIf from "@/components/VshowVSVIf.vue";
import BookList from "@/components/BookList.vue";
import ShoppingList from "@/components/ShoppingList.vue";
import TaskManager from "@/components/TaskManager.vue";

const isMessageVisible = ref(true);
</script>

<template>
    <button @click="isMessageVisible = !isMessageVisible">
        Toggle Message
    </button>
    bye <Message v-show="isMessageVisible" />

    opg 1 <MyName />

    opg 2 <BindBasic />

    opg 3 <DynamicStyling />

    opg 4 <ConditionalRendering />

    opg 5 <VshowVSVIf />

    opg 6 <BookList />

    opg 7 <ShoppingList />

    opg 19 <TaskManager />
</template>

<style scoped></style>
