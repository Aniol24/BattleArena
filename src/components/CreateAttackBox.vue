<template>
  <div class="box">
    <div>
      <label for="inputName">Attack Name: </label>
      <input type="text" id="inputName" />
    </div>

    <div>
      <label for="inputPos">Posiciones sobre la dirección del array (x, y): </label>
      <input type="text" id="inputPos" />
    </div>
    <button type="button">Add Attack</button>
  </div>
</template>

<style scoped>
.box {
  font-family: 'DigitalDisco', sans-serif;
  width: 900px;
  padding: 20px;
  background-color: #dde5b6;
  border-radius: 30px;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);
}

.text {
  display: flex;
  flex-direction: column;
  max-height: 390px;
  overflow-y: auto;
}

button {
  font-family: 'Daydream', sans-serif;
  width: 25%;
  float: right;
  padding: 10px;
  margin-top: 10px;
  background-color: #6c584c;
  color: #dde5b6;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease-in-out;
}

button:hover {
  background-color: #32471a;
}
</style>
