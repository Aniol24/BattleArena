<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <!--<nav>
    <RouterLink to="/">Login </RouterLink>
    <RouterLink to="/register">register </RouterLink>
    <RouterLink to="/profile">Profile </RouterLink>
    <RouterLink to="/players">Players </RouterLink>
    <RouterLink to="/playerInfo">Player Info </RouterLink>
    <RouterLink to="/shop">Shop </RouterLink>
    <RouterLink to="/sellAttack">Sell Attack </RouterLink>
    <RouterLink to="/createAttack">Create Attack </RouterLink>
    <RouterLink to="/arena">Arena </RouterLink>
    <RouterLink to="/gameRecord">Game Record </RouterLink>
    <RouterLink to="/battlearena">battlearena</RouterLink>
  </nav>-->

  <RouterView />
</template>

<style>
body {
  background-color: #adc178;
}
</style>
