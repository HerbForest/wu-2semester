import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/products",
      name: "products",
      component: () => import("@/views/ProductView.vue"),
      children: [
        {
          path: "create",
          name: "product-create",
          component: () => import("@/views/ProductCreateView.vue"),
        },
      ],
    },
  ],
});

export default router;
