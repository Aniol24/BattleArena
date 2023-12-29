<template>
  <div class="login-box">
    <h1 class="titol">BATTLE ARENA</h1>
    <h4 class="titol">LOG IN</h4>
    <p v-if="loginError" class="login-error">{{ loginError }}</p>
    <form @submit.prevent="login">
      <div class="input-group">
        <label for="username">Username</label>
        <input id="username" type="text" placeholder="Username" v-model="credentials.username" />
      </div>
      <div class="input-group">
        <label for="password">Password</label>
        <input id="password" type="password" placeholder="Password" v-model="credentials.password" />
      </div>
      <button type="submit">>></button>
      <p class="register-link">create account</p>
    </form>
  </div>
</template>

<script>

import { setUserToken, setUserName, setUserImage, setUserCoins, setUserLevel, setUserXp } from '../store.js';

export default {
  data() {
    return {
      credentials: {
        username: '',
        password: ''
      },

      loginError: ''
    };
  },
  methods: {
    login() {
      const requestBody = {
        player_ID: this.credentials.username,
        password: this.credentials.password
      };

      fetch('https://balandrau.salle.url.edu/i3/players/join', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody) 
      })
      .then(response => {
        if (!response.ok) {
          return response.json().then(err => {
            throw new Error(err.error.message); // Extracting the error message from the response body
          });
        } else {
          return response.json();
        }
      })
      .then(data => {
        if(data.token) {
          console.log('Login Successful:', data.message);
          setUserToken(data.token);
          setUserName(data.player_ID);
          setUserImage(data.img);
          setUserCoins(data.coins);
          setUserLevel(data.level);
          setUserXp(data.xp);

          this.$router.push('/profile');

        } else {
          this.loginError = 'Login Failed: ' + data.message;
        }
      })
      .catch(error => {
        this.loginError = 'Login Failed: ' + error.message; // Displaying the extracted error message
      });
    }

  }
};
</script>


<style scoped>

.login-error {
  color: red;
  text-align: center;
  margin-bottom: 10px;
}

.register-link {
  text-align: center;
  color: #507229;
}

.login-box {
  font-family: 'DigitalDisco', sans-serif;
  width: 300px;
  padding: 20px;
  margin: auto;
  background-color: #dde5b6;
  border-radius: 30px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: start;
}

.titol {
  font-family: 'Daydream', sans-serif;
  text-align: center;
  color: #507229;
}

.titol:first-child {
  font-size: 45px;
  margin-top: -60px;
  color: #74a53c;
  text-shadow:
    -6px -6px 0 #3a5935,
    /* top left */ 6px -6px 0 #3a5935,
    /* top right */ -6px 6px 0 #3a5935,
    /* bottom left */ 6px 6px 0 #3a5935;
}

.input-group {
  margin: auto;
  margin-right: 18px;
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
  color: #507229;
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
