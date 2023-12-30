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
        :equiped="attack.equipped"
        :onSale="attack.on_sale" />
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
          //console.log(response.json());
          return response.json();
        }
      })  
      .then(data => {
        this.attacks = data;
        console.log(this.attacks); // Add this line to check the data
      })
      .catch(error => {
        this.loginError = 'Login Failed: ' + error.message; 
      });
    },
    
    createAttack(){
      const requestBody = {
        attack_ID: "atac, prova",
        positions: "(4,1)",
        img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9720e55c-d222-4769-90b8-aec2262c0988/ddvtmz1-cadfaa7f-6da9-4b59-a0fe-6ed5742af38c.jpg/v1/fill/w_622,h_350,q_70,strp/bruh_by_jukeboxfromao_ddvtmz1-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvOTcyMGU1NWMtZDIyMi00NzY5LTkwYjgtYWVjMjI2MmMwOTg4XC9kZHZ0bXoxLWNhZGZhYTdmLTZkYTktNGI1OS1hMGZlLTZlZDU3NDJhZjM4Yy5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.OTeZgFcV45DZqyg43rAeGzSld3mOIMTCffVyi3SGM8o"
      };

      fetch('https://balandrau.salle.url.edu/i3/shop/attacks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Bearer':store.getUserToken()
        },
        body: JSON.stringify(requestBody)
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
        console.log(data);
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
