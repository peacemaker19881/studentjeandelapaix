<template>
  <nav class="navbar" v-if="role">
    <ul>

      <!-- ADMIN -->
      <template v-if="role === 'admin'">
        <li><router-link to="/register-student">Register Student</router-link></li>
        <li><router-link to="/register-trainer">Register Trainer</router-link></li>
        <li><router-link to="/documents">View Documents</router-link></li>
        <li><router-link to="/trainers">Registered Trainers</router-link></li>
        <li><router-link to="/students">Registered Students</router-link></li>
      </template>

      <!-- TRAINER -->
      <template v-if="role === 'trainer'">
        <li><router-link to="/upload">Upload Document</router-link></li>
        <li><router-link to="/students">Registered Students</router-link></li>
        <li><router-link to="/about">About Us</router-link></li>
      </template>

      <!-- STUDENT -->
      <template v-if="role === 'student'">
        <li><router-link to="/documents">Documents</router-link></li>
        <li><router-link to="/about">About Us</router-link></li>
      </template>

      <li><button @click="logout">Logout</button></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "AppNavbar",
  computed: {
    role() {
      return localStorage.getItem("role");
    }
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push("/");
    }
  }
};
</script>
