<script setup>
import UserBox from '../components/UserBox.vue'
import AttacksBox from '../components/AttacksBox.vue'
import NavBar from '../components/NavBar.vue'
</script>

<template>
  <NavBar/>
  <div class="contenidor-centrat">
    <UserBox/>
    <AttacksBox />
  </div>
</template>

<style scoped>
  .contenidor-centrat{
    display: flex;
    justify-content: center;
    margin-top: 80px;
    gap: 80px;
  }

  @media (max-width: 768px) {
    .contenidor-centrat {
      flex-direction: column;
      align-items: center;
      gap: 40px;
      margin-top: 40px;
    }
  }
</style>
