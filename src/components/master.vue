<template>
  <hDialogBack ref="back" >
    <component :is="comp"></component>
  </hDialogBack>
</template>

<script>
import hDialogBack from './background'

export default {
  name: 'HDialog-master',
  data () {
    return {
      comp: null
    }
  },
  components: {
    hDialogBack
  },
  methods: {
    open: function (comp) {
      this.comp = comp
      this.$refs.back.open()
    }
  }
}
</script>
