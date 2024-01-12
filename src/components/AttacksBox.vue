<script setup>
import Attack from './AttackComponent.vue'
</script>

<template>
  <div class="box">
    <h3 class="title">Attacks</h3>

    <div class="caixa-atacs">
      <Attack v-for="attack in attacks" :key="attack.id"
        :name="attack.attack_ID"
        :power="attack.power"
        :positions="attack.positions"
        :equipped="attack.equipped"
        :on_sale="attack.on_sale" 
        @update-attacks="getAttacks"/>
    </div>
  </div>
</template>

<script>

import * as store from '../store.js';

export default {
  
  data() {
    return {
      userData: store.getUserData(),
      attacks: [] 
    };
  },
  mounted() {
    this.getAttacks();
  },
  methods: {
    
    getAttacks() {
      fetch('https://balandrau.salle.url.edu/i3/players/attacks', {
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
        this.attacks = data;
        //console.log(this.attacks); 
      })
      .catch(error => {
        this.loginError = 'Login Failed: ' + error.message; 
      });
    }
  }

}


</script>


<style scoped>
.title {
  font-family: 'Daydream';
}

.box {
  font-family: 'DigitalDisco', sans-serif;
  width: 1000px;
  padding: 20px;
  background-color: #dde5b6;
  border-radius: 30px;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);
}

.caixa-atacs {
  display: flex;
  flex-direction: column;
  max-height: 430px;
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
    margin: 10px;
  }
}
</style>
