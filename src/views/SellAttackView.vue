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
    margin-top: 80px;
    gap: 80px;
  }

</style>

<style>
  body{
    background-color: #ADC178;
  }
</style>