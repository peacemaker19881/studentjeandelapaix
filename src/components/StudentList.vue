<template>
  <div class="container mt-5">
    <div class="card shadow border-0">
      <div class="card-header bg-dark text-white text-center">
        <h5 class="mb-0">Registered Students</h5>
      </div>

      <div class="card-body table-responsive">
        <table class="table table-bordered table-hover align-middle">
          <thead class="table-primary">
            <tr>
              <th>#</th>
              <th>Names</th>
              <th>Sex</th>
              <th>DOB</th>
              <th>Trade</th>
              <th>Level</th>
              <th>Phone</th>
              <th>Email</th>
              <th width="160">Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="(student, index) in students" :key="student.id">
              <td>{{ index + 1 }}</td>

              <td v-if="editId !== student.id">{{ student.names }}</td>
              <td v-else>
                <input class="form-control" v-model="editForm.names" />
              </td>

              <td v-if="editId !== student.id">{{ student.sex }}</td>
              <td v-else>
                <select class="form-select" v-model="editForm.sex">
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </td>

              <td v-if="editId !== student.id">{{ student.dob }}</td>
              <td v-else>
                <input type="date" class="form-control" v-model="editForm.dob" />
              </td>

              <td v-if="editId !== student.id">{{ student.trade }}</td>
              <td v-else>
                <input class="form-control" v-model="editForm.trade" />
              </td>

              <td v-if="editId !== student.id">{{ student.level }}</td>
              <td v-else>
                <input class="form-control" v-model="editForm.level" />
              </td>

              <td v-if="editId !== student.id">{{ student.parentphone }}</td>
              <td v-else>
                <input class="form-control" v-model="editForm.parentphone" />
              </td>

              <td v-if="editId !== student.id">{{ student.email }}</td>
              <td v-else>
                <input class="form-control" v-model="editForm.email" />
              </td>

              <td class="text-center">
                <button
                  v-if="editId !== student.id"
                  class="btn btn-warning btn-sm me-1"
                  @click="startEdit(student)"
                >
                  Edit
                </button>

                <button
                  v-if="editId === student.id"
                  class="btn btn-success btn-sm me-1"
                  @click="updateStudent"
                >
                  Save
                </button>

                <button
                  v-if="editId === student.id"
                  class="btn btn-secondary btn-sm me-1"
                  @click="cancelEdit"
                >
                  Cancel
                </button>

                <button
                  class="btn btn-danger btn-sm"
                  @click="deleteStudent(student.id)"
                >
                  Delete
                </button>
              </td>
            </tr>

            <tr v-if="students.length === 0">
              <td colspan="9" class="text-center text-muted">
                No students registered
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import axios from 'axios'

const students = ref([])
const editId = ref(null)

const editForm = reactive({
  names: '',
  sex: '',
  dob: '',
  trade: '',
  level: '',
  parentphone: '',
  email: ''
})

const API = 'http://localhost:4000/students'

const loadStudents = async () => {
  const res = await axios.get(API)
  students.value = res.data
}

const startEdit = (student) => {
  editId.value = student.id
  Object.assign(editForm, student)
}

const cancelEdit = () => {
  editId.value = null
}

const updateStudent = async () => {
  await axios.put(`${API}/${editId.value}`, editForm)
  editId.value = null
  loadStudents()
  alert('Amakuru yahinduwe neza')
}

const deleteStudent = async (id) => {
  if (confirm('Are you sure you want to delete?')) {
    await axios.delete(`${API}/${id}`)
    loadStudents()
    alert('Urakoze gusiba amakuru mu bubiko')
  }
}

onMounted(loadStudents)
</script>