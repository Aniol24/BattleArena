<script setup>
import { RouterLink } from 'vue-router';

//import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  
  <nav>
    <RouterLink to="/">Login</RouterLink>
    <RouterLink to="/register">register</RouterLink>
    <RouterLink to="/profile">Profile</RouterLink>
    <RouterLink to="/players">Players</RouterLink>
    <RouterLink to="/playerInfo">Player Info</RouterLink>"
    <RouterLink to="/shop">Shop</RouterLink>
    <RouterLink to="/sellAttack">Sell Attack</RouterLink>
    <RouterLink to="/createAttack">Create Attack</RouterLink>
  </nav>

  <RouterView />
  
</template>

<style scoped></style>