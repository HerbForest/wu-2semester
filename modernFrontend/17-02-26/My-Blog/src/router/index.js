import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/HomeView.vue"),
    },
    {
      path: "/post/create",
      name: "create-post",
      component: () => import("@/views/CreatePostView.vue"),
    },
    {
      path: "/post/:id",
      name: "posts",
      component: () => import("@/views/PostsView.vue"),
    },
    {
      path: "/post/:id/edit",
      name: "edit-post",
      component: () => import("@/views/EditPostView.vue"),
    },
  ],
});

export default router;
