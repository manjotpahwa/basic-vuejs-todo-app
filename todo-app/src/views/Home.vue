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
import AuthService from "../common/services/auth";
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
    padding: 40px 0 20px 0;
    font-family: "Trebuchet MS";
    font-size: 60px;
  }
  .subtitle {
    font-size: 30px;
  }
</style>
