<template>
  <div class="arena" :style="{ gridTemplateRows: gridRows, gridTemplateColumns: gridColumns }">
    <div
      v-for="(cell, index) in totalCells"
      :key="index"
      class="cell"
      :class="getSpriteClass(index)"
    >
      <div v-if="isPlayerCell(index)" class="direction-ball"></div>
    </div>
  </div>

  <div class="health-display">
    <div>Blue PLayer Health: {{ player_1.health }}</div>
  </div>
  <div class="health-display">
    <div v-if="player_2_joined">Green Player Health: {{ player_2.health }}</div>
  </div>
  
</template>


<script>
import * as store from '../store.js';


export default {
  
  mounted() {
    this.getGame();
    this.gameInterval = setInterval(() => {
      if(this.finished) clearInterval(this.gameInterval);
      this.getGame();
      this.getGameByName();
    }, 5000); 
  },
  props: {
    size: Number,
  },
  data() {
    return {
      rows: 0,
      columns: 0,
      game_ID: '',
      finished: false,
      player_1: {x: 0, y: 0, direction: '', health: 0}, 
      player_2: {x: 0, y: 0, direction: '', health: 0}, 
      player_2_joined: false,
    }
  },
  computed: {
    
    totalCells() {
      return this.rows * this.columns
    },
    gridRows() {
      return `repeat(${this.rows}, 1fr)`
    },
    gridColumns() {
      return `repeat(${this.columns}, 1fr)`
    },
    cellSize() {
      return 600 / this.rows
    }
  },
  methods: {
    getSpriteClass(index) {
      const rowIndex = Math.floor(index / this.columns);
      const columnIndex = index % this.columns;
      const isTopRow = rowIndex === 0;
      const isBottomRow = rowIndex === this.rows - 1;
      const isLeftColumn = columnIndex === 0;
      const isRightColumn = columnIndex === this.columns - 1;

      const player1Index = this.player_1.y * this.columns + this.player_1.x;
      if (index === player1Index) {
        return `player1-position player1-${this.player_1.direction}`;
      }

      // Only assign class for player 2 if player_2_joined is true
      if (this.player_2_joined) {
        const player2Index = this.player_2.y * this.columns + this.player_2.x;
        if (index === player2Index) {
          return `player2-position player2-${this.player_2.direction}`;
        }
      }

      // Rest of the sprite classes
      if (isTopRow && isLeftColumn) return 'top-left-corner';
      if (isTopRow && isRightColumn) return 'top-right-corner';
      if (isBottomRow && isLeftColumn) return 'bottom-left-corner';
      if (isBottomRow && isRightColumn) return 'bottom-right-corner';
      if (isTopRow) return 'horizontal-border-top';
      if (isBottomRow) return 'horizontal-border-bot';
      if (isLeftColumn) return 'vertical-border-esq';
      if (isRightColumn) return 'vertical-border-dre';

      return 'middle-sprite';
    },

    getGame(){
      fetch('https://balandrau.salle.url.edu/i3/players/arenas/current', {
        method: 'GET',
        headers: {
          'Bearer': store.getUserToken(),
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        this.game_ID = data[0].game_ID; 
        this.rows = data[0].size + 2;
        this.columns = data[0].size + 2;
        this.player_1.x = data[0].players_games[0].x_game + 1;
        this.player_1.y = data[0].players_games[0].y_game + 1;
        this.player_1.direction = data[0].players_games[0].direction;
        this.player_1.health = data[0].players_games[0].hp;
        
        if (data[0].players_games.length > 1) {
          this.player_2.x = data[0].players_games[1].x_game + 1;
          this.player_2.y = data[0].players_games[1].y_game + 1;
          this.player_2.direction = data[0].players_games[1].direction;
          this.player_2_joined = true; 
          this.player_2.health = data[0].players_games[1].hp;
        } else {
          this.player_2_joined = false; 
        }
      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      });
    },

    isPlayerCell(index) {
      const player1Index = this.player_1.y * this.columns + this.player_1.x;
      const player2Index = this.player_2.y * this.columns + this.player_2.x;
      return index === player1Index || (this.player_2_joined && index === player2Index);
    },

    getLogs(){
      fetch('https://balandrau.salle.url.edu/i3/arenas/test arena 12/logs', {
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
        //this.attacks = data.filter(attack => attack.equipped);
        console.log(data); 
      })
      .catch(error => {
        this.loginError = 'Login Failed: ' + error.message; 
      });
    },

    getGameByName(){
      fetch('https://balandrau.salle.url.edu/i3/arenas/'+ this.game_ID, {
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
        console.log(data); 
        this.finished = data.finished;
        if(this.finished){
          if(data.players_games[0].winner){
            this.$emit('winner', data.players_games[0].player_ID);
          } else {
            this.$emit('winner', data.players_games[1].player_ID);
          }
        }
      })
      .catch(error => {
        this.loginError = 'Login Failed: ' + error.message; 
      });
    }


  },
  beforeUnmount() {
    clearInterval(this.gameInterval);
  },

}
</script>

<style scoped>

.health-display {
  display: flex;
  font-family: DigitalDisco, sans-serif;
  justify-content: space-around;
  margin-top: 20px;
}

.direction-ball {
  position: absolute;
  width: 10px; 
  height: 10px; 
  background-color: red; 
  border-radius: 50%;
}

.player1-up .direction-ball { top: -5px; left: 50%; transform: translateX(-50%); }
.player1-down .direction-ball { bottom: -5px; left: 50%; transform: translateX(-50%); }
.player1-left .direction-ball { left: -5px; top: 50%; transform: translateY(-50%); }
.player1-right .direction-ball { right: -5px; top: 50%; transform: translateY(-50%); }

.player2-up .direction-ball { top: -5px; left: 50%; transform: translateX(-50%); }
.player2-down .direction-ball { bottom: -5px; left: 50%; transform: translateX(-50%); }
.player2-left .direction-ball { left: -5px; top: 50%; transform: translateY(-50%); }
.player2-right .direction-ball { right: -5px; top: 50%; transform: translateY(-50%); }

.player1-position, .player2-position {
  position: relative;
  border-radius: 50%; 
}

.player1-position {
  background-color: blue; 
}

.player2-position {
  background-color: green; 
}

.arena {
  display: grid;
  width: 600px;
  height: 600px;
  grid-template-rows: repeat(var(--rows), 1fr);
  grid-template-columns: repeat(var(--columns), 1fr);
  overflow: auto;
}

.cell {
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--cellSize) px;
  height: var(--cellSize) px;
  margin: 1px;
  background-size: cover;
  background-position: center;
}

.middle-sprite {
  background-image: url('../assets/imgs/terra.png');
}

.top-left-corner {
  background-image: url('../assets/imgs/top-esq.png');
}

.top-right-corner {
  background-image: url('../assets/imgs/top-dre.png');
}

.bottom-left-corner {
  background-image: url('../assets/imgs/baix-esq.png');
}

.bottom-right-corner {
  background-image: url('../assets/imgs/baix-dre.png');
}

.horizontal-border-top {
  background-image: url('../assets/imgs/top.png');
}
.horizontal-border-bot {
  background-image: url('../assets/imgs/baix.png');
}

.vertical-border-esq {
  background-image: url('../assets/imgs/esq.png');
}
.vertical-border-dre {
  background-image: url('../assets/imgs/dre.png');
}

@media (max-width: 768px) {
  .arena {
    display: grid;
    width: 100%;
    height: 350px;
    grid-template-rows: repeat(var(--rows), 1fr);
    grid-template-columns: repeat(var(--columns), 1fr);
    overflow: auto;
  }
}
</style>
