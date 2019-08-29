<template>
  <div class="gulu-sticky-wrapper" ref='wrapper' :style="{height}">
    <div class="gulu-sticky" :class="classes" :style="{left, width, top}">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'GuluSticky',
  props: {
    distance: {
      type: Number,
      default: 0
    }
  },
  mounted () {

  },
  mounted () {
    this.windowScrollHandler = this._windowScrollHandler.bind(this)
    window.addEventListener('scroll', this.windowScrollHandler)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.windowScrollHandler)
  },
  computed: {
    classes() {
      return {
        sticky: this.sticky
      }
    }
  },
  data () {
    return {
      sticky: false,
      left: undefined,
      width: undefined,
      height: undefined,
      timerId: null,
      top: undefined
    }
  },
  methods: {
    offsetTop () {
      let { top } = this.$refs.wrapper.getBoundingClientRect()
      return top + window.scrollY 
    },
    _windowScrollHandler () {
      let x = () => {
        let top= this.offsetTop()
        if(window.scrollY > top - this.distance) {
          console.log('滚过了元素顶部')
          let {height, left, width} = this.$refs.wrapper.getBoundingClientRect()
          this.left = left + 'px'
          this.width = width + 'px'
          this.height = height + 'px'
          this.top = this.distance + 'px'
          this.sticky = true
        }else {
          console.log('没有滚过元素顶部')
          this.height = undefined
          this.left = undefined
          this.top = undefined
          this.sticky = false
        }
      }
      this.timerId = setTimeout(x, 200)
    }
  }
}
</script>

<style scope lang='scss'>
  .gulu-sticky{
    &.sticky{
      position: fixed;
      /* left: 0;
      width: 100%; */
    }
  }
</style>