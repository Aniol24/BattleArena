<template>
  <div class="login-box">
    <h1 class="titol">BATTLE ARENA</h1>

    <h4 class="titol">REGISTER</h4>
    <form @submit.prevent="register">
      <div class="input-group">
        <label for="username">Username</label>
        <input id="username" type="text" placeholder="Username" v-model="credentials.username"/>
      </div>
      <div class="input-group">
        <label for="password">Password</label>
        <input id="password" type="password" placeholder="Password" v-model="credentials.password"/>
      </div>
      <button type="submit">Create account</button>
      <p class="register-link">I already have an account</p>
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
    register() {
      const requestBody = {
        player_ID: this.credentials.username,
        password: this.credentials.password,
        img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9720e55c-d222-4769-90b8-aec2262c0988/ddvtmz1-cadfaa7f-6da9-4b59-a0fe-6ed5742af38c.jpg/v1/fill/w_622,h_350,q_70,strp/bruh_by_jukeboxfromao_ddvtmz1-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvOTcyMGU1NWMtZDIyMi00NzY5LTkwYjgtYWVjMjI2MmMwOTg4XC9kZHZ0bXoxLWNhZGZhYTdmLTZkYTktNGI1OS1hMGZlLTZlZDU3NDJhZjM4Yy5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.OTeZgFcV45DZqyg43rAeGzSld3mOIMTCffVyi3SGM8o'
      };

      fetch('https://balandrau.salle.url.edu/i3/players', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody) 
      })
      .then(response => {
        if (!response.ok) {
          return response.json().then(err => {
            throw new Error(err.error.message); 
          });
        } else {
          this.$router.push('/profile');
          return response.json();
        }
      })
      .then(data => {
        
        console.log('Login Successful:', data.message);
        setUserToken(data.token);
        setUserName(data.player_ID);
        setUserImage(data.img);
        setUserCoins(data.coins);
        setUserLevel(data.level);
        setUserXp(data.xp);

        this.$router.push('/playerInfo');
        
      })
      .catch(error => {
        this.loginError = 'Login Failed: ' + error.message; // Displaying the extracted error message
      });
    }

  }
};
</script>



<style scoped>
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
