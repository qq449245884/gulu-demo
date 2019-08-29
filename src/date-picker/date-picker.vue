<template>
  <div ref='wrapper' v-click-outside="onBlurInput" style="border:1px solid red">
    <g-popover position='bottom' :container='popoverContainer'>
      <GInput type='text' @focus="onFocusInput" :value='formattedValue'/>
      <template slot='content'>
        <div class="gulu-data-picker-pop" @selectstart.prevent>
          <div class="gulu-date-picker-nav">
            <span :class="c('prevYear', 'navItem')" @click="onClickPrevYear">
              <g-icon name='leftleft'></g-icon>
            </span>
            <span :class="c('prevMonth', 'navItem')" @click="onClickPrevMonth">
              <g-icon name='left'></g-icon>
            </span>
            <span :class="c('yearAndMonth')" @click="onClickMonth">
              <span>{{this.display.year}}年</span>
              <span>{{this.display.month+1}}月</span>
            </span>
            <span :class="c('nextMonth', 'navItem')" @click="onClickNextMonth">
              <g-icon name='right'></g-icon>
            </span>
            <span :class="c('nextYear', 'navItem')" @click="onClickNextYear">
              <g-icon name='rightright'></g-icon>
            </span>
          </div>
          <div class="gulu-date-picker-panels">
            <div class="gulu-date-picker-content">
              <template v-if='mode === "month"'>
                <div :class="c('selectMonth')">
                  选择年和月
                </div>
              </template>
              <template v-else>
                <div :class="c('weekdays')">
                  <span :class="c('weekday')" v-for="i in 7" :key="i"
                  >{{weekdays[i-1]}}</span>
                </div>
                <div :class="c('row')" v-for='i in 6' :key="i">
                  <span :class="[c('cell'), {currentMonth: isCurrentMonth(getVisibleDay(i, j))}]" 
                    v-for='j in 7' :key="j"
                    @click="onClickCell(getVisibleDay(i, j))"
                  >
                    {{getVisibleDay(i,j).getDate()}}
                  </span>
                </div>
              </template>
            </div>
          </div>
          <div class="gulu-date-pciker-actions">
          </div>
        </div>
      </template>
    </g-popover>
  </div>
</template>
<script>

import GInput from '../input'
import GIcon from '../icon'
import ClickOutside from '../click-outside'
import GPopover from '../popover'
import helper from './helper'
export default {
  name: 'GuluDatePicker',
  components: {
    GInput, GIcon, GPopover
  },
  directives: {ClickOutside},
  props: {
    firstDayOfWeek: {
      type: Number,
      default: 1
    },
    value: {
      type: Date,
      default: () => new Date()
    }
  },
  data () {
    let [year, month] = helper.getYearMonthDate(this.value)
    return {
      mode: 'days',
      popoverContainer: null,
      weekdays: ['一','二','三','四','五','六','日'],
      display: {year, month}
    }
  },
  mounted () {
    this.popoverContainer = this.$refs.wrapper
  },
  computed: {
    visibleDays () {
      let date = new Date(this.display.year, this.display.month)
      let first = helper.firstDayOfMonth(date)
      let last = helper.lastDayOfMonth(date)
      let array = []
      // let [year, month, day] = helper.getYearMonthDate(date)
      // for(let i = first.getDate(); i <= last.getDate(); i++) {
      //   array.push(new Date(year, month, i))
      // }
      let n = first.getDay()
      let x = first - (n === 0 ? 6 : n - 1) * 3600 * 24 * 1000
      console.log(new Date(x))
      for(let i =0; i< 42; i++) {
        array.push(new Date(x + i *3600*24*1000))
      }
      return array;
      // let array2 = []
      // for(let i = 0; i < n; i++) {
      //   array2.push(new Date(year, month, -i))
      // }
      // array2 = array2.reverse()
      // let m = 42 - array.length - array2.length
      // let array3 = []
      // for(let i = 1; i<=m;  i++) {
      //   array3.push(new Date(year, month + 1, i))
      // }
      // return [...array2, ...array, ...array3]
    },
    formattedValue () {
      const [year, month, day] = helper.getYearMonthDate(this.value)
      return `${year}-${month + 1}-${day}`
    }
  },
  methods: {
    c (...classNames) {
      return classNames.map(className => `gulu-date-picker-${className}`)
    },
    onFocusInput () {
      this.popVisible = true
    },
    onBlurInput () {
      this.popVisible = false
    },
    onClickMonth () {
      if (this.mode !== 'month') {
        this.mode = 'month'
      } else {
        this.mode = 'day'
      }
    },
    onClickCell (date) {
      if (this.isCurrentMonth(date)) {
        this.$emit('input', date)
      }
    },
    getVisibleDay(row, col) {
      return this.visibleDays[(row-1)*7+col-1]
    },
    isCurrentMonth (date) {
      let [year1, month1] = helper.getYearMonthDate(date)
      return year1 === this.display.year && month1 === this.display.month
    },
    onClickPrevYear () {
      const oldDate = new Date(this.display.year, this.display.month)
      const newDate = helper.addYear(oldDate, -1)
      const [year, month] = helper.getYearMonthDate(newDate)
      this.display = {year, month}
    },
    onClickPrevMonth () {
      const oldDate = new Date(this.display.year, this.display.month)
      const newDate = helper.addMonth(oldDate, -1)
      const [year, month] = helper.getYearMonthDate(newDate)
      this.display = {year, month}
    },
    onClickNextMonth () {
      const oldDate = new Date(this.display.year, this.display.month)
      const newDate = helper.addMonth(oldDate, 1)
      const [year, month] = helper.getYearMonthDate(newDate)
      this.display = {year, month}
    },
    onClickNextYear () {
      const oldDate = new Date(this.display.year, this.display.month)
      const newDate = helper.addYear(oldDate, 1)
      const [year, month] = helper.getYearMonthDate(newDate)
      this.display = {year, month}
    }
  }
}
</script>

<style scope lang='scss'>
  .gulu-date-picker{
    &-nav{
      display: flex;
    }
    &-popWrapper {
      padding: 0;
    }
    &-cell{
      color: #ddd;
      &.currentMonth{
        color:#333;
      }
    }
    &-navItem,&-cell, &-weekday{
      width: 32px;
      height: 32px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
    &-yearAndMonth{
      margin: auto;
    }
    &-selectMonth {
      width: 224px;
      width: 224px;
    }
    /deep/ .gulu-popover-content-wrapper{
      padding: 0;
    }
  }
</style>