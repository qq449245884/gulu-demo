<template>
  <div>
    <!-- <Cascader :source.sync='source' height='200px' 
    :selected.sync='selected' @update:selected='xxx' :load-data='loadData'/> -->
    <!-- <Slides :selected.sync='selected'>
      <SlidesItem name='1'>
        <div class="box">1</div>
      </SlidesItem>
      <SlidesItem name='2'>
        <div class="box">2</div>
      </SlidesItem>
      <SlidesItem name='3'>
        <div class="box">3</div>
      </SlidesItem>
    </Slides> -->
    <!-- <Nav :selected.sync='selected'>
      <NavItem name='home'>首页</NavItem> 
      <SubNav name='about'>
        <template slot="title">关于</template>
        <NavItem name='culture'>企业文件</NavItem>
        <NavItem name='developers'>开发团队</NavItem>
        <SubNav name='contacts'>
          <template slot="title">联系方式</template>
          <NavItem name='wechat'>微信</NavItem>
          <NavItem name='qq'>QQ</NavItem>
          <SubNav name='phone'>
            <template slot="title">手机</template>
            <NavItem name='yidong'>移动</NavItem>
            <NavItem name='dianxin'>电信</NavItem>
          </SubNav>
        </SubNav>
      </SubNav>
      <NavItem name='hire'> 
        <template slot="title">关于</template></NavItem>
    </Nav> -->
    <!-- <Pager :totalPage='20' :currentPage = '3'/> -->
    <!-- {{selected}}
    <div style="margin:100px 20px 0 20px">
      <GTable :columns="columns" :dataSource='dataSource'  bordered 
        :selectedItems.sync='selected' :orderBy.sync='orderBy'
        @changeItem='changeItem' :loading='loading' :height='400'
        expend-field="description"
      >
        <template slot-scope="xxx">
          <button>1{{xxx}}</button>
          <button>2</button>
        </template>
      </GTable>
    </div> -->


<!-- 
    <div style="margin:100px 20px 0 20px">
      <GTable :columns="columns" :dataSource='dataSource' bordered compact :striped='false'/>
    </div>

    <div style="margin:100px 20px 0 20px">
      <GTable :columns="columns" :dataSource='dataSource' bordered/>
    </div> -->


    <!-- <g-upload accept='image/*' method='POST' action='http://127.0.0.1:3001/upload' name='file' 
      :fileList.sync='fileList' :parseResponse='parseResponse'>
      <button>上传</button>
      <template slot="tips">
        <div>只能上传 300kb 以内的 png, jpg, jpeg 文件</div>
      </template>
    </g-upload>
    <button>保存</button> -->
    <!-- <g-sticky :distance="100">
      <div style="border:1px solid red">我是粘结内容</div>
    </g-sticky> -->
    <!-- <GDatePicker :value='d' @input='d = $event'/> -->
      <g-scroll style="width:300px;height:400px;">
        <p>1111111111111111111111111111111111111111111111111111111</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
        <p>6</p>
        <p>7</p>
        <p>8</p>
        <p>9</p>
        <p>10</p>
        <p>11</p>
        <p>12</p>
        <p>13</p>
        <p>14</p>
        <p>15</p>
        <p>16</p>
        <p>17</p>
        <p>18</p>
        <p>19</p>
        <p>20</p>
        <p>21</p>
        <p>22</p>
        <p>23</p>
        <p>24</p>
        <p>25</p>
        <p>26</p>
        <p>27</p>
        <p>28</p>
        <p>29</p>
        <p>30</p>
        <p>31</p>
        <p>32</p>
        <p>33</p>
        <p>34</p>
        <p>35</p>
        <p>36</p>
        <p>37</p>
        <p>38</p>
        <p>39</p>
        <p>40</p>
        <p>41</p>
        <p>42</p>
        <p>43</p>
        <p>44</p>
        <p>45</p>
        <p>46</p>
        <p>47</p>
        <p>48</p>
        <p>49</p>
        <p>50</p>
        <p>51</p>
        <p>52</p>
        <p>53</p>
        <p>54</p>
        <p>55</p>
        <p>56</p>
        <p>57</p>
        <p>58</p>
        <p>59</p>
        <p>60</p>
        <p>61</p>
        <p>62</p>
        <p>63</p>
        <p>64</p>
        <p>65</p>
        <p>66</p>
        <p>67</p>
        <p>68</p>
        <p>69</p>
        <p>70</p>
        <p>71</p>
        <p>72</p>
        <p>73</p>
        <p>74</p>
        <p>75</p>
        <p>76</p>
        <p>77</p>
        <p>78</p>
        <p>79</p>
        <p>80</p>
        <p>81</p>
        <p>82</p>
        <p>83</p>
        <p>84</p>
        <p>85</p>
        <p>86</p>
        <p>87</p>
        <p>88</p>
        <p>89</p>
        <p>90</p>
        <p>91</p>
        <p>92</p>
        <p>93</p>
        <p>94</p>
        <p>95</p>
        <p>96</p>
        <p>97</p>
        <p>98</p>
        <p>99</p>
        <p>100</p>
      </g-scroll>
      <div id="test" draggable="true"
        style="height:100px; width:100px;border:1px solid red;position:absolute; top:0;left:0"></div>
  </div>
</template>
<script>
import Nav from './nav/nav'
import NavItem from './nav/nav-item'
import SubNav from './nav/sub-nav'
import Pager from './pager'
import GTable from './table/table'
import GUpload from './uploader'
import GSticky from './sticky'
import GDatePicker from './date-picker/date-picker'
import GScroll from './scroll'
// import Cascader from './cascader/cascader'
// import db from '../test/fixtures/db'
// import {removeListener} from './click-outside'
// import Slides from './slides/slides'
// import SlidesItem from './slides/slides.item'
// function ajax(parentId = 0, success, fail) {
//   let id = setTimeout(() => {
//     let result = db.filter((item) => item.parent_id === parentId)
//     success(result)
//   }, 3000)
//   return id
// }

// function ajax (parentId = 0) {
//   return new Promise((success, fail) => {
//     setTimeout(()=>{
//       let result = db.filter((item) => item.parent_id === parentId)
//       result.forEach(node => {
//         if (db.filter(item => item.parent_id === node.id).length > 0) {
//           node.isLeaf = false
//         } else {
//           node.isLeaf = true
//         }
//       })
//       success(result)
//     }, 300)
//   })
// }

export default {
  components: {
    Nav,
    NavItem,
    SubNav,
    Pager,
    GTable,
    GUpload,
    GSticky,
    GDatePicker,
    GScroll
  },
  data () {
    return {
      d: new Date(),
      selected: [],
      fileList: [],
      loading: false,
      orderBy: {
        name: 'asc',
        score: 'desc'
      },
      columns: [
        { text: '姓名', field: 'name', width: 100},
        { text: '分数', field: 'score', width: 200}
      ],
      dataSource: [
        {id:1, name: '方方', score: 100, description: 'xxxx xxxx'},
        {id:2, name: '小智', score: 99, description: 'yyyy yyyy'},
        {id:3, name: '小红', score: 100},
        {id:4, name: '小紫', score: 99},
        {id:5, name: '小六', score: 100},
        {id:6, name: '小其', score: 99},
        {id:7, name: '方方', score: 100},
        {id:8, name: '小智', score: 99},
        {id:9, name: '小红', score: 100},
        {id:10, name: '小紫', score: 99},
        {id:11, name: '小六', score: 100},
        {id:12, name: '小其', score: 99},
        {id:13, name: '方方', score: 100},
        {id:14, name: '小智', score: 99},
        {id:15, name: '小红', score: 100},
        {id:16, name: '小紫', score: 99},
        {id:17, name: '小六', score: 100},
        {id:18, name: '小其', score: 99},
        {id:19, name: '小六', score: 100},
        {id:20, name: '小其', score: 99}
      ]
    }
  },
  mounted () {
    let test = document.querySelector('#test')
    let startPosition
    let endPosition
    test.addEventListener('dragstart', (e) => {
      let {screenX: x, screenY: y} = e
      startPosition = [x, y]
    })
    test.addEventListener('dragend', (e) => {
      let {screenX: x, screenY: y} = e
      endPosition = [x, y]
      let deltaX = endPosition[0] - startPosition[0]
      let deltaY = endPosition[1] - startPosition[1]
      test.style.left = parseInt(test.style.left) + deltaX + 'px'
      test.style.top = parseInt(test.style.top) + deltaY + 'px'
      
    })
  },
  created () {
    // ajax(0).then(result => {
    //   this.source = result
    // })

  },
  destroyed () {
    removeListener()
  },
  methods: {
    x () {
      alert('s')
    }, 
    parseResponse (response) {
      let object = JSON.parse(response)
      let url = `http://127.0.0.1:3001/preview/${object.id}` 
      return url
    },
    // loadData (node, updateSource) {
    //   let {name, id, parent_id} = node
    //   ajax(id).then(result => {
    //     updateSource(result)
    //   })
    // },
    // xxx() {
    //   ajax(this.selected[0].id).then(result => {
    //     let lastLevelSelected = this.source.filter(item => item.id === this.selected[0].id)[0]
    //     lastLevelSelected.children = result
    //     this.$set(lastLevelSelected, 'children', result)
    //   })
    // }
    changeItem (obj) {
      const {selected, item, index} = obj
      if (selected) {
        this.selected.push(item)
      } else {
        const index = this.selected.indexOf(item)
        this.selected.splice(index, 1)
      }
    }
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .box {
    width: 100%;
    height: 350px;
    background: #ddd;
  }
  .parent{
    height: 400px;
    width: 400px;
    overflow: hidden;
    background: #ddd;
    box-sizing: border-box;
  }
  .child{
    border: 1px solid red;
  }
</style>

 