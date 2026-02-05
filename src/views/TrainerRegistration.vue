<template>
  <div class="page">
    <h2>Trainer Registration</h2>

    <form @submit.prevent="submitForm">
      <input v-model="trainer.trainerCode" placeholder="Trainer Code" required />
      <input v-model="trainer.fullName" placeholder="Full Name" required />

      <select v-model="trainer.course" required>
        <option disabled value="">Assign Course</option>
        <option>Software Development</option>
        <option>Networking</option>
        <option>Multimedia</option>
      </select>

      <input v-model="trainer.email" placeholder="Email Address" required />

      <button type="submit">Register Trainer</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "TrainerRegistration",
  data() {
    return {
      trainer: {
        trainerCode: "",
        fullName: "",
        course: "",
        email: "",
        status: "active"
      }
    };
  },
  methods: {
    submitForm() {
      console.log("Trainer data to send:", this.trainer);
    }
  }
};
</script>
