<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button v-on:click="openDialog" v-bind:zIndex="19861018" >openDialog</button>
  </div>
</template>

<script>
import test from './test'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    openDialog: function () {
      let dialog = this.$root.$refs.hDialog
      dialog.open({
        template: '<div>第一个组件<test></test></div>',
        components: {
          test
        },
        methods: {
          handler: function (type) {
            alert('外部')
            return true
          }
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
