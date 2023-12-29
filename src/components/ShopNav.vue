<template>
  <div class="button-container">
    <button class="btn">Create Attack</button>
    <button class="btn">Sell Attack</button>
  </div>
</template>

<style scoped>
.btn {
  font-family: 'Daydream', sans-serif;
  width: 50%;
  padding: 10px;
  background-color: #6c584c;
  color: #dde5b6;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin: 10px;
  transition: background-color 0.3s ease-in-out;
}

.btn:hover {
  background-color: #57473d;
}

.button-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 10px;
}
</style>
