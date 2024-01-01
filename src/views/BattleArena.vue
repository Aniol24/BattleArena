<script setup>
import Arena from '../components/BattleArenaComponent.vue'
import GamePad from '../components/GamePad.vue'
</script>

<template>
  <div class="display">
    <div class="arena-container">
      <h2 class="arena-title">Arena Name</h2>
      <Arena />
    </div>
    <GamePad :game_ID="game_ID" />
  </div>
</template>

<script>

import * as store from '../store.js';

export default {
  data() {
    return {
      game_ID: '', 
    };
  },
  mounted(){
    this.getGame();
  },
  methods:{
    getGame(){
      fetch('https://balandrau.salle.url.edu/i3/players/arenas/current', {
        method: 'GET',
        headers: {
          'Bearer':store.getUserToken(),
          'Content-Type': 'application/json'
        }
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
        this.game_ID = data[0].game_ID; 
        console.log(data[0].game_ID);
      })
      .catch(error => {
        console.log(error);
      });
    }
  }
}
</script>


<style scoped>
.display {
  display: flex;
  margin-top: 5%;
  flex-direction: row;
  justify-content: space-evenly;
}

.arena-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.arena-title {
  text-align: center;
  margin-bottom: 10px;
  font-family: 'Daydream';
  color: #283618;
}

@media (max-width: 768px) {
  .display {
    flex-direction: column;
    justify-content: center;
  }

  .arena-title {
    font-family: 'Daydream';
    color: #283618;
  }
}
</style>
