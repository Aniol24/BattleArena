<template>

<div class="box">

        <div class="contenidor-centrat">
            <h4 class="">id</h4>
        </div>

        <div class="contenidor-centrat">

            <h4 class="">lvl</h4>

            <div class="foto-perfil">
                <img src="../assets/imgs/wizard.png" alt="Foto de perfil">
            </div>

            <h4 class="">or</h4>

        </div>

        <div class="contenidor-centrat">
             <div class="experience-bar">
                <div class="progress" style="width: 57%;">
                    <span>XP</span>
                </div>
            </div>
        </div>

        <div class="contenidor-centrat">

            <div class="container-files">
                <h4>Games Won</h4>
                <h4>10</h4>
            </div>

            <div class="container-files">
                <h4>Games Lost</h4>
                <h4>10</h4>
            </div>

        </div>

        <div class="contenidor-centrat">
            <h4>Delete player</h4>
        </div>
            
</div>
    
</template>

<style scoped>

    .foto-perfil {
        width: 130px;
        height: 130px;
        border-radius: 50%;
        overflow: hidden;
        position: relative;
    }

    .container-files {
        display: flex;
        flex-direction:column;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }

    .container-files h4 {
        margin: 5px;  
        padding: 0; 
    }

    .foto-perfil img {
        width: 100%;
        height: auto; 
    }

    .box {
        font-family:'DigitalDisco', sans-serif;
        width: 300px;
        padding: 20px;
        background-color: #DDE5B6;
        border-radius: 30px;
        box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);
    }

    .experience-bar {
        width: 100%;
        height: 30px;
        background-color: #A98467;
        border-radius: 15px;
        overflow: hidden;
        margin: 10px 0;
    }

    .progress {
        height: 100%;
        background-color: #ADC178;
        text-align: center;
        line-height: 30px;
        color: #A98467;
        border-radius: 15px;
    }

    .contenidor-centrat{
        display: flex;
        justify-content: space-around;
        margin-top: 20px;
        align-items: center;
        font-family: 'DigitalDisco';
    }

    
</style>