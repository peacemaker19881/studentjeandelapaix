<template>
  <div class="registration-container">
    <form class="registration-card" @submit.prevent="submitForm">
      <h2 style="text-align:center;">Student Registration</h2>
      <input v-model="student.registrationCode" placeholder="Registration Code" required /><br><br>
      <input v-model="student.fullName" placeholder="Full Name" required /><br><br>
      <select v-model="student.course" required>
        <option disabled value="">Select Course</option>
        <option>Software Development</option>
        <option>Computer Systems and Technology</option>
        <option>Accounting</option>
      </select><br><br>

      <input v-model="student.academicYear" placeholder="Academic Year (e.g. 2025)" required /><br><br><br>

      <button type="submit">Register Student</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "StudentRegistration",
  data() {
    return {
      student: {
        registrationCode: "",
        fullName: "",
        course: "",
        academicYear: "",
        status: "active"
      }
    };
  },
  methods: {
    submitForm() {
      console.log("Student data to send:", this.student);
    }
  }
};
</script>
<style scoped>
.registration-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #a5b0b7, rgb(213, 224, 231));
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
