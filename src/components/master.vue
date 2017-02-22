<template>
    <div>
      <div class="modal-dialog" v-bind:style="{zIndex:realIndex + index}"  v-for="(comp,index) in comps" >
        <div class="modal-content">
          <div class="modal-header" >
            header{{mIndex}}
          </div>
          <div class="modal-body">
            <component :is="comp"></component>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" v-on:click="clickHandler(btn, comp, index)" v-for="btn in btns" >{{btn}}</button>
          </div>
        </div>
      </div>
      <hDialogBack ref="back" v-bind:z-index="realIndex-1" ></hDialogBack>
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
      }
    },
    'mIndex': {
      type: Number,
      default: 19861016
    }
  },
  computed: {
    realIndex: function () {
      return this.mIndex
    }
  },
  components: {
    hDialogBack
  },
  methods: {
    open: function (comp) {
      comp.promise = new Promise(function (resolve, reject) {
        comp.resolve = resolve
        comp.reject = reject
      })
      this.comps.push(comp)
      if (!this.$refs.back.show) {
        this.$refs.back.open()
      }
      return comp.promise
    },
    clickHandler: function (type, comp, index) {
      let self = this
      let close = function () {
        self.comps.splice(index, 1)
        if (self.comps.length === 0 && self.$refs.back.show) {
          self.$refs.back.close()
        }
      }
      /** 只提供promise模式 */
      comp.resolve({'type': type, 'close': close})
    }
  }
}
</script>
