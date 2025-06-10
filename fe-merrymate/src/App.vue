<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <nav>
      <router-link to="/">Home</router-link> | 
      <router-link to="/landing">About</router-link>
    </nav> -->
    
  <div id="app">
    <navbar-component />
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import NavbarComponent from './components/common/NavbarComponent.vue';

export default {
  name: 'App',
  components: {
    // HelloWorld
    NavbarComponent
  }
}
</script>

<style>
html, body, #app {
  height: 100%;
  margin: 0;
  padding: 0;
}

#app {
  display: flex;
  flex-direction: column;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}

.box {
  box-shadow: 0px 0px 3px #939393;
  border-radius: 3px;
  padding: 10px;
}

.title {
  font-size: 1em;
  margin-bottom: 0.5rem;
}

.subtitle {
  font-size: 0.9em;
}

.horizontal-container {
  display: flex;
  flex-direction: row;
  gap: 0.3rem;
}

.mobile-input-component {
  width: 300px
}

</style>
