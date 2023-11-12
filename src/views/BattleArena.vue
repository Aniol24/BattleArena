<script setup>
import Arena from '../components/BattleArenaComponent.vue'
import GamePad from '../components/GamePad.vue'
</script>

<template>

    <div class="display">
        <Arena/>
        <GamePad/>
    </div>

</template>

<style scoped>

    .display{
        display: flex;
        margin-top:5%;
        flex-direction: row;
        justify-content: center;
    }

</style>