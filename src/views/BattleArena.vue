<script setup>
import Arena from '../components/BattleArenaComponent.vue'
import GamePad from '../components/GamePad.vue'
</script>

<template>
  <div class="display">
    <div class="arena-container">
      <h2 class="arena-title">{{ game_ID }}</h2>
      <Arena 
      :size="size" 
      @winner="handleWinner"/>
    </div>
    <GamePad :game_ID="game_ID" />
  </div>

  <div v-if="showModal" class="modal">
    <div class="modal-content">
      <h3>Winner</h3>
      <p>{{ winnerName }}</p>
      <button class="btn" @click="closeModal">OK</button>
    </div>
  </div>
</template>

<script>

import * as store from '../store.js';

export default {
  data() {
    return {
      game_ID: '', 
      showModal: false,
      winnerName: '',
      size: 0,
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
        this.size = data[0].size;
      })
      .catch(error => {
        console.log(error);
      });
    },
    handleWinner(playerId) {
      console.log("Winner ID:", playerId);
      this.winnerName = playerId;
      this.showModal = true;
    },
    closeModal() {

      this.$router.push('/arena');
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

.modal-open {
  animation: fadeIn 0.5s;
}

.btn {
  font-family: 'Daydream', sans-serif;
  width: 150px;
  padding: 10px;
  background-color: #6c584c;
  color: #dde5b6;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.8s ease-in-out;
}

.btn:hover {
  background-color: #57473d;
}

.modal {
  display: block;  
  position: fixed; 
  z-index: 1; 
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
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
