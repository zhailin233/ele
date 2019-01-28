<template>

  <div id="app">
    <v_header></v_header>
    <router-view/>
  </div>
</template>

<script>
import headerVue from './components/header/header.vue';
export default {
  name: 'App',
  components: {
    v_header: headerVue
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
