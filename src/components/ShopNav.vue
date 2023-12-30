<template>
  <div class="button-container">
    <button class="btn" id="createAttackBtn">Create Attack</button>
    <button class="btn">Sell Attack</button>
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

</template>

<script>

import * as store from '../store.js';

export default {
  data() {
    return {
      createError: '',
      createSuccess: ''
    };
  },
  mounted() {
    var modal = document.getElementById("attackModal");
    var btn = document.getElementById("createAttackBtn");
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
          console.log(response);
          if (response.headers.get("Content-Length") === "0" || !response.headers.get("content-type")?.includes("application/json")) {
            this.createSuccess = "Attack created successfully!"; // Set success message for empty response
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
          this.createSuccess = "Attack created successfully!"; // Set success message for JSON response
        }
      })
      .catch(error => {
        this.createError =  error.message;
        this.createSuccess = ''; // Clear success message in case of error
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
</style>
