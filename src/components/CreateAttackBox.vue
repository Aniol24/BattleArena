<template>

    <div class="box">

        <h4 class="text">Attack Name:</h4>

        <h4 class="text">Posiciones sobre la dirección del array (x, y): </h4>
        
        <button type="button">Add Attack</button>
    </div>

</template>

<style scoped>
    .box {
        font-family: 'DigitalDisco', sans-serif;
        width: 900px;
        padding: 20px;
        background-color: #DDE5B6;
        border-radius: 30px;
        box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);
    }

    .text {
        display: flex;
        flex-direction: column;
        max-height: 390px;
        overflow-y: auto;
    }

    button {
        font-family:'Daydream', sans-serif;
        width: 100%;
        padding: 10px;
        margin-top: 10px;
        background-color: #6C584C;
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