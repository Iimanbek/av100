<script>
</script>

<template>
  <div class="main">
    <v-btn @click="this.$router.push('/login')" color="green">Login</v-btn>
    <v-btn @click="this.$router.push('/registration')" color="green">Restration</v-btn>
  </div>
</template>
<style>
.main {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
}
</style>