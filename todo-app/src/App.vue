<template>
  <div id="app">
<div id="nav">
    <router-link to="/">Home</router-link> |
      <router-link to="/single-day">Single Day</router-link>
  </div>
<router-view/>
 </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #36454f;
  width: 100%;
  min-height: 100vh;
}
#nav {
  padding: 5px;
  a {
    font-weight: bold;
    color: white;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
