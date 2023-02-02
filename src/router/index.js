import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import CatalogItem from "../views/CatalogItem.vue";
import Catalog from "../views/Catalog.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/:url",
    name: "Catalog",
    component: Catalog,
  },
  {
    path: "/:url/:id",
    name: "CatalogItem",
    component: CatalogItem,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
