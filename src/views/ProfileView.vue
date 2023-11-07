<script setup>
import UserBox from '../components/UserBox.vue'
import AttacksBox from '../components/AttacksBox.vue'
import NavBar from '../components/NavBar.vue'
</script>

<template>

  <NavBar/>
  <div class="contenidor-centrat">
    <AttacksBox />
    <UserBox/>
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