<template>
  <div class="attack">
    <div class="contingut-atac">
      <h4 class="title">{{ name }}</h4>

      <div class="stats-atac">
        <h4>Power: {{ power }}</h4>
        <h4>Positions: {{ positions }}</h4>
      </div>

      <div class="stats-atac">
        <h4>Equiped: {{ equipped ? 'Yes' : 'No' }}</h4>
        <h4>On Sale: {{ on_sale ? 'Yes' : 'No' }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    power: Number,
    positions: String,
    equipped: Boolean,
    on_sale: Boolean
  }
};
</script>

<style scoped>
.title {
  margin-left: 50px;
  min-width: 400px;
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
  justify-content: start;
  align-items: center;
}

.stats-atac{
  min-width: 200px;
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

  .title {
  margin-left: 50px;
  min-width: 50px;
  font-family: 'Daydream';
}
}
</style>
