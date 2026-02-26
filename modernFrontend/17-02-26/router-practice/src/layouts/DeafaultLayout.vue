<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="layout">
        <header class="header">
            <div class="header-inner">
                <RouterLink to="/" class="logo">MyApp</RouterLink>
                <nav>
                    <RouterLink :to="{ name: 'products' }">Products</RouterLink>
                    <RouterLink :to="{ name: 'create-product' }"
                        >Create Products</RouterLink>

                    <RouterLink :to="{ name: 'user', params: { id: '2' } }">user2</RouterLink>
                    <RouterLink :to="{ name: 'user', params: { id: '1' } }">user1</RouterLink>
                </nav>
            </div>
        </header>

        <main class="main">
            <RouterView />
        </main>

        <footer class="footer">
            <p>© 2026 MyApp</p>
        </footer>
    </div>
</template>

<style scoped>
.layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.header {
    background-color: #f0f0f0;
    border-bottom: 2px solid #ccc;
    padding: 1rem 2rem;
}

.header-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 1.2rem;
    font-weight: bold;
    color: #333;
    text-decoration: none;
}

.nav {
    display: flex;
    gap: 1rem;
}

.nav a {
    color: #333;
    text-decoration: none;
}

.nav a:hover {
    text-decoration: underline;
}

.nav a.router-link-active {
    font-weight: bold;
}

.main {
    flex: 1;
    padding: 2rem;
}

.footer {
    background-color: #f0f0f0;
    border-top: 2px solid #ccc;
    text-align: center;
    padding: 1rem;
    color: #333;
}
</style>
