<template>

    <div class="game">

        <div class="contingut-game">
            <h4 class="title">Game ID</h4>

            <div class="stats-game">
                <h4>Size:  </h4>
                <h4>Creation Date:  </h4>
            </div>

            <div class="stats-game">
                <h4>HP_max:  </h4>
                <h4>Winner:  </h4>
                <h4>Attack Won:  </h4>
            </div>
        </div>

    </div>
    
</template>

<style scoped>
    
    .title{
        font-family: 'Daydream';
    }
    
    .game {
        font-family:'DigitalDisco', sans-serif;
        width: auto;
        height: 165px;
        padding: 10px;
        background-color: #A98467;
        border-radius: 20px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        margin-top: 10px;
    }

    .contingut-game{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }

    .stats-game{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    @media (max-width: 768px) {
        .contingut-game{
            display: flex;
            flex-direction: column;
            justify-content: space-around;
        }

        .stats-game{
            display: flex;
            flex-direction: row;
            justify-content: center;
        }

        h4{
            margin-left: 10px;
        }
    }
    
</style>