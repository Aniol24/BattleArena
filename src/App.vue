<script setup>
//import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  
  <nav>
    <RouterLink to="/">Login</RouterLink>
    <RouterLink to="/register">register</RouterLink>
    <RouterLink to="/profile">Profile</RouterLink>
    <RouterLink to="/players">Players</RouterLink>
  </nav>

  <RouterView />
  
</template>

<style scoped></style>