<template>
  <div class="search-bar">
    <img src="../assets/imgs/search.png" alt="Search" class="search-icon" />
    <input type="text" placeholder="Search..." v-model="searchQuery" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
    };
  },
  watch: {
    searchQuery(newQuery) {
      this.$emit('search', newQuery);
    }
  }
}
</script>

<style scoped>
.search-bar {
  background-color: #a98467;
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

.search-bar input::placeholder {
  color: #000;
}

.search-icon {
  width: 20px;
  height: 20px;
  margin-inline: 10px;
  vertical-align: middle;
}
</style>
