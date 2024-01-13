<template>
  <div class="arena">
    <div class="contingut-atac">
      <h4 class="title">{{ name }}</h4>

      <div class="stats-atac">
        <h4>Health: {{ HP_max }} HP</h4>
        <h4>{{  players_games ? players_games[0] ? players_games[0].player_ID : '???' : ""}} VS {{ players_games ? players_games[1] ? players_games[1].player_ID : '???' : ""}}</h4>
      </div>

      <div class="stats-atac-2">
        <h4>Size: {{ size }}</h4>
        <h4>{{ finished ? 'Finished' : 'Not Finished' }}</h4>
      </div>

      <div>
        <button  class="btn" @click="joinArena">Join</button>
      </div>
      <div v-if="finished">
      <button class="btn log-btn" @click="showLog">Log</button>
    </div>
    </div>
  </div>

  <div v-if="isModalVisible" class="modal">
    <div class="modal-content">
      <span class="close" @click="closeModal">&times;</span>
      <h4 class="titol">LOGS</h4>
      <div class="logs">
        <div v-for="log in logs" :key="log">
          <h4>{{'- ' + log.description }}</h4>
        </div>
      </div>      
    </div>
  </div>

  <div v-if="errorMessageVisible" class="flyout">
    {{ errorMessage }}
  </div>
</template>

<script>

import * as store from '../store.js';

export default {
  props: {
    name: String,
    size: Number,
    creation_date: String,
    finished: Boolean,
    HP_max: Number,
    start: Boolean,
    players_games: Array
  },
  data() {
    return {
      logs: [],
      errorMessage: '', 
      errorMessageVisible: false,
      isModalVisible: false,
    };
  },
  methods: {

    joinArena(){
      fetch('https://balandrau.salle.url.edu/i3/arenas/' + this.name + '/play', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Bearer': store.getUserToken()
        }
      })
      .then(response => {
        if (response.ok || response.status === 200) { 
          console.log(response);
          if (response.headers.get("Content-Length") === "0" || !response.headers.get("content-type")?.includes("application/json")) {
            this.$router.push('/battlearena');
            return;
          } else {
            return response.json();
          }
        } else {
          return response.json().then(err => {
            throw new Error(err.error.message); 
          });
        }
      })
      .then(data => {
        if (data) {
          console.log(data);
          this.createError = '';
          this.$router.push('/battlearena');
        }
      })
      .catch(error => {
        this.errorMessage = error.message;
        this.showErrorFlyout(); // Call method to display the flyout
      });
    },
    showErrorFlyout() {

    this.errorMessageVisible = true; 

    setTimeout(() => {
      this.hideErrorFlyout();
    }, 2000);

    
    },

    hideErrorFlyout() {

      this.errorMessageVisible = false; 
    },

    showLog() {

      this.getGameLogs();

      this.isModalVisible = true;
    },

    closeModal() {
      this.isModalVisible = false;
    },

    getGameLogs(){
      fetch('https://balandrau.salle.url.edu/i3/arenas/' + this.name + '/logs', {
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
        this.logs = data;
      })
      .catch(error => {
        this.loginError = 'Error: ' + error.message; 
      });
    }

  }
};

</script>

<style scoped>

.titol {
  font-family: 'Daydream', sans-serif;
  text-align: center;
  color: #283618;
}

.logs {
  max-height: 300px; /* Set a maximum height for the attacks list */
  overflow-y: auto; /* Enable vertical scroll if content exceeds max-height */
  margin-bottom: 20px;
  margin-top: 20px; /* Optional: Add some margin at the bottom */
}

.logs::-webkit-scrollbar {
  width: 10px;
}

.logs::-webkit-scrollbar-track {
  background: #dde5b6;
  border-radius: 10px;
}

.logs::-webkit-scrollbar-thumb {
  background-color: #dde5b6;
  border-radius: 20px;
  border: 3px solid #507229;
}

.logs::-webkit-scrollbar-thumb:hover {
  background-color: #dde5b6;
}

.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}


.modal-content {
  border: #57473d 2px solid;
  border-radius: 25px;
  background-color: #dde5b6;
  margin: 15% auto; 
  padding: 20px;
  border: 1px solid #888;
  width: 550px; 
  font-family: 'DigitalDisco', sans-serif;
}

.modal-open {
  animation: fadeIn 0.5s;
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

.flyout {
    position: fixed;
    top: 10%;       
    left: 50%;      
    transform: translate(-50%, -50%);
    background-color: red;
    color: white;
    padding: 10px;
    border-radius: 5px;
    z-index: 1000;  
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
  margin-right: 10px;
  transition: background-color 0.8s ease-in-out;
}

.btn:hover {
  background-color: #57473d;
}

.title {
  font-family: 'Daydream';
  margin-left: 50px;
  min-width: 400px;
}

.arena {
  font-family: 'DigitalDisco', sans-serif;
  width: auto;
  height: auto;
  padding: 10px;
  background-color: #a98467;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  margin-top: 10px;
}

.stats-atac{
  min-width: 300px;
}

.stats-atac-2{
  min-width: 150px;
}

.contingut-atac {
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
}

.stats-atack {
  display: flex;
  flex-direction: column;
  justify-content: center;
}



@media (max-width: 768px) {
  .contingut-atac {
    display: flex;
    flex-direction: column;
  }

  .stats-atack {
    display: flex;
    flex-direction: row;
  }
}
</style>
