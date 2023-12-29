<script setup>
import Arena from './ArenaComponent.vue'
</script>

<template>
  <div class="box">
    <div class="caixa-atacs">
      <Arena />
      <Arena />
      <Arena />
      <Arena />
    </div>
  </div>
</template>

<style scoped>
.box {
  font-family: 'DigitalDisco', sans-serif;
  width: 70%;
  padding: 20px;
  background-color: #dde5b6;
  border-radius: 30px;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);
}

.caixa-atacs {
  display: flex;
  flex-direction: column;
  max-height: 500px;
  overflow-y: auto;
}

.caixa-atacs::-webkit-scrollbar {
  width: 10px;
}

.caixa-atacs::-webkit-scrollbar-track {
  background: #dde5b6;
  border-radius: 10px;
}

.caixa-atacs::-webkit-scrollbar-thumb {
  background-color: #dde5b6;
  border-radius: 20px;
  border: 3px solid #507229;
}

.caixa-atacs::-webkit-scrollbar-thumb:hover {
  background-color: #dde5b6;
}

@media (max-width: 768px) {
  .box {
    width: 85%;
  }
}
</style>
