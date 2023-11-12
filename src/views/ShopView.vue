<script setup>
import NavBar from '../components/NavBar.vue'
import ShopNav from '../components/ShopNav.vue'
import Attack from '../components/AttacksShopBox.vue'
</script>

<template>

    <NavBar/>
    <div class="contenidor-centrat">
      <Attack/>
    </div>
    <div class="contenidor-nav">
      <ShopNav/>
    </div>
    
</template>

<style scoped>

  .contenidor-centrat{
    display: flex;
    justify-content: center;
    margin-top: 80px;
    gap: 80px;
  }

  .contenidor-nav{
    display: flex;
    flex-direction: row;
    justify-content:space-around;
    
  }

</style>

<style>
  body{
    background-color: #ADC178;
  }
</style>