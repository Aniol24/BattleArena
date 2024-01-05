<script setup>
import Attack from './AttackInGame.vue'
</script>

<template>
  <div class="box">
    <div class="capsa">
      <div class="line">
        <h5 class="titol">Attacks</h5>
        <p @click="leaveArena" style="cursor: pointer;">leave arena</p>
      </div>

      <div class="line">
        <Attack />
      </div>

      <div class="line">
        <Attack />
      </div>

      <div class="line">
        <Attack />
      </div>
    </div>

    <div class="">
      <div class="direction-line">
        <button class="image-button" @click="move( 'up' )">
          <img src="../assets/imgs/up.png" alt="Button Image" />
        </button>
      </div>

      <div class="direction-line">
        <button class="image-button" @click="move('left')">
          <img src="../assets/imgs/left.png" alt="Button Image" />
        </button>
        <button class="image-button" @click="move('right')">
          <img src="../assets/imgs/right.png" alt="Button Image" />
        </button>
      </div>

      <div class="direction-line">
        <button class="image-button" @click="move('down')">
          <img src="../assets/imgs/down.png" alt="Button Image" />
        </button>
      </div>
    </div>
  </div>
</template>


<script>

import * as store from '../store.js';

export default {

  props: {
    game_ID: String,
  },
  methods: {
    leaveArena(){

      fetch('https://balandrau.salle.url.edu/i3/arenas/'+ this.game_ID +'/play', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Bearer': store.getUserToken()
        }
      })
      .then(response => {
        if (response.ok || response.status === 201) { 
          console.log(response);
          if (response.headers.get("Content-Length") === "0" || !response.headers.get("content-type")?.includes("application/json")) {
            this.$router.push('/arena');
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
          this.createSuccess = "Arena created successfully!"; // Set success message for JSON response
        }
      })
      .catch(error => {
        this.createError =  error.message;
        this.createSuccess = ''; // Clear success message in case of error
      });

    },

    move(direction){
      const requestBody = {
        movement: direction,
      };
      fetch('https://balandrau.salle.url.edu/i3/arenas/move', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Bearer': store.getUserToken()
        },
        body: JSON.stringify(requestBody)
      })
      .then(response => {
        if (response.ok || response.status === 200) { 
          return response.json();
        } else {
          return response.json().then(err => {
            throw new Error(err.error.message); 
          });
        }
      })
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.log(error.message);
      });
    },

    
  }
}

</script>

<style scoped>
.box {
  font-family: 'DigitalDisco', sans-serif;
  width: 350px;
  padding: 20px;
  background-color: #a98467;
  border-radius: 30px;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);
}

.direction-line {
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  justify-content: space-around;
}

.line {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #283618;
}

.titol {
  font-family: 'Daydream', sans-serif;
  text-align: center;
  color: #283618;
}

.image-button img {
  width: 100%;
  height: 100%;
  display: block;
}

.image-button {
  width: 90px;
  height: 80px;
  padding: 0;
  border: none;
  cursor: pointer;
  background: transparent;
}

@media (max-width: 768px) {
  .box {
    font-family: 'DigitalDisco', sans-serif;
    width: 85%;
    padding: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    background-color: transparent;
    border-radius: 30px;
    box-shadow: 0 0 0px rgba(0, 0, 0, 0.5);
  }

  .line {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    color: #283618;
  }
  .image-button {
    width: 90px;
    height: 80px;
    padding: 0;
    border: none;
    cursor: pointer;
    background: transparent;
  }

  .capsa {
    margin-right: 20px;
  }

  p {
    margin-left: 40px;
  }
}
</style>
