<template>
  <div class="arena">
    <div class="contingut-atac">
      <h4 class="title">{{ name }}</h4>

      <div class="stats-atac">
        <h4>Health: {{ HP_max }} HP</h4>
        <h4>{{ players_games[0] ? players_games[0].player_ID : '???' }} VS {{ players_games[1] ? players_games[1].player_ID : '???' }}</h4>
      </div>

      <div class="stats-atac">
        <h4>Size: {{ size }}</h4>
        <h4>{{ finished ? 'Started' : 'Not Started' }}</h4>
      </div>

      <div>
        <button  class="btn" @click="joinArena">Join</button>
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
      // ... existing data properties
      errorMessage: '', // New property for error message
      errorMessageVisible: false,
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

    this.errorMessageVisible = true; // Add a new data property 'errorMessageVisible' to control the visibility of the flyout

    setTimeout(() => {
      this.hideErrorFlyout();
    }, 2000);
  },

  hideErrorFlyout() {

    this.errorMessageVisible = false; // Update the visibility control
  }

  }
};

</script>

<style scoped>

.flyout {
    position: fixed; /* Keeps the flyout in the same place even when scrolling */
    top: 10%;       /* Position the top edge of the element in the middle of the screen vertically */
    left: 50%;      /* Position the left edge of the element in the middle of the screen horizontally */
    transform: translate(-50%, -50%); /* Shift the element left and up by half its width and height to center it */
    background-color: red;
    color: white;
    padding: 10px;
    border-radius: 5px;
    z-index: 1000;  /* Ensures the flyout appears above other content; adjust as necessary */
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
  min-width: 200px;
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
