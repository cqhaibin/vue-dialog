<template>
    <div>
        我再弹出一个层
        <button v-on:click="openDiv" >btn</button>
    </div>
</template>

<script>
  export default {
    methods: {
      openDiv: function () {
        let promise = this.$root.$refs.hDialog.open({
          template: '<div>第二层了<button>还想弹一个层</button></div>'
        })
        promise.then(function (arg) {
          alert('test.....')
          arg.close()
        })
      }
    }
  }
</script>
