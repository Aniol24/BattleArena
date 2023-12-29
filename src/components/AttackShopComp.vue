<template>
  <div class="attack">
    <div class="contingut-atac">
      <h4 class="title">Attack Name</h4>

      <div class="stats-atac">
        <h4>Price(co)</h4>
        <h4>Player Name:</h4>
      </div>

      <div class="stats-atac">
        <h4>Buy</h4>
      </div>
    </div>
  </div>
</template>
<style scoped>
.title {
  font-family: 'Daydream';
}

.attack {
  font-family: 'DigitalDisco', sans-serif;
  width: auto;
  height: 100px;
  padding: 10px;
  background-color: #a98467;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  margin-top: 10px;
}

.contingut-atac {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.stats-atack {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

@media (max-width: 600px) {
  .contingut-atac {
    flex-direction: column;
    align-items: start;
  }

  .attack {
    height: auto;
    padding: 20px;
  }

  .stats-atack {
    margin-bottom: 10px;
  }
}
</style>
