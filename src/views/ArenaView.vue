<script setup>
import NavBar from '../components/NavBar.vue'
import SearchBar from '../components/SearchBar.vue'
import Arenas from '../components/ArenasBox.vue'
</script>

<template>

    <NavBar/>
    <div class="contenidor-start">
        <SearchBar/>
        <button class="filter">Open Arenas</button>
        <button class="filter">Finished Arenas</button>
        <button class="filter">Time</button>
    </div>
    
    <div class="contenidor-centrat">
      <Arenas/>
    </div>
    <div class="create">
        <button class="button">+Create Arena</button>
    </div>
</template>

<style scoped>
    .contenidor-centrat{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap; 
        justify-content:center;
        align-items: center; 
        margin-top: 20px;
        gap: 80px;
    }
    .contenidor-start{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap; 
        justify-content:center;
        align-items: center; 
        margin-top: 40px;
        gap: 10px;
    }
    .create{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap; 
        justify-content:center; 
        margin-top: 20px;
    }
    .button {
        font-family:'Daydream', sans-serif;
        width: auto;
        padding: 10px;
        background-color: #6C584C;
        color: #DDE5B6;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
        transition: background-color 0.3s ease-in-out;
    }
    .filter {
        font-family:'Daydream', sans-serif;
        width: auto;
        margin-left: 10px;
        padding: 10px;
        background-color: #DDE5B6;
        color: #6C584C;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
        transition: background-color 0.3s ease-in-out;
    }
    button:hover {
        background-color: #57473d;    
    }

    .filter:hover{
        background-color: #f3ffb1;   
    }

</style>