<script setup>
import NavBar from '../components/NavBar.vue'
import Player from '../components/PlayerBox.vue'
import SearchBar from '../components/SearchBar.vue'
</script>

<template>
  <NavBar />
  <div class="contenidor-start">
    <SearchBar />
  </div>
  <div class="contenidor-centrat">
    <Player />
    <Player />
    <Player />
    <Player />
    <Player />
    <Player />
    <Player />
    <Player />
    <Player />
    <Player />
    <Player />
    <Player />
    <Player />
    <Player />
    <Player />
    <Player />
  </div>
</template>

<style scoped>
.contenidor-centrat {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  gap: 80px;
}

.contenidor-start {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin-top: 80px;
  gap: 80px;
}
</style>
