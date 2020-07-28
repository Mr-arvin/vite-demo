<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <router-view/>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  },
  mounted() {
    var demo = this.$route
    // debugger
  }
}
</script>

<style>
html,body {
  padding: 0;
  margin: 0;
  padding: 0;
  background: radial-gradient(ellipse at center,#23508a 0,#1b3b62 50%,#1a365b 100%);
}
#app {
  width: 100%;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
