<script setup>
import NavBar from '../components/NavBar.vue'
import CreateAttack from '../components/CreateAttackBox.vue'
</script>

<template>
  <NavBar />
  <h3 class="title">Create Attack</h3>
  <div class="contenidor-centrat">
    <CreateAttack />
  </div>
</template>

<style scoped>
.contenidor-centrat {
  display: flex;
  justify-content: center;
  margin-top: 80px;
  gap: 80px;
}
</style>
