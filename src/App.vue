<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello></hello>
    <HDialog ref="hDialog" ></HDialog>
  </div>
</template>

<script>
import Hello from './components/Hello'
import HDialog from './components/master'

export default {
  name: 'app',
  components: {
    Hello,
    HDialog
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
