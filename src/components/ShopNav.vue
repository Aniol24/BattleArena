<template>
  <div class="button-container">
    <button class="btn" id="createAttackBtn">Create Attack</button>
    <button class="btn" id="sellAttackBtn">Sell Attack</button>
  </div>

  <div id="attackModal" class="modal">
    <div class="modal-content">
      <span class="close">&times;</span>
      <h4 class="titol">CREATE ATTACK</h4>
      <p v-if="createError" class="create-error">{{ createError }}</p>
      <p v-if="createSuccess" class="create-success">{{ createSuccess }}</p>
      <form @submit.prevent="createAttack">
        <div class="input-group">
          <label for="attack_id">Attack ID</label>
          <input id="attack_id" name="attack_id" type="text" placeholder="Name..." />
        </div>

        <div class="input-group">
          <label for="positions">Positions</label>
          <input id="positions" name="positions" type="text" placeholder="(x,y)" />
        </div>

        <button type="submit">Create</button>
      </form>
    </div>
  </div>

  <div id="sellModal" class="modal">
    <div class="modal-content">
      <span class="close">&times;</span>
      <h4 class="titol">SELL ATTACK</h4>
      <p v-if="sellError" class="create-error">{{ sellError }}</p>
      <p v-if="sellSuccess" class="create-success">{{ sellSuccess }}</p>
      <div class="attacks-list">
        <ul>
          <li v-for="attack in filteredAttacks" :key="attack.id">
            <form @submit.prevent="sellAttack(attack)">
              {{ attack.attack_ID }}, Power: {{ attack.power }}
              <input type="text" placeholder="Price..." v-model="attack.price" style="max-width: fit-content;"/>
              <button type="submit" class="small-sell-button" style="max-width: fit-content;">Sell</button>
            </form>
          </li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script>

import * as store from '../store.js';

export default {
  data() {
    return {
      createError: '',
      createSuccess: '',
      sellSuccess: '',
      sellError: '',
      price: '',
      myAttacks: []
    };
  },
  computed: {
    filteredAttacks() {
      return this.myAttacks.filter(attack => !attack.on_sale);
    }
  },
  mounted() {
    var modal = document.getElementById("attackModal");
    var btn = document.getElementById("createAttackBtn");
    var span = document.getElementsByClassName("close")[0];

    btn.onclick = () => {
      modal.style.display = "block";
      modal.classList.add("modal-open");
      this.createError = '';
      this.createSuccess = '';
    }

    span.onclick = () => {
      modal.style.display = "none";
      modal.classList.remove("modal-open");
      this.createError = '';
      this.createSuccess = '';
    }

    window.onclick = (event) => {
      if (event.target == modal) {
        modal.style.display = "none";
        modal.classList.remove("modal-open");
        this.createError = '';
        this.createSuccess = '';
      }
      if (event.target == modal2) {
        modal2.style.display = "none";
        modal2.classList.remove("modal-open");
        this.createError = '';
        this.createSuccess = '';
      }
    }

    var modal2 = document.getElementById("sellModal");
    var btn2 = document.getElementById("sellAttackBtn");
    var span2 = document.getElementsByClassName("close")[1];

    btn2.onclick = () => {
      modal2.style.display = "block";
      modal2.classList.add("modal-open");
      this.getAttacks();
    }

    span2.onclick = () => {
      modal2.style.display = "none";
      modal2.classList.remove("modal-open");
      this.createError = '';
      this.createSuccess = '';
    }
  },
  methods: {

    createAttack() {
      const requestBody = {
        attack_ID: document.getElementById("attack_id").value,
        positions: document.getElementById("positions").value,
        img: "https://cdn-icons-png.flaticon.com/128/842/842082.png"
      };

      fetch('https://balandrau.salle.url.edu/i3/shop/attacks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Bearer': store.getUserToken()
        },
        body: JSON.stringify(requestBody)
      })
      .then(response => {
        if (response.ok || response.status === 201) { 
          if (response.headers.get("Content-Length") === "0" || !response.headers.get("content-type")?.includes("application/json")) {
            this.createSuccess = "Attack created successfully!";
            this.createError = " "
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
          this.createSuccess = "Attack created successfully!"; 
          this.createError = "";
        }
      })
      .catch(error => {
        this.createError =  error.message;
        this.createSuccess = "";
      });
    },

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
        this.myAttacks = data.map(attack => ({ ...attack, price: '' }));
        console.log(this.myAttacks);
      })
      .catch(error => {
        this.loginError = 'Login Failed: ' + error.message; 
      });
    },

    sellAttack(attack) {

      const requestBody = {
        price: Number(attack.price)
      };
    
      fetch('https://balandrau.salle.url.edu/i3/shop/attacks/' + attack.attack_ID + '/sell', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Bearer': store.getUserToken()
        },
        body: JSON.stringify(requestBody)
      })
      .then(response => {
        if (response.ok || response.status === 200) { 
          if (response.headers.get("Content-Length") === "0" || !response.headers.get("content-type")?.includes("application/json")) {
            this.sellSuccess = "Attack put to sell!"; 
            this.getAttacks();
            return;
          } else {
            return response.json();
          }
        } else {
          console.log(this.price);
          return response.json().then(err => {
            throw new Error(err.error.message); 
          });
        }
      })
      .then(data => {
        if (data) {
          this.sellSuccess = "Attack put to sell!";
          this.getAttacks();
          this.filteredAttacks();
        }
      })
      .catch(error => {
        this.sellError =  error.message;
        this.sellSuccess = ''; 
      });
    }
  }

}


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
  background-color: rgb(0,0,0); 
  background-color: rgba(0,0,0,0.4); 
}

.attacks-list {
  max-height: 300px; /* Set a maximum height for the attacks list */
  overflow-y: auto; /* Enable vertical scroll if content exceeds max-height */
  margin-bottom: 20px; /* Optional: Add some margin at the bottom */
}

.attacks-list::-webkit-scrollbar {
  width: 10px;
}

.attacks-list::-webkit-scrollbar-track {
  background: #dde5b6;
  border-radius: 10px;
}

.attacks-list::-webkit-scrollbar-thumb {
  background-color: #dde5b6;
  border-radius: 20px;
  border: 3px solid #507229;
}

.attacks-list::-webkit-scrollbar-thumb:hover {
  background-color: #dde5b6;
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

.btn {
  font-family: 'Daydream', sans-serif;
  width: 50%;
  padding: 10px;
  background-color: #6c584c;
  color: #dde5b6;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin: 10px;
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

input {
  width: 100%;
  padding: 8px;
  border: 1px solid #a98467;

  border-radius: 6px;
  font-size: 14px;
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

.small-sell-button {
  padding: 5px 10px; /* Smaller padding */
  font-size: 12px; /* Smaller font size */
  background-color: #507229; /* Background color */
  color: #dde5b6; /* Text color */
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  margin-left: 10px;
}

.small-sell-button:hover {
  background-color: #32471a; /* Darker background on hover */
}
</style>
