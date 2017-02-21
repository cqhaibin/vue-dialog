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
        this.$root.$refs.hDialog.open({
          template: '<div>第二层了</div>'
        })
      }
    }
  }
</script>
