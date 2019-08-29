<template>
  <div class="col" :class="colClass" :style="colStyle">
    <slot></slot>
  </div>
</template>
<script>
let validator = (value) => {
  let keys = Object.keys(value)
  let valid = true
  keys.forEach(key => {
    if (!['span', 'offset'].includes(key)) {
      valid = false
    }
  })
  return valid
}
export default {
  name: 'GuluCol',
  props: {
    span: {
      type: [Number, String]
    },
    offset: { 
      type: [Number, String]
    },
    phone: {
      type: Object,
      validator,
    },
    ipad: {
      type: Object,
      validator
    },
    narrowPc: {
      type: Object,
      validator
    },
    pc: {
      type: Object,
      validator
    },
    widePc: {
      type: Object,
      validator 
    }
  },
  data () {
    return {
      gutter: 0
    }
  },
  computed: {
    colClass () {
      let {span, offset, phone, ipad, narrowPc, pc, widePc} = this
      let phoneClass = []
      return [
        ...createClass({span, offset}),
        ...createClasses(ipad, 'ipad-'),
        ...createClasses(narrowPc, 'narrow-pc-'),
        ...createClasses(pc, 'pc-'),
        ...createClasses(widePc, 'wide-pc-'),
      ]
    },
    colStyle () {
      let {gutter} = this
      return {marginLeft: -gutter / 2 + 'px', marginRight: -gutter / 2 + 'px'}
    }
  },
  methods: {
    createClass (obj, str = '') {
      if (!obj) { return []}
      let array = []
      if (obj.span) {
        array.push(`col-${str}${obj.span}`)
      }
      if (obj.offset) {
        array.push(`col-${str}${obj.offset}`)
      }
      return array
    }
  }
}
</script>

<style scope lang='scss'>
  .col{
    height: 100px;
    background: grey;
    width: 50%;
    border:1px solid red;

    $class: col-;
    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        width: ($n / 24) * 100%;
      }
    }

    $class-prefix: offset-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }

    @media (min-width: 577px) {
      $class: col-ipad-;
      @for $n from 1 through 24 {
        &.#{$class}#{$n} {
          width: ($n / 24) * 100%;
        }
      }

      $class-prefix: offset-ipad-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
    
    @media (min-width: 769px){
      $class: col-narrow-pc-;
      @for $n from 1 through 24 {
        &.#{$class}#{$n} {
          width: ($n / 24) * 100%;
        }
      }

      $class-prefix: offset-narrow-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }

    @media (min-width: 993px)  {
      $class: col-pc-;
      @for $n from 1 through 24 {
        &.#{$class}#{$n} {
          width: ($n / 24) * 100%;
        }
      }

      $class-prefix: offset-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }

    @media (min-width: 1201px) {
      $class: col-wide-pc-;
      @for $n from 1 through 24 {
        &.#{$class}#{$n} {
          width: ($n / 24) * 100%;
        }
      }

      $class-prefix: offset-wide-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }

  }


</style>