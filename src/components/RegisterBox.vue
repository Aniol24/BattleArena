<template>
    <div class="login-box">

        <h1 class="titol">BATTLE ARENA</h1>

        <h4 class="titol">REGISTER</h4>
        <form>
            <div class="input-group">
            <label for="username">Username</label>
            <input id="username" type="text" placeholder="Username" />
            </div>
            <div class="input-group">
            <label for="password">Password</label>
            <input id="password" type="password" placeholder="Password" />
            </div>
            <button type="button">Create account</button>
            <p class="register-link">I already have an account</p>
        </form>
    </div>
</template>
  


<style scoped>

    .register-link{
        text-align: center;
        color: #507229;
    }

    .login-box {
        font-family:'DigitalDisco', sans-serif;
        width: 300px;
        padding: 20px;
        margin: auto;
        background-color: #DDE5B6;
        border-radius: 30px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        text-align: start;
    }

    .titol{
        font-family:'Daydream', sans-serif;
        text-align: center;
        color: #507229
    }

    .titol:first-child {
        font-size: 45px;
        margin-top: -60px;  
        color: #74A53C;
        text-shadow: 
                -6px -6px 0 #3A5935,  /* top left */
                6px -6px 0 #3A5935,   /* top right */
                -6px 6px 0 #3A5935,   /* bottom left */
                6px 6px 0 #3A5935; 
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
        border: 1px solid #A98467;
        
        border-radius: 6px;
        font-size: 14px;
    }
    
    button {
        font-family:'Daydream', sans-serif;
        width: 100%;
        padding: 10px;
        margin-top: 10px;
        background-color: #507229;
        color: #DDE5B6;
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
  