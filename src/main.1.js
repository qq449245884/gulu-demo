import Vue from 'vue'

// import Button from './button/button'
import Icon from './icon'
import Tabs from './tabs/tabs'
import TabHead from './tabs/tabs-head'
import TabBody from './tabs/tabs-body'
import TabItem from './tabs/tabs-item'
import TabPane from './tabs/tabs-pane'
import Popover from './popover'
import Collapse from './collapse/collapse'
import CollapseItem from './collapse/collapse-item.vue'
import Cascader from './cascader/cascader'

// Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', TabHead)
Vue.component('g-tabs-body', TabBody)
Vue.component('g-tabs-item', TabItem)
Vue.component('g-tabs-pane', TabPane)
Vue.component('g-popover', Popover)
Vue.component('g-collapse', Collapse)
Vue.component('g-collapse-item', CollapseItem)
Vue.component('g-cascader', Cascader)


new Vue({
  el: '#app',
  data: {
    selectedTab: ['2'],
    source: [
      {
        name: '浙江',
        children: [
          {
            name: '杭州',
            children: [
              {name: '上城'},
              {name: '下城'},
              {name: '江干'},
            ]
          },
          {
            name: '嘉兴',
            children: [
              {name: '南湖'},
              {name: '秀州'},
              {name: '家家'},
            ]
          },
          {name: '湖州'}
        ]
      },
      {
        name: '福建',
        children: [
          {
            name: '厦门',
            children: [
              {name: '湖里'},
              {name: '踩唐'}
            ]
          }
        ]
      }
    ]
  }
})