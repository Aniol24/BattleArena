<template>
  <div class="header">
    <nav class="navbar">
      <div class="hamburger-menu" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div class="nav-title titol">BATTLE ARENA</div>

      <ul :class="{ 'nav-list': true, active: isMenuOpen }">
        <li class="nav-item lletra"><a href="#home" class="nav-link">Profile</a></li>
        <li class="nav-item lletra"><a href="#about" class="nav-link">Arenas</a></li>
        <li class="nav-item lletra"><a href="#services" class="nav-link">Players</a></li>
        <li class="nav-item lletra"><a href="#contact" class="nav-link">Shop</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    }
  }
}
</script>

<style scoped>
.header {
  background: #000;
}

.titol {
  font-family: 'Daydream', sans-serif;
  text-align: center;
  color: #507229;
}

.lletra {
  font-family: 'DigitalDisco', sans-serif;
  text-align: center;
  font-size: 1.6em;
  color: #507229;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #a98467;
  padding: 20px 30px;
}

.nav-list {
  list-style-type: none;
  display: flex;
  margin: 0;
  padding: 0;
}

.nav-item {
  margin: 0 10px;
}

.nav-link {
  color: #283618;
  text-decoration: none;
  padding: 10px;
}

.nav-link:hover {
  background-color: #283618;
  color: black;
}

.nav-title {
  color: #283618;
  font-size: 1.7em;
  margin-right: 10px;
}

.hamburger-menu {
  cursor: pointer;
  display: none;
}

.hamburger-menu span {
  display: block;
  width: 25px;
  height: 3px;
  background-color: #507229;
  margin: 5px 0;
}

@media screen and (max-width: 700px) {
  .hamburger-menu {
    display: block;
  }

  .nav-list {
    display: none;
    background-color: #a98467;
    position: absolute;
    top: 115px;
    right: 0;
    width: 100%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .nav-list.active {
    display: block;
    flex-direction: column;
    align-items: flex-start;
  }

  .nav-item {
    width: 100%;
    border-top: 1px solid #507229;
  }

  .nav-link {
    display: block;
    width: 100%;
    padding: 12px 20px;
    text-align: left;
    color: #dde5b6;
  }

  .nav-link:hover {
    background-color: #507229;
    color: black;
  }

  .nav-title {
    font-size: 100%;
    margin-right: 0;
    text-align: left;
  }

  .navbar {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
