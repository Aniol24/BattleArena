<template>

    <div class="attack">

        <div class="contingut-atac">
            <h4 class="title">(P.A) Name</h4>

            <div class="stats-atac">
                <button type="button">Add Price</button>
            </div>

            <div class="stats-atac">
                <button type="button">Sell</button>
            </div>
        </div>

    </div>
    
</template>

<style scoped>
    
    .title{
        font-family: 'Daydream';
    }
    
    .attack {
        font-family:'DigitalDisco', sans-serif;
        width: auto;
        height: 100px;
        padding: 10px;
        background-color: #A98467;
        border-radius: 20px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        margin-top: 10px;
    }

    .contingut-atac{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }
    .stats-atack{
        display: flex;
        flex-direction: column;
        justify-content: center;
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