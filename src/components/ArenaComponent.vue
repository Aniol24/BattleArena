
<template>

    <div class="arena">

        <div class="contingut-atac">
            <h4 class="title">Arena Name</h4>

            <div class="stats-atac">
                <h4>Health: 10hp</h4>
                <h4>Player1 vs Player2  </h4>
            </div>

            <div class="stats-atac">
                <h4>Size:  4x4</h4>
            </div>
        </div>

    </div>
    
</template>
    
<style scoped>
    
    .title{
        font-family: 'Daydream';
    }
    
    .arena {
        font-family:'DigitalDisco', sans-serif;
        width: auto;
        height: auto;
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

    @media (max-width: 768px) {
        .contingut-atac{
            display: flex;
            flex-direction: column;
        }

        .stats-atack{
            display: flex;
            flex-direction: row;
        }
    }
    
</style>