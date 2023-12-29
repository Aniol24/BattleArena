<script setup>
import RegisterBox from '../components/RegisterBox.vue'
</script>

<template>
  <div class="columns">
    <RegisterBox />
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
