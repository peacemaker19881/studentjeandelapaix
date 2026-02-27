<template>
  <div class="container-fluid bg-light min-vh-100 d-flex justify-content-center align-items-center">
    <div class="row w-100 justify-content-center">
      <div class="col-md-8 col-lg-6 col-xl-5">
        
        <div class="card shadow-lg border-0">
          <div class="card-header bg-primary text-white text-center">
            <h4 class="mb-0">Student Registration</h4>
          </div>

          <div class="card-body">
            <form @submit.prevent="submitForm">

              <!-- Full Names -->
              <div class="mb-3">
                <label class="form-label">Full Names</label>
                <input type="text" class="form-control" v-model="form.names" required />
              </div>

              <!-- Sex -->
              <div class="mb-3">
                <label class="form-label">Sex</label>
                <select class="form-select" v-model="form.sex" required>
                  <option value="">Select</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>

              <!-- Date of Birth -->
              <div class="mb-3">
                <label class="form-label">Date of Birth</label>
                <input type="date" class="form-control" v-model="form.dob" required />
              </div>

              <!-- Address -->
              <div class="mb-3">
                <label class="form-label">Address</label>
                <input type="text" class="form-control" v-model="form.address" required />
              </div>

              <!-- Parent Phone -->
              <div class="mb-3">
                <label class="form-label">Parent Phone</label>
                <input type="tel" class="form-control" placeholder="07XXXXXXXX" v-model="form.parentphone"
                  required
                />
              </div>

              <!-- Trade -->
              <div class="mb-3">
                <label class="form-label">Trade</label>
                <select class="form-select" v-model="form.trade" required>
                  <option value="">Select Trade</option>
                  <option>Software Development</option>
                  <option>Computer Systems and Technology</option>
                  <option>Accounting</option>
                </select>
              </div>

              <!-- Level -->
              <div class="mb-3">
                <label class="form-label">Level</label>
                <select class="form-select" v-model="form.level" required>
                  <option value="">Select Level</option>
                  <option>L3</option>
                  <option>L4</option>
                  <option>L5</option>
                  <option>Y1ACC</option>
                  <option>Y2ACC</option>
                  <option>Y3ACC</option>
                </select>
              </div>

              <!-- Email -->
              <div class="mb-3">
                <label class="form-label">Email</label>
                <input type="email" class="form-control" v-model="form.email" required />
              </div>

              <!-- Password -->
              <div class="mb-4">
                <label class="form-label">Password</label>
                <input type="password" class="form-control" v-model="form.password" required />
              </div>

              <!-- Submit -->
              <div class="d-grid">
                <button type="submit" class="btn btn-success">
                  Register Student
                </button>
              </div>

            </form>
          </div>

          <div class="card-footer text-center text-muted">
            Student Registration System
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import axios from 'axios'

const form = reactive({
  names: '',
  sex: '',
  dob: '',
  address: '',
  parentphone: '',
  trade: '',
  level: '',
  email: '',
  password: ''
})

const submitForm = async () => {
  try {
    const response = await axios.post(
      'http://localhost:4000/students',
      form
    )

    alert('Student registered successfully!')
    console.log(response.data)

    // Reset form
    Object.keys(form).forEach(key => form[key] = '')

  } catch (error) {
    console.error(error)
    alert('Failed to register student')
  }
}
</script>