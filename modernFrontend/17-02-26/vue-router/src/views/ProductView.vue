<script setup></script>
<template>
    <main>
        <router-link :to="{ name: 'product-create' }"
            >Create Product</router-link
        >

        <hr />

        <router-view />
    </main>
</template>
