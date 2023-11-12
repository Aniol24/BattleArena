<script setup>
import NavBar from '../components/NavBar.vue'
import AttacksBox from '../components/SellAttackBox.vue'
</script>

<template>

    <NavBar/>
    <div class="contenidor-centrat">
      <AttacksBox/>
    </div>
</template>

<style scoped>

  .contenidor-centrat{
    display: flex;
    justify-content: center;
    margin-top: 60px;
    gap: 80px;
  }

  @media (max-width: 768px) {
    .contenidor-centrat{
      width: 100%;
    }
  }

</style>

<style>
  body{
    background-color: #ADC178;
  }
</style>