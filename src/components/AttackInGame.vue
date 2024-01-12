<template>
  <div class="attack-box" @click="attack">
    <h3 class="attack title">{{ name }}</h3>
    <h3 class="attack small">{{ power }}</h3>
    <h3 class="attack small">{{ positions }}</h3>
  </div>
</template>

<script>

import * as store from '../store.js';

export default{

  props: {
    name: String,
    power: String,
    positions: String,
  },
  methods: {
    attack() {
      fetch('https://balandrau.salle.url.edu/i3/arenas/attack/' + this.name, {
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
        }
      })  
      .catch(error => {
        this.loginError = 'Error: ' + error.message; 
        this.$refs.toast.showToast(error.message, 'error');
      });
    }
  }

}

</script>

<style scoped>
.attack-box {
  background-color: #6c584c;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  width: 100%;
  height: 30px;
  margin-top: 10px;
  border-radius: 10px;
  cursor: pointer; 
  transition: background-color 0.3s, box-shadow 0.3s; 
}

.attack-box:hover {
  background-color: #7a6e5a;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); 
}


.title {
  font-family: 'Daydream', sans-serif;
  text-align: center;
  color: #283618;
}

.small {
  font-size: 1.5em;
  font-family: 'DigitalDisco' sans-serif;
}

.attack {
  font-family: 'DigitalDisco' sans-serif;
  color: #dde5b6;
}
</style>
