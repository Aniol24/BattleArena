<script setup>
import Attack from './AttackInGame.vue'
</script>

<template>
  <div class="box">
    <div class="capsa">
      <div class="line">
        <h5 class="titol">Attacks</h5>
        <p>leave arena</p>
      </div>

      <div class="line">
        <Attack />
      </div>

      <div class="line">
        <Attack />
      </div>

      <div class="line">
        <Attack />
      </div>
    </div>

    <div class="">
      <div class="direction-line">
        <button class="image-button">
          <img src="../assets/imgs/up.png" alt="Button Image" />
        </button>
      </div>

      <div class="direction-line">
        <button class="image-button">
          <img src="../assets/imgs/left.png" alt="Button Image" />
        </button>
        <button class="image-button">
          <img src="../assets/imgs/right.png" alt="Button Image" />
        </button>
      </div>

      <div class="direction-line">
        <button class="image-button">
          <img src="../assets/imgs/down.png" alt="Button Image" />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.box {
  font-family: 'DigitalDisco', sans-serif;
  width: 350px;
  padding: 20px;
  background-color: #a98467;
  border-radius: 30px;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);
}

.direction-line {
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  justify-content: space-around;
}

.line {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #283618;
}

.titol {
  font-family: 'Daydream', sans-serif;
  text-align: center;
  color: #283618;
}

.image-button img {
  width: 100%;
  height: 100%;
  display: block;
}

.image-button {
  width: 90px;
  height: 80px;
  padding: 0;
  border: none;
  cursor: pointer;
  background: transparent;
}

@media (max-width: 768px) {
  .box {
    font-family: 'DigitalDisco', sans-serif;
    width: 85%;
    padding: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    background-color: transparent;
    border-radius: 30px;
    box-shadow: 0 0 0px rgba(0, 0, 0, 0.5);
  }

  .line {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    color: #283618;
  }
  .image-button {
    width: 90px;
    height: 80px;
    padding: 0;
    border: none;
    cursor: pointer;
    background: transparent;
  }

  .capsa {
    margin-right: 20px;
  }

  p {
    margin-left: 40px;
  }
}
</style>
