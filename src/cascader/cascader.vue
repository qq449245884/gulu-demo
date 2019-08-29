<template>
  <div class="cascader" ref='cascader' v-click-outside='close'>
    <div class="trigger" @click="toggle">
      {{result || '&nbsp;'}}
    </div>
  <div class="popover-wrapper" v-if="popoverVisible">
    <CascaderItems :items='source' class="popover" :loadData='loadData'
      :loadingItem='loadingItem'
      :height='height' :selected='selected' @update:selected='onUpdateSelected'
    />
  </div>
  </div>
</template>
<script>
import CascaderItems from './cascader-items'
import ClickOutside from '../click-outside'
export default {
  name: 'GuluCascader',
  directives: {ClickOutside},
  components: {
    CascaderItems
  },
  props: {
    source: {
      type: Array
    },
    height: {
      type: String
    },
    selected: {
      type: Array,
      default: () => []
    },
    loadData: {
      type: Function
    }
  },
  computed: {
    result () {
      return this.selected.map(item => item.name).join('/')
    }
  },
  data () {
    return {
      popoverVisible: false,
      loadingItem: {}
    }
  },
  updated () {
    
  },
  methods: {
    open() {
      this.popoverVisible = true
    },
    close(){
      console.log('close')
      this.popoverVisible = false
    },
    toggle () {
      this.popoverVisible ? this.close() : this.open()
    },
    onUpdateSelected (newSelected) {
      this.$emit('update:selected', newSelected)
      let lastItem = newSelected[newSelected.length - 1]
      let simplest = (children, id) => {
        return children.filter(item => item.id === id)[0]
      }
      let complex = (children, id) => {
        let noChildren = []
        let hasChildren = []
        children.forEach(item => {
          if (item.children) {
            hasChildren.push(item)
          } else {
            noChildren.push(item)
          } 
        })
        let found = simplest(noChildren, id)
        if (found) {
          return found
        } else {
          found = simplest(hasChildren, id)
          if (found) { return found }
          else {
            for(let i=0; i<hasChildren.length; i++) {
              found = complex(hasChildren[i].children, id)
              if (found)
                return found
            }
            return undefined
          }
        }
      }
      let updateSource = (result) => {
        this.loadingItem = {}
        let copy = JSON.parse(JSON.stringify(this.source))
        let toUpdate = complex(copy, lastItem.id)
        toUpdate.children = result
        this.$emit('update:source', copy)
      }
      if (!lastItem.isLeaf && this.loadData) {
        this.loadData(lastItem, updateSource)
        this.loadingItem = lastItem
      }

    }
  }
}
</script>

<style scope lang='scss'>
  @import '../var';
  .cascader{
    position: relative;
    display: inline-flex;
    border: 1px solid red;
    .trigger {
      height: 32px;
      border:1px solid black;
      height: $input-height;
      display: inline-flex;
      align-items: center;
      padding: 0 1em;
    }
    .popover-wrapper{
      display: flex;
      position: absolute;
      background: #fff;
      top:100%;
      left: 0;
      @extend .box-shadow;
      .label{
        white-space: nowrap;
      }
    }
  }
</style>
