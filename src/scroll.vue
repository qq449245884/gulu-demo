<template>
  <div ref="parent" class="gulu-scroll-wrapper" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
    <div ref="child" class="gulu-scroll">
      <slot></slot>
    </div>
    <div class="gulu-scroll-tract" v-show='scrollBarVisible'>
      <div class="gulu-scroll-bar" ref='bar'>
        <div class="gulu-scroll-bar-inner"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'GuluScroll',
  data () {
    return {
      scrollBarVisible: false
    }
  },
  mounted () {
    let parent = this.$refs.parent
    let child = this.$refs.child
    let translateY = 0

    let {height: childHeight} = child.getBoundingClientRect()
    let {height: parentHeight} = parent.getBoundingClientRect()

    let {borderTopWidth, borderBottomWidth, paddingTop, paddingBottom} = window.getComputedStyle(parent)
    borderTopWidth = parseInt(borderTopWidth)
    borderBottomWidth = parseInt(borderBottomWidth)
    paddingTop = parseInt(paddingTop)
    paddingBottom = parseInt(paddingBottom)
    let maxHeight = childHeight - parentHeight + (borderTopWidth + borderBottomWidth + paddingTop + paddingBottom)
    parent.addEventListener('wheel', (e) => {
      if (e.deltaY > 20) {
        translateY -= 20 *3   
      } else if(e.deltaY < -20){
        translateY -= -20 *3
      }
      if (translateY > 0) {
        translateY = 0
      } else if (translateY < -maxHeight) {
        translateY = -maxHeight
      } else {
        e.preventDefault()
      }
      child.style.transform = `translateY(${translateY}px)`
      this.updateScrollBar(parentHeight, childHeight, translateY)
    })
    this.updateScrollBar(parentHeight, childHeight, translateY)
  },
  methods: {
    updateScrollBar (parentHeight, childHeight, translateY) {
      let barHeight = parentHeight * parentHeight /childHeight
      this.$refs.bar.style.height = barHeight + 'px'
      let y = parentHeight * translateY / childHeight
      this.$refs.bar.style.transform = `translateY(${-y}px)`
    },
    onMouseEnter () {
      this.scrollBarVisible = true
    },
    onMouseLeave () {
      this.scrollBarVisible = false
    },
    onDragStart () {
      console.log('start')
    },
    onDragEnd () {
      console.log('end')
    }
  }
}
</script>

<style scope lang='scss'>
  .gulu-scroll{
    transition: transform 0.05s ease;
    &-wrapper{
      border:1px solid red;
      overflow: hidden;
      position: relative;
    }
    &-tract{
      position: absolute;
      width: 14px;
      top: 0;
      right: 0;
      height: 100%;
      background: #ddd;
      border-radius: 10px;
    }
    &-bar{
      position: absolute;
      top:0;
      width: 8px;
      left: 50%;
      margin-left: -4px;
      padding: 4px 0;
      &-inner{
        height: 100%;
        border-radius: 4px;
        background: #c2c2c2;
        &:hover{
          background: #7d7d7d;
        }
      }
    }
  }
</style>