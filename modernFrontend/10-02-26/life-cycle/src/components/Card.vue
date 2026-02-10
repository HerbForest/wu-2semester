<script setup>
defineProps({
    title: String,
});
</script>
<template>
    <div class="cars">
        <header>
            <h2>
                {{ title }}
            </h2>
        </header>
    </div>
    <div>sikkert en dårlig ide</div>
    <main>
        <slot> empty card </slot>
    </main>
</template>

<style></style>
