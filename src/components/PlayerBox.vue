<template>

    <div class="box">
        
        <div class="container">

            <div class="container-files">
                <div class="foto-perfil">
                    <img src="../assets/imgs/wizard.png" alt="Foto de perfil">
                </div>
            </div>  
            

            <div class="container-files">
                <h4>Nom Usuari</h4>
                <h4>lvl</h4>
                <h4>coins</h4>
            </div>


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
    
        .foto-perfil img {
            width: 100%;
            height: auto; 
        }

        .container-files{
            margin-left: 10px;
        }
    
        .box {
            font-family:'DigitalDisco', sans-serif;
            width: 300px;
            padding: 10px;
            background-color: #DDE5B6;
            border-radius: 30px;
            box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);
        }

        .container{
            display:flex;
            flex-direction: row;
            justify-content: start;
        }
    
        
    </style>