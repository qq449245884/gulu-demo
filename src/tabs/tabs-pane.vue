<template>
  <div class="tabs-pane" :class="classes" v-if='active'>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'GuluTabsPane',
  inject: ['eventBus'],
  props: {
    name: {
      type: String | Number,
      required: true
    }
  },
  computed: {
    classes () {
      return {
        active: this.active
      }
    }
  },
  created () {
    this.eventBus.$on('update:selected', (name) => {
      this.active = name === this.name
    })
  },
  data() {
    return {
      active: false
    }
  },
}
</script>

<style scope lang='scss' scoped>
  .tabs-pane{
    padding: 1em;
    &.active{
    }
  }
</style>