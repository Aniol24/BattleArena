<script setup>
import NavBar from '../components/NavBar.vue'
import ShopNav from '../components/ShopNav.vue'
import AttackBox from '../components/AttacksShopBox.vue'
</script>

<template>
  <NavBar />
  <div class="contenidor-centrat">
    <AttackBox />
  </div>
  <div class="contenidor-nav">
    <ShopNav />
  </div>
</template>

<style scoped>



@keyframes fadeIn {
  from {opacity: 0;}
  to {opacity: 1;}
}

.modal-open {
  animation: fadeIn 0.5s;
}

.modal {
  display: none; 
  position: fixed; 
  z-index: 1; 
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  overflow: auto; 
  background-color: rgb(0,0,0); 
  background-color: rgba(0,0,0,0.4); 
}

.modal-content {
  border: #57473d 2px solid;
  border-radius: 25px;
  background-color: #dde5b6;
  margin: 15% auto; 
  padding: 20px;
  border: 1px solid #888;
  width: 500px; 
  font-family: 'DigitalDisco', sans-serif;
}

.contenidor-centrat {
  display: flex;
  justify-content: center;
  margin-top: 80px;
  gap: 80px;
}

.contenidor-nav {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
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
