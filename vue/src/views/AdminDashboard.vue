<template>
  <div class="admin-dashboard">
    <h1>Admin Dashboard</h1>
    <p>Welcome, {{ user.username }}!</p>
    <p>This area is for administrative tasks.</p>
  </div>
</template>

<script>
export default {
  name: "admin-dashboard",
  computed: {
    user() {
      return this.$store.state.user;
    }
  }
};
</script>

<style scoped>
.admin-dashboard {
  padding: 20px;
}
</style>
