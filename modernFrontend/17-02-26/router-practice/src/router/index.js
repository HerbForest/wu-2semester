import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
          {
              path: "/",
              component: () => import("@/layouts/DeafaultLayout.vue"),
              children: [

                  {
                      path: "products",
                      name: "products",
                      component: () => import("@/views/ProductView.vue"),
                      children: [
                          {
                              path: "create",
                              name: "create-product",
                              component: () => import("@/views/ProductCreateView.vue"),
                          },
                      ],
                  },
                  {
                      path: "users/:id",
                      name: "user",
                      component: () => import("@/views/UserView.vue"),
                  },
                  {
                      path: "search",
                      name: "search",
                      component: () => import("@/views/SearchView.vue"),
                  },
              ]
          },
      ],
  });

export default router;
