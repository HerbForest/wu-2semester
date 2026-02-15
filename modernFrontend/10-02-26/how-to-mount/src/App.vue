<script setup>
import { ref } from "vue";
import MessageComponent from "@/components/MessageComponent.vue";
import UserList from "@/components/UserList.vue";
import timerComponent from "@/components/TimerComponent.vue";
import CounterDisplay from "@/components/CounterDisplay.vue";
import UpdateLogger from "@/components/UpdateLogger.vue";
import LifeCycleLogger from "@/components/LifeCycleLogger.vue";
const showTimer = ref(true);
const cycle = ref(true);
</script>

<template>
    <MessageComponent />
    <hr />
    <UserList />
    <hr />
    <CounterDisplay />
    <hr />
    <UpdateLogger />
    <hr />
    <LifeCycleLogger v-if="cycle" />
    <button @click="cycle = !cycle">cycle</button>
    <hr />
    <button @click="showTimer = !showTimer">Toggle Timer</button>
    <timerComponent v-if="showTimer" />
</template>

<style scoped></style>
