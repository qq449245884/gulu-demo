<template>
  <div class="layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'GuluLayout',
  mounted () {
    this.$children.forEach((vm) => {
      if (vm.$options.name === 'GuluSider') {
        this.layoutClass.hasSider =  true
      }
    })
  },
  data () {
    return {
      layoutClass: {
        hasSider: false
      }
    }
  }
}
</script>

<style scope lang="scss">
  .layout {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    &.hasSider {
      flex-direction: row;
    }
  }
</style>