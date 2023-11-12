<template>
  <div class="search-bar">
    <img src="../assets/imgs/search.png" alt="Search" class="search-icon"/>
    <input
      type="text"
      placeholder="Search..."
    />
  </div>
</template>

<style scoped>
.search-bar {
  background-color: #A98467;
  padding: 5px;
  border-radius: 20px;
  display: flex;
  align-items: center;
}

.search-bar input {
  background-color: transparent; 
  padding: 10px;
  margin-right: 5px;
  border: 1px solid transparent;
  border-radius: 5px;
  color: #000; 
  outline: none; 
}

.search-bar input::placeholder { /* Style for the placeholder text */
  color: #000; /* Black color for the placeholder */
}

.search-icon {
  width: 20px;
  height: 20px;
  margin-inline: 10px;
  vertical-align: middle;
}
</style>
