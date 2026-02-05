<template>
  <nav class="navbar">
    <h3>Course Document System</h3>

    <ul v-if="role">
      <!-- Deputy -->
      <li v-if="role === 'deputy'">
        <router-link to="/dashboard">Dashboard</router-link>
      </li>
      <li v-if="role === 'deputy'">
        <router-link to="/students">Students</router-link>
      </li>
      <li v-if="role === 'deputy'">
        <router-link to="/trainers">Trainers</router-link>
      </li>

      <!-- Trainer -->
      <li v-if="role === 'trainer'">
        <router-link to="/upload">Upload Documents</router-link>
      </li>

      <!-- Student -->
      <li v-if="role === 'student'">
        <router-link to="/documents">View Documents</router-link>
      </li>

      <li>
        <button @click="logout">Logout</button>
      </li>
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
