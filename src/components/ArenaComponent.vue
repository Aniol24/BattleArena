<template>
  <div class="arena">
    <div class="contingut-atac">
      <h4 class="title">{{ name }}</h4>

      <div class="stats-atac">
        <h4>Health: {{ HP_max }} HP</h4>
        <h4>{{ players_games[0] ? players_games[0].player_ID : '???' }} VS {{ players_games[1] ? players_games[1].player_ID : '???' }}</h4>
      </div>

      <div class="stats-atac">
        <h4>Size: {{ size }}</h4>
        <h4>{{ finished ? 'Started' : 'Not Started' }}</h4>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    name: String,
    size: Number,
    creation_date: String,
    finished: Boolean,
    HP_max: Number,
    start: Boolean,
    players_games: Array
  }
};

</script>

<style scoped>
.title {
  font-family: 'Daydream';
  margin-left: 50px;
  min-width: 400px;
}

.arena {
  font-family: 'DigitalDisco', sans-serif;
  width: auto;
  height: auto;
  padding: 10px;
  background-color: #a98467;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  margin-top: 10px;
}

.stats-atac{
  min-width: 200px;
}

.contingut-atac {
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
}

.stats-atack {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

@media (max-width: 768px) {
  .contingut-atac {
    display: flex;
    flex-direction: column;
  }

  .stats-atack {
    display: flex;
    flex-direction: row;
  }
}
</style>
