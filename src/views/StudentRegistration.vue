<template>
  <div class="page">
    <h2>Student Registration</h2>

    <form @submit.prevent="submitForm">
      <input v-model="student.registrationCode" placeholder="Registration Code" required />
      <input v-model="student.fullName" placeholder="Full Name" required />

      <select v-model="student.course" required>
        <option disabled value="">Select Course</option>
        <option>Software Development</option>
        <option>Networking</option>
        <option>Multimedia</option>
      </select>

      <input v-model="student.academicYear" placeholder="Academic Year (e.g. 2025)" required />

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
