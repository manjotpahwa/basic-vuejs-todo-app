<template>
  <div class="home">
    <section class="main-todo-app">
      <div class="app-body-img">
      </div>
      <div class="app-body">
      <div class="container">
        <h1 class="title">
          Awesome TODO app
        </h1>
        <h2 class="subtitle">
          Start adding items now!
        </h2>
        <div class="button-block">
          <button class="button is-xl is-dark" type="danger" @click="authenticate('google')">Sign Up</button>
        </div>
      </div>
      </div>
    </section>
  </div>
</template>
<script>
//import Authenticate from "../common/services/auth";
export default {
  name: 'home',
  methods: {
  },
  components: {
  }
}
</script>
<style lang="scss" scoped>
  .app-body-img {
    text-align: center;
    background-image: url('https://cdn.auth0.com/blog/vue-meetup/event-banner.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 400px;
  }
  .app-body .title {
    font-family: "Trebuchet MS";
    font-size: 60px;
    color: white;
  }
  .subtitle {
    font-size: 30px;
    color: white;
  }
</style>
