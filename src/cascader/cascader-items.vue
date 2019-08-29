<template>
  <div class="cascaderItem" :style="{height}">
    <div class="left">
      <div class="label" v-for='item in items' @click="onClickLabel(item)" :key="item.name">
        <span class="name">{{item.name}}</span>
        <div class="icons">
          <template v-if='item.name === loadingItem.name'>
            <icon class="icon loading" name='loading'></icon>
          </template>
          <template v-else>
            <icon class="next" v-if='rightArrowVisible(item)' name='right' />
          </template>
        </div>
      </div>
    </div>
    <div class="right" v-if='rightItems'>
      <GuluCascaderItems :items='rightItems' 
        :loadingItem='loadingItem'
        :load-data='loadData'
        :selected='selected' @update:selected='onUpdateSelected'
        :height='height' :level='level + 1'/>
    </div>
  </div>
</template>
<script>
import Icon from '../icon'
export default {
  name: 'GuluCascaderItems',
  components: {
    Icon
  },
  props: {
    items: {
      type: Array
    },
    height: {
      type: String
    },
    selected: {
      type: Array,
      default: () => []
    },
    loadingItem: {
      type: Object,
      default: () => ({})
    },
    level: {
      type: Number,
      default: 0
    },
    loadData: {
      type: Function
    }
  },
  data () {
    return {
    }
  },
  computed: {
    rightItems() {
      if (this.selected[this.level]) {
        let selected = this.items.filter((item) => item.name === this.selected[this.level].name)
        if (selected && selected[0].children && selected[0].children.length > 0) {
          return selected[0].children
        }
      }
    }
  },
  methods: {
    rightArrowVisible(item) {
      return this.loadData ? !item.isLeaf : item.children
    },
    onClickLabel (item) {
      let copy = JSON.parse(JSON.stringify(this.selected))
      copy[this.level] = item
      copy.splice(this.level + 1)
      this.$emit('update:selected', copy)
    },
    onUpdateSelected (newSelected) {
      this.$emit('update:selected', newSelected)
    }
  }
}
</script>

<style scope lang='scss'>
  @import '../var';
  .cascaderItem{
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    height: 100px;
    .left{
      height: 100%;
      padding:  0.3em 0;
      overflow: auto;
    }
    .right{
      height: 100%;
      border-left: 1px solid $border-color-light;
    }
    .label{
      padding: .5em 1em;
      display: flex;
      align-items: center;
      &:hover{
        background: $grey;
      }
      .name {
        margin-right: 1em;
        user-select: none;
      }
      .icons{
        margin-left: auto;
        .next{
          transform: scale(0.5);
        }
        .loading {
          animation: spin 2s infinite linear;
        }
      }
    }
  }
</style>