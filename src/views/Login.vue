<template>
  <div class="page">
    <h2>Login</h2>

    <select v-model="role">
      <option disabled value="">Select role</option>
      <option value="deputy">Deputy School Manager</option>
      <option value="trainer">Trainer</option>
      <option value="student">Student</option>
    </select>

    <button @click="login">Login</button>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      role: ""
    };
  },
  methods: {
    login() {
      if (!this.role) {
        alert("Select a role");
        return;
      }

      localStorage.setItem("role", this.role);

      if (this.role === "deputy") this.$router.push("/dashboard");
      if (this.role === "trainer") this.$router.push("/upload");
      if (this.role === "student") this.$router.push("/documents");
    }
  }
};
</script>
