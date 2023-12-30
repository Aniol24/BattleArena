<template>
  <div class="box">
    <div class="container">
      <div class="container-files">
        <div class="foto-perfil">
          <img :src="img" alt="" />
        </div>
      </div>

      <div class="container-files">
        <h4>{{ name }}</h4>
        <h4>lvl: {{ level }} </h4>
        <h4>Gold: {{ coins }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    img: String,
    xp: Number,
    level: Number,
    coins: Number
  }
};

</script>

<style scoped>
.foto-perfil {
  width: 130px;
  height: 130px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  border : 2px solid black;
  background-color: #8f9476;
}

.foto-perfil img {
  width: 100%;
  height: 100%; 
  object-fit: cover; 
  border-radius: 50%; 
  border-color: black;
}

.container-files {
  margin-left: 10px;
}

.box {
  font-family: 'DigitalDisco', sans-serif;
  width: 300px;
  padding: 10px;
  background-color: #dde5b6;
  border-radius: 30px;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);
}

.container {
  display: flex;
  flex-direction: row;
  justify-content: start;
}

@media (max-width: 600px) {
  .container {
    flex-direction: column;
    align-items: center;
  }

  .container-files {
    margin-left: 0;
    margin-bottom: 10px;
    text-align: center;
  }

  .box {
    width: auto + 10px;
  }
}
</style>
