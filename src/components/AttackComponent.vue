<script setup>
import Toast from './ShowToast.vue';
</script>

<template>
  <div class="attack">
    <div class="contingut-atac">
      <h4 class="title">{{ name }}</h4>

      <div class="stats-atac">
        <h4>Power: {{ power }}</h4>
        <h4>Positions: {{ positions }}</h4>
      </div>

      <div class="stats-atac">
        <h4>Equiped: {{ equipped ? 'Yes' : 'No' }}</h4>
        <h4>On Sale: {{ on_sale ? 'Yes' : 'No' }}</h4>
      </div>

      <!--Equip attack button-->
      <button
        v-if="!equipped"
        class="btn"
        @click="equipAttack"
      >Equip</button>

      <button
        v-if="equipped"
        class="btn"
        @click="unequipAttack"
      >Unequip</button>


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
    equipped: Boolean,
    on_sale: Boolean
  },
  methods:{
    equipAttack(){
      fetch('https://balandrau.salle.url.edu/i3/players/attacks/' + this.name, {
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
          //console.log(response);
          //this.$refs.toast.showToast('Equipation succeded', 'success');
          this.$emit('update-attacks');
        }
      })  
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        this.loginError = 'Error: ' + error.message; 
        this.$refs.toast.showToast(error.message, 'error');
      });
    },

    unequipAttack(){
      fetch('https://balandrau.salle.url.edu/i3/players/attacks/' + this.name, {
        method: 'DELETE',
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
          //console.log(response);
          //this.$refs.toast.showToast('Enequipation succeded', 'success');
          this.$emit('update-attacks');
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
.title {
  margin-left: 50px;
  min-width: 350px;
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

.stats-atac{
  min-width: 200px;
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

@media (max-width: 600px) {
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

  .title {
  margin-left: 50px;
  min-width: 50px;
  font-family: 'Daydream';
}
}
</style>
