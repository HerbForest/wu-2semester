<script setup>
import { useProductStore } from '@/stores/productStores';
const productStore = useProductStore();
</script>
<template>
  <div>
    <h2>products</h2>
    <div v-for="(products, index) in productStore.ProductsWithMaxPrice" :key="index">
      <h3>{{ products.title }}</h3>
      <p>{{ products.price }} DKK</p>
    </div>
  </div>
</template>

<style></style>
