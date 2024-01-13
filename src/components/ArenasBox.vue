<script setup>
import Arena from './ArenaComponent.vue'
</script>

<template>
  <div class="box">
    <div class="caixa-atacs">
      <Arena v-for="arena in filteredArenas" :key="arena.id" 
        :name="arena.game_ID"
        :size="arena.size"
        :creation_date="arena.creation_date"
        :finished="arena.finished" 
        :HP_max="arena.HP_max"
        :start="arena.start"
        :players_games="arena.players_games"/>
    </div>
  </div>
</template>

<script>

import * as store from '../store.js';

export default {
  props: {
    searchQuery: String,
    openArenas: Boolean
  },
  
  data() {
    return {
      userData: store.getUserData(),
      arenas: [] 
    };
  },
  mounted() {
    this.getArenas();
  },
  computed: {
    filteredArenas() {
      let arenas = this.arenas;

      if (this.searchQuery !== '') {
        arenas = arenas.filter(arena =>
          arena.game_ID.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }

      if (this.openArenas) {
        arenas = arenas.filter(arena => 
          !arena.finished && !arena.start
        );
      }

      return arenas;
    }
  },
  methods: {
    getArenas() {
      fetch('https://balandrau.salle.url.edu/i3/arenas', {
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
        console.info(data);
        this.arenas = data;
      })
      .catch(error => {
        this.loginError = 'Error: ' + error.message; 
      });
    }
  }
};
</script>


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
  min-height: 500px;
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
