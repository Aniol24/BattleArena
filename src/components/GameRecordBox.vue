<script setup>
import Team from './TeamComponent.vue'
</script>

<template>

    <div class="box">
        <h3 class="title">Arena Name</h3>
        
        <div class="caixa-atacs">
            <Team/>
            <Team/>
        </div>
    </div>
</template>

<style scoped>
  .title {
    font-family: 'Daydream';
  }

  .box {
    font-family: 'DigitalDisco', sans-serif;
    width: 1000px; /* Ancho predeterminado */
    padding: 20px;
    background-color: #DDE5B6;
    border-radius: 30px;
    box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);
  }

  .caixa-atacs {
    display: flex;
    flex-direction: row;
    max-height: 390px;
    overflow-y: auto;
    gap: 30px; 
  }  
  @media (max-width: 768px) {
    .box {
      width: auto;
      margin: 10px; 
    }
  }
</style>
