<script setup>
import Arena from '../components/BattleArenaComponent.vue';
import GamePad from '../components/GamePad.vue';
</script>

<template>
    <div class="display">
        <div class="arena-container">
            <h2 class="arena-title">Arena Name</h2>
            <Arena/>
        </div>
        <GamePad/>
    </div>
</template>

<style scoped>
    .display {
        display: flex;
        margin-top: 5%;
        flex-direction: row;
        justify-content: space-evenly;
    }

    .arena-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .arena-title {
        text-align: center;
        margin-bottom: 10px; 
        font-family: 'Daydream';
        color: #283618
    }

    @media (max-width: 768px) {
        .display {
            flex-direction: column;
            justify-content: center;
        }

        .arena-title {
            font-family: 'Daydream';
            color: #283618
        }
    }
</style>
