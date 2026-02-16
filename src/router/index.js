import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue';
import AboutusComponent from '@/components/AboutusComponent.vue';
import TrainerRegistration from '@/views/TrainerRegistration.vue';
import StudentRegistration from '@/views/StudentRegistration.vue';
// import TrainerList from '@views/TrainerList.vue';
// import StudentList from '@views/StudentList.vue';
// import Documents from '@views/Documents.vue';
import UploadDocuments from '@/views/UploadDocuments.vue';

const routes = [
  { path: "/", component: HomeView },

  // ADMIN
  { path: "/register-student", component: StudentRegistration, meta: { roles: ["admin"] } },
  { path: "/register-trainer", component: TrainerRegistration, meta: { roles: ["admin"] } },
  { path: "/trainers", component: TrainerList, meta: { roles: ["admin"] } },
  { path: "/students", component: StudentList, meta: { roles: ["admin", "trainer"] } },
  { path: "/documents", component: Documents, meta: { roles: ["admin", "student"] } },
  
  // TRAINER
  { path: "/upload", component: UploadDocuments, meta: { roles: ["trainer"] } },

  // SHARED
  { path: "/aboutus", component: AboutusComponent, meta: { roles: ["trainer", "student"] } }
];
export default routes