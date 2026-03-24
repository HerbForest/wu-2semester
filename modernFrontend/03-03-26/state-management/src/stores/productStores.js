import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import productsJson from '@/products.json';
export const useProductStore = defineStore('product', () => {
  const products = ref([]);
  const maxPrice = ref(100);

  const ProductsWithMaxPrice = computed(() => {
    return products.value.filter((product) => {
      return product.price < maxPrice.value;
    });
  });
  const fetchProducts = async () => {
    products.value = productsJson;
  };
  //self invoking function to fetch products on store creation
  (() => {
    fetchProducts();
  })();
  return {
    maxPrice,
    products,
    ProductsWithMaxPrice,
  };
});
