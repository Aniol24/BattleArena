<template>

    <nav class= "navbar">
        <ul class= "nav-list">
            <li class="nav-item lletra"><a href="#create" class="nav-link">Create Attack</a></li>
            <li class="nav-item lletra"><a href="#sell" class="nav-link">Sell Attack</a></li>
        </ul>
    </nav>
</template>

<script>
  export default {
    name: 'ShopNav',
  };
  </script>

<style scoped>
    .lletra{
        font-family:'DigitalDisco', sans-serif;
        text-align: center;
        font-size: 1em;
        color: #507229
    }
    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #ADC178;
        padding: 20px 30px;
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

  </style>
  