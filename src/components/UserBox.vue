<script setup>

</script>

<template>
  <div class="box">
    <div class="contenidor-centrat">
      <h4 id="id">{{ userData.username }}</h4>
    </div>

    <div class="contenidor-centrat">
      <div class="column">
        <h4 class="">{{userData.level }}</h4>
        <h4 class="">lvl</h4>
      </div>
      

      <div class="foto-perfil">
        <img :src="userData.image" alt="Foto de perfil" />
      </div>
      
      <div class="column">
        <h4 class="">{{ userData.coins }}</h4>
        <h4 class="">$$</h4>
      </div>
      
    </div>

    <div class="contenidor-centrat">
      <div class="experience-bar">
        <div class="progress" :style="{ width: userData.xp + '%' }">
          <span>{{ userData.xp }}</span>
        </div>
      </div>
    </div>

    <div class="contenidor-centrat">
      <div class="container-files">
        <h4>Games Won</h4>
        <h4>{{ userData.games_won }}</h4>
      </div>

      <div class="container-files">
        <h4>Games Lost</h4>
        <h4>{{ userData.games_lost }}</h4>
      </div>
    </div>

    <div class="contenidor-centrat">
      <a href="" @click.prevent="deletePlayer">
        <p class="delete-link">Delete player</p>
      </a>
    </div>

  </div>
</template>

<script>
import * as store from '../store.js';

export default {
  data() {
    let initialUserData = store.getUserData();
    // Initialize games_won and games_lost if they don't exist in userData
    initialUserData.games_won = initialUserData.games_won || 0;
    initialUserData.games_lost = initialUserData.games_lost || 0;
    return {
      userData: store.getUserData(),
      games_won: 0,
      games_lost: 0
    };
  },
  mounted() {
    this.getStatistics();
  },
  methods: {
    deletePlayer() {
      fetch('https://balandrau.salle.url.edu/i3/players', {
        method: 'DELETE',
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
          this.$router.push('/');
          return response.json();
        }
      })
      .then(data => {
        if(data.message) {
          console.log('Player deleted:', data.message);
          store.setUserData({ username: '', token: '', image: '', coins: '', level: '', xp: '' });
          this.$router.push('/');

        } else {
          this.loginError = 'Error: ' + data.message;
        }
      })
      .catch(error => {
        this.loginError = error.message;
      });
    },

    getStatistics(){
      fetch('https://balandrau.salle.url.edu/i3/players/' + this.userData.username + "/statistics", {
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
          console.log(response.json());
          return response.json();
        }
      })
      .then(data => {
        
        this.userData.games_won = data.games_won;
        this.userData.games_lost = data.games_lost;
      })
      .catch(error => {
        console.error("Error fetching statistics:", error.message);
      });
    }
  }
};
</script>

<style scoped>

.column {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:start; 
  flex-wrap: wrap;
  min-width: 50px;
  max-width: 50px;
}

.column h4 {
  margin-top: 0;
  margin-bottom: 0;
}

.column h4 + h4 {
  margin-top: 5px; /* Adjust the value as needed */
}

.delete-link {
  text-align: center;
  color: #507229;
}

.foto-perfil {
  width: 130px;
  height: 130px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  border : 2px solid black;
}

.container-files {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.container-files h4 {
  margin: 5px;
  padding: 0;
}

.foto-perfil img {
  width: 100%;
  height: 100%; 
  object-fit: cover; 
  border-radius: 50%; 
}

.box {
  font-family: 'DigitalDisco', sans-serif;
  width: 300px;
  padding: 20px;
  background-color: #dde5b6;
  border-radius: 30px;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);
  max-height: max-content;
}

.experience-bar {
  width: 100%;
  height: 30px;
  background-color: #a98467;
  border-radius: 15px;
  overflow: hidden;
  margin: 10px 0;
}

.progress {
  height: 100%;
  background-color: #adc178;
  text-align: center;
  line-height: 30px;
  color: #a98467;
  border-radius: 15px;
}

.contenidor-centrat {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  align-items: center;
  font-family: 'DigitalDisco';
}
</style>
