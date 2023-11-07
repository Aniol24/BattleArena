
<template>

    <div class="attack">

        <div class="contingut-atac">
            <h4 class="title">Attack Name</h4>

            <div class="stats-atac">
                <h4>Power:  </h4>
                <h4>Positions:  </h4>
            </div>

            <div class="stats-atac">
                <h4>Equiped:  </h4>
                <h4>On Sale:  </h4>
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
    
</style>