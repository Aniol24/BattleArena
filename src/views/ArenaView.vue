<script setup>
import NavBar from '../components/NavBar.vue'
import SearchBar from '../components/SearchBar.vue'
import Arenas from '../components/ArenasBox.vue'
</script>

<template>
  <div>
    <NavBar />
    <div class="contenidor-start">
      <SearchBar @search="handleSearch" />
      <button class="filter">Open Arenas</button>
      <button class="filter">Finished Arenas</button>
      <button class="filter">Time</button>
    </div>

    <div class="contenidor-centrat">
      <Arenas :searchQuery="searchQuery" />
    </div>
    <div class="create">
      <button id="createArenaBtn" class="button">+Create Arena</button>
    </div>
  </div>


  <div id="arenaModal" class="modal">
    <div class="modal-content">
      <span class="close">&times;</span>
      <h4 class="titol">CREATE ARENA</h4>
      <p v-if="createError" class="create-error">{{ createError }}</p>
      <p v-if="createSuccess" class="create-success">{{ createSuccess }}</p>
      <form @submit.prevent="createArena">
        <div class="input-group">
          <label for="game_id">Game ID</label>
          <input id="game_id" name="game_id" type="text" placeholder="Name..." />
        </div>

        <div class="input-group">
          <label for="size">Size</label>
          <input id="size" name="size" type="text" placeholder="2-10" />
        </div>

        <div class="input-group">
          <label for="hp_max">HP Max</label>
          <input id="hp_max" name="hp_max" type="text" placeholder="15 MIN" />
        </div>

        <button type="submit">Create</button>
      </form>
    </div>
  </div>

</template>

<script>

import * as store from '../store.js';

export default {

  data() {
    return {
      searchQuery: '',
      createSuccess: '',
      createError: ''
    };
  },
  mounted() {

    var modal = document.getElementById("arenaModal");
    var btn = document.getElementById("createArenaBtn");
    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
      modal.style.display = "block";
      modal.classList.add("modal-open"); 
    }

    span.onclick = function() {
      modal.style.display = "none";
      modal.classList.remove("modal-open"); 
    }

    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
        modal.classList.remove("modal-open");
      }
    }
  },
  methods: {
    handleSearch(search) {
      this.searchQuery = search;
    },

    createArena() {
      
      const requestBody = {
        game_ID: document.getElementById("game_id").value,
        size: parseInt(document.getElementById("size").value),
        HP_max: parseInt(document.getElementById("hp_max").value),
      };

      fetch('https://balandrau.salle.url.edu/i3/arenas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Bearer': store.getUserToken()
        },
        body: JSON.stringify(requestBody)
      })
      .then(response => {
        if (response.ok || response.status === 201) { 
          console.log(response);
          if (response.headers.get("Content-Length") === "0" || !response.headers.get("content-type")?.includes("application/json")) {
            this.createSuccess = "Arena created successfully!";
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
          this.createSuccess = "Arena created successfully!"; 
          this.createError = '';
          this.$router.push('/battlearena');
        }
      })
      .catch(error => {
        this.createError =  error.message;
        this.createSuccess = ''; 
      });
    },

  }
  
};

</script>

<style scoped>

.create-error {
  color: red;
  text-align: center;
  margin-bottom: 10px;
}

.create-success {
  color: green;
  text-align: center;
  margin-bottom: 10px;
}

.titol {
  font-family: 'Daydream', sans-serif;
  text-align: center;
  color: #507229;
}

.input-group {
  margin: auto;
  margin-right: 18px;
  margin-bottom: 20px;
}

button {
  font-family: 'Daydream', sans-serif;
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  background-color: #507229;
  color: #dde5b6;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease-in-out;
}

button:hover {
  background-color: #32471a;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid #a98467;

  border-radius: 6px;
  font-size: 14px;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

@keyframes fadeIn {
  from {opacity: 0;}
  to {opacity: 1;}
}

.modal-open {
  animation: fadeIn 0.5s;
}

.modal {
  display: none; 
  position: fixed; 
  z-index: 1; 
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  overflow: auto; 
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

.contenidor-centrat {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 80px;
}
.contenidor-start {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  gap: 10px;
}
.create {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
}
.button {
  font-family: 'Daydream', sans-serif;
  width: auto;
  padding: 10px;
  background-color: #6c584c;
  color: #dde5b6;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease-in-out;
}
.filter {
  font-family: 'Daydream', sans-serif;
  width: auto;
  margin-left: 10px;
  padding: 10px;
  background-color: #dde5b6;
  color: #6c584c;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease-in-out;
}
button:hover {
  background-color: #57473d;
}

.filter:hover {
  background-color: #f3ffb1;
}
</style>
