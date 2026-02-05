import { createRouter, createWebHistory } from "vue-router";

import Login from "@/views/Login.vue";
import Dashboard from "@/views/Dashboard.vue";
import StudentRegistration from "@/views/StudentRegistration.vue";
import TrainerRegistration from "@/views/TrainerRegistration.vue";
import UploadDocuments from "@/views/UploadDocuments.vue";
import ViewDocuments from "@/views/ViewDocuments.vue";

const routes = [
  { path: "/", name:Login, component: Login },

  { path: "/dashboard", component: Dashboard, meta: { role: "deputy" } },
  { path: "/students", component: StudentRegistration, meta: { role: "deputy" } },
  { path: "/trainers", component: TrainerRegistration, meta: { role: "deputy" } },

  { path: "/upload", component: UploadDocuments, meta: { role: "trainer" } },

  { path: "/documents", component: ViewDocuments, meta: { role: "student" } }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router