<template>
  <div class="registration-container">
    

    <form class="registration-card" @submit.prevent="submitForm">
      <h2 style="text-align:center;">Trainer Registration</h2>
      <input v-model="trainer.trainerCode" placeholder="Trainer Code" required /><br><br><br>
      <input v-model="trainer.fullName" placeholder="Full Name" required /><br><br>

      <select v-model="trainer.course" required>
        <option disabled value="">Assign Course</option>
        <option>Software Development</option>
        <option>Networking</option>
        <option>Multimedia</option>
      </select><br><br>

      <input v-model="trainer.email" placeholder="Email Address" required /><br><br>

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
<style scoped>
.registration-container {
  min-height: 100vh;
  background: linear-gradient(135deg, rgb(158, 191, 213), rgba(172, 188, 199, 0.25));
  display: flex;
  justify-content: center;
  align-items: center;
}

.registration-card {
  background: white;
  width: 420px;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0,0,0,.25);
}

.title {
  text-align: center;
  margin-bottom: 25px;
  color: #0f4c75;
}

.form-group {
  margin-bottom: 15px;
}

label {
  font-weight: 600;
  display: block;
  margin-bottom: 5px;
}

input, select {
  width: 100%;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
}

input:focus, select:focus {
  outline: none;
  border-color: #3282b8;
}

.btn-submit {
  width: 100%;
  padding: 12px;
  background: #0f4c75;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.btn-submit:hover {
  background: #1b6ca8;
}
</style>
