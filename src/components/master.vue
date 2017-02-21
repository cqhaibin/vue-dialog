<template>
  <hDialogBack ref="back" >
    <component v-for="comp in comps" :is="comp"></component>
  </hDialogBack>
</template>

<script>
import hDialogBack from './background'

export default {
  name: 'HDialog-master',
  data () {
    return {
      comps: []
    }
  },
  components: {
    hDialogBack
  },
  methods: {
    open: function (comp) {
      this.comps.push(comp)
      if (!this.$refs.back.show) {
        this.$refs.back.open()
      }
    }
  }
}
</script>
