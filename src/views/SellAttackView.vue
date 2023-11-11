<script setup>
import NavBar from '../components/NavBar.vue'
import Attack from '../components/SellAttackBox.vue'
</script>

<template>

    <NavBar/>
    <h3 class="title">Personal Attacks (P.A)</h3>
    <div class="contenidor-centrat">
      <Attack/>
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