<template>
    <div class="header">
        <nav class="navbar">
        <ul class="nav-list">
            <li class="nav-item lletra"><a href="#home" class="nav-link">Profile</a></li>
            <li class="nav-item lletra"><a href="#about" class="nav-link">Arenas</a></li>
            <li class="nav-item lletra"><a href="#services" class="nav-link">Players</a></li>
            <li class="nav-item lletra"><a href="#contact" class="nav-link">Shop</a></li>
        </ul>
        <div class="nav-title titol">BATTLE ARENA</div>
    </nav>    
    </div>
    
  </template>
  
  <script>
  export default {
    name: 'NavBar',
  };
  </script>
  
  <style scoped>

    .header{
        background: #000;
    }

    .titol{
        font-family:'Daydream', sans-serif;
        text-align: center;
        color: #507229
    }

    .lletra{
        font-family:'DigitalDisco', sans-serif;
        text-align: center;
        font-size: 1.6em;
        color: #507229
    }
    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #A98467;
        padding: 20px 30px;
    }
  
    .nav-brand {
        color: white;
        font-size: 1.6em;
    }
    
    .nav-list {
        list-style-type: none;
        display: flex;
        margin: 0;
        padding: 0;
    }
    
    .nav-item {
        margin: 0 10px;
    }
    
    .nav-link {
        color: #283618;
        text-decoration: none;
        padding: 10px;
    }
    
    .nav-link:hover {
        background-color: #283618;
        color: black;
    }
    
    .nav-title {
        color: #283618;
        font-size: 1.7em;
        margin-right: 10px;
    }
  </style>
  