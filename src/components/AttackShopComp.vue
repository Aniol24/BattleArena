<script setup>
import Toast from './ShowToast.vue';
</script>

<template>
  <div class="attack">
    <div class="contingut-atac">
      <h4 class="title">{{ name }}</h4>

      <div class="stats-atac">
        <h4>Positions: {{ positions }}</h4>
        <h4>Power: {{ power }}</h4>
      </div>

      <div class="stats-atac">
        <h4>Price: {{ price }}</h4>
        <h4>lvl: {{ levelNeeded }}</h4>
      </div>

      <div class="stats-atac">
        <button class="btn btn-primary" @click="buyAttack">Buy</button>
      </div>
    </div>
  </div>

  <Toast ref="toast" />
</template>

<script>

import * as store from '../store.js';

export default {
  props: {
    name: String,
    power: Number,
    positions: String,
    levelNeeded: Number,
    on_sale: Boolean,
    price: Number
  },

  methods: {

    buyAttack(){
      fetch('https://balandrau.salle.url.edu/i3/shop/attacks/' + this.name + '/buy', {
        method: 'POST',
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
          console.log(response);
          this.$refs.toast.showToast('Attack bought', 'success');
        }
      })  
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        this.loginError = 'Error: ' + error.message; 
        this.$refs.toast.showToast(error.message, 'error');
      });
    }

  }
};

</script>

<style scoped>

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
  transition: background-color 0.3s ease-in-out;
}

.btn:hover {
  background-color: #57473d;
}

.button-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 10px;
}

.title {
  margin-left: 50px;
  min-width: 400px;
  font-family: 'Daydream';
}

.attack {
  font-family: 'DigitalDisco', sans-serif;
  width: auto;
  height: 100px;
  padding: 10px;
  background-color: #a98467;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  margin-top: 10px;
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

.stats-atac{
  min-width: 200px;
}

@media (max-width: 600px) {

  .title {
    font-family: 'Daydream';
  }

  .contingut-atac {
    flex-direction: column;
    align-items: start;
  }

  .attack {
    height: auto;
    padding: 20px;
  }

  .stats-atack {
    margin-bottom: 10px;
  }
}
</style>
