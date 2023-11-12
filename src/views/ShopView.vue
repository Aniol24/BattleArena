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

  @media (max-width: 768px) {
    .contenidor-centrat {
      flex-direction: column;
      margin-top: 40px;
      gap: 40px;
    }

    .contenidor-nav {
      flex-direction: column;
    }

    body {
      font-size: 14px;
    }
  }

</style>

<style>
  body{
    background-color: #ADC178;
  }
</style>