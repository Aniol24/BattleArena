<script setup>
import LoginBox from '../components/LoginBox.vue'
</script>

<template>
  <div class="columns">
    <LoginBox />
  </div>
</template>

<style scoped>
.columns {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    height: 80vh;
}

</style>

<style>
body{
    background-color: #ADC178;
}
</style>
