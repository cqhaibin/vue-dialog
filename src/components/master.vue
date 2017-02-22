<template>
    <div>
      <div class="modal-dialog"  v-for="(comp,index) in comps" >
        <div class="modal-content">
          <div class="modal-header" >
            header{{pzIndex}}--
          </div>
          <div class="modal-body">
            <component :is="comp"></component>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" v-on:click="clickHandler(btn, comp, index)" v-for="btn in btns" >{{btn}}</button>
          </div>
        </div>
      </div>
      <hDialogBack ref="back"  ></hDialogBack>
    </div>
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
  props: {
    'btns': {
      type: Array,
      default: function () {
        return ['Ok', 'cancel']
      },
      'mIndex': {
        type: Number,
        default: 5555
      }
    }
  },
  computed: {
    pzIndex: function () {
      console.log(this.mIndex)
      return this.mIndex
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
    },
    clickHandler: function (type, comp, index) {
      /** 应该创建一个Promise，传递给handler */
      if (comp.methods.handler && comp.methods.handler(type)) {
        this.comps.splice(index, 1)
      }
      if (this.comps.length === 0 && this.$refs.back.show) {
        this.$refs.back.close()
      }
    }
  }
}
</script>
