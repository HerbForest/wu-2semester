<script setup></script>

<template>
  <nav>
    <ul>
      <li><RouterLink :to="{ name: 'create' }">Create Todo</RouterLink></li>
      <li><RouterLink :to="{ name: 'list' }"> Todo list</RouterLink></li>
    </ul>
  </nav>
  <RouterView />
</template>
