<script setup>
import UserBox from '../components/UserBox.vue'
import NavBar from '../components/NavBar.vue'
import GamesFinishedBox from '../components/GamesFinishedBox.vue';
</script>

<template>

    <NavBar/>
    <div class="contenidor-centrat">
      <UserBox/>
      <GamesFinishedBox/>
    </div>
</template>

<style scoped>

  .contenidor-centrat{
    display: flex;
    justify-content: center;
    margin-top: 80px;
    gap: 80px;
  }

</style>

<style>
  body{
    background-color: #ADC178;
  }
</style>