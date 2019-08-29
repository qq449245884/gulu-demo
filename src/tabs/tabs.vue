<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>
<script>
import Vue from 'vue'
export default {
  name: 'GuluTabs',
  provide () {
    return {
      eventBus: this.eventBus
    }
  },
  props: {
    selected: {
      type: String,
      required: true
    },
    direction: {
      type: String,
      default: 'horizontal',
      validator (value) {
        return ['horizontal', 'vertical'].indexOf(value) >= 0 
      }
    }
  },
  mounted () {
    this.checkChildren()
    this.selectTab()
  },
  data () {
    return {
      eventBus: new Vue()
    }
  },
  methods: {
    checkChildren () {
      if (this.$children.length === 0) {
        console && console.warn && 
        console.warn('tabs的子组件应该是 tabs-head 和 tabs-nav，但你没有写子组件')
      }
    },
    selectTab () {
      this.$children.forEach((vm) => {
        if (vm.$options.name === 'GuluTabsHead') {
          vm.$children.forEach((item) => {
            if (item.$options.name === 'GuluTabsItem' && item.name === this.selected) {
              this.eventBus.$emit('update:selected', this.selected, item)
            }
          })
        }
      })
    }
  },
}
</script>

<style scope lang='scss'>

</style>