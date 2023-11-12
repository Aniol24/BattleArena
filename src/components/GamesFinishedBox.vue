<script setup>
import Game from './GameFinishedComponent.vue'
</script>

<template>

    <div class="box">

        <h3 class="title">Games Finished</h3>

        <div class="caixa-games">
            <Game/>
            <Game/>
            <Game/>
            <Game/>
        </div>
    </div>

</template>

<style scoped>
    .title {
        font-family: 'Daydream';
    }

    .box {
        font-family: 'DigitalDisco', sans-serif;
        width: 900px;
        padding: 20px;
        background-color: #DDE5B6;
        border-radius: 30px;
        box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);
    }

    .caixa-games {
        display: flex;
        flex-direction: column;
        max-height: 500px;
        overflow-y: auto;
    }

    .caixa-games::-webkit-scrollbar {
        width: 10px;
    }

    .caixa-games::-webkit-scrollbar-track {
        background: #DDE5B6;
        border-radius: 10px;
    }

    .caixa-games::-webkit-scrollbar-thumb {
        background-color: #DDE5B6;
        border-radius: 20px; 
        border: 3px solid #507229;
    }

    .caixa-games::-webkit-scrollbar-thumb:hover {
        background-color: #DDE5B6; 
    }

    @media (max-width: 768px) {
        .box{
            width: 85%;
        }
    }
</style>