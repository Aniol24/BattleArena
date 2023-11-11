<script setup>
import NavBar from '../components/NavBar.vue'
import ShopNav from '../components/ShopNav.vue'
import Attack from '../components/AttacksShopBox.vue'
import UserBox from '../components/UserBox.vue'
</script>

<template>

    <NavBar/>
    <ShopNav/>
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