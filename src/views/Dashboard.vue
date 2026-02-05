<template>
  <div class="page">
    <h2>Deputy School Manager Dashboard</h2>

    <div class="cards">
      <div class="card">Registered Students</div>
      <div class="card">Registered Trainers</div>
      <div class="card">Uploaded Documents</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dashboard"
};
</script>

<style scoped>
.cards {
  display: flex;
  gap: 20px;
}
.card {
  background: #f4f4f4;
  padding: 20px;
  border-radius: 6px;
  width: 200px;
  text-align: center;
}
</style>
