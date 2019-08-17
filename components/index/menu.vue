<template>
  <div class="m-menu">
    <!-- 左侧一级目录 -->
    <dl class="nav" @mouseleave="mouseleave">
      <dt>全部分类</dt>
      <dd v-for="item in menu" :key="item.idx" @mouseenter="enter">
        <i :class="item.type"></i>
        {{item.name}}
        <span class="arrow"></span>
      </dd>
    </dl>
    <!-- 悬浮上一级目录显示对应的二级目录 -->
    <div v-if="kind" class="detail" @mouseenter="sover" @mouseleave="sout">
      <!-- 深层嵌套使用template模板 -->
      <template v-for="item in curdetail.child">
        <h4 :key="item.title">{{item.title}}</h4>
        <span v-for="(v,idxs) in item.child" :key="idxs">{{v}}</span>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      kind: "", // hover上去的名称
      menu: [
        {
          type: "food",
          name: "美食",
          child: [
            {
              title: "美食",
              child: ["代金券", "甜点饮品", "火锅", "自助餐", "小吃快餐"]
            }
          ]
        },
        {
          type: "takeout",
          name: "外卖",
          child: [
            {
              title: "外卖",
              child: ["美团外卖"]
            }
          ]
        },
        {
          type: "hotel",
          name: "酒店",
          child: [
            {
              title: "酒店星级",
              child: ["经济型", "舒适/三星", "高档/四星", "豪华/五星"]
            }
          ]
        }
      ],
      item: {
        child: [
          {
            title: "美食",
            child: ["代金券", "甜点饮品", "火锅", "自助餐", "小吃快餐"]
          }
        ]
      }
    };
  },
  computed: {
    // 鼠标移入获取类别的详细数据
    curdetail() {
      return this.menu.filter(item => item.type === this.kind)[0];
    }
  },
  methods: {
    //   鼠标移入到 左边栏中类别
    enter(e) {
      this.kind = e.target.querySelector("i").className;
    },
    // 鼠标移出左侧边栏
    mouseleave() {
      let that = this;
      this.itmer = setTimeout(function() {
        that.kind = "";
      }, 150);
    },
    // 鼠标移入到弹出层--清除定时器会继续显示
    sover() {
      clearTimeout(this.itmer);
    },
    // 鼠标移出弹出层
    sout() {
      this.kind = "";
    }
  }
};
</script>

<style lang="scss" scoped>
</style>