<script setup>
import NavBar from '../components/NavBar.vue'
import Player from '../components/PlayerBox.vue'
import SearchBar from '../components/SearchBar.vue'
</script>

<template>
  <NavBar />
  <div class="contenidor-start">
    <SearchBar @search="handleSearch" />
  </div>
  <div class="contenidor-centrat">
    <Player v-for="player in filteredPlayers" :key="player.id"
        :name="player.player_ID"
        :img="player.img"
        :xp="player.xp"
        :level="player.level"
        :coins="player.coins" />
    
  </div>
</template>

<script>

import * as store from '../store.js';

export default {

  data() {
    return {
      userData: store.getUserData(),
      players: [],
      searchQuery: ''
    };
  },
  computed: {
    filteredPlayers() {
    return this.players.map(player => {
      const cleanedName = player.player_ID.replace(/[!*#@{}:+.,_%([$-;=?)\]]/g, ''); // Replace invalid characters including "]"
      return {
        ...player,
        player_ID: cleanedName
      };
    }).filter(player => 
      player.player_ID.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
  },
  mounted() {
    this.getPlayers();
  },
  methods: {

    getPlayers() {
      fetch('https://balandrau.salle.url.edu/i3/players', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Bearer':store.getUserToken()
        },
      })
      .then(response => {
        if (!response.ok) {
          return response.json().then(err => {
            throw new Error(err.error.message); 
          });
        } else {
          return response.json();
        }
      })  
      .then(data => {
        this.players = data;
        console.log(this.players);
      })
      .catch(error => {
        this.loginError = 'Login Failed: ' + error.message; 
      });
    },
    handleSearch(query) {
      this.searchQuery = query;
    }

  }

}

</script>


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
