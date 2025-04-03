<template>
  <div id="app">
    <header>
      <h1 aria-label="My Profile">MY PROFILE...</h1>
      <nav>
        <router-link to="/" class="nav-link">Show Info</router-link>
        <router-link to="/edit" class="nav-link">Edite Info</router-link>
        <router-link to="/course" class="nav-link">Check Grade</router-link>
      </nav>
    </header>

    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style scoped>

#app {
  font-family: 'Poppins', sans-serif;
  text-align: center;
  color: #fff;
  background: linear-gradient(135deg, #1a1a2e, #16213e, #0f3460);
  min-height: 100vh;
  padding: 20px;
}

header {
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.8);
  text-transform: uppercase;
}

h1 {
  font-size: 28px; 
  letter-spacing: 5px; 
}
@media (max-width: 600px) {
  h1 {
    font-size: 18px;
    letter-spacing: 3px;
  }
}


nav {
  display: flex;
  justify-content: center;
  margin-top: 15px;
}

.nav-link {
  color: white;
  padding: 12px 25px;
  text-decoration: none;
  margin: 0 12px;
  border: 2px solid #ffcc00;
  border-radius: 8px;
  transition: all 0.3s ease;
  font-weight: bold;
  background: rgba(255, 204, 0, 0.2);
  box-shadow: 0 4px 15px rgba(255, 204, 0, 0.5);
  font-size: 14px;
  letter-spacing: 1px;
}

.nav-link:hover {
  background-color: #ffcc00;
  color: #000000;
  transform: scale(1.1);
  box-shadow: 0 0 15px #ffcc00;
}
</style>
