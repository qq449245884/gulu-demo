<template>
  <div class="tabs-body">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'GuluTabsItem',
  inject: ['eventBus'],
  created () {
  },
  data () {
    return {
    }
  }
}
</script>

<style scope lang='scss'>
  .tabs-body{

  }
</style>