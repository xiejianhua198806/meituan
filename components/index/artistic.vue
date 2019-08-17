<template>
  <section class="m-istyle">
    <!-- 头部区域 -->
    <dl @mouseover="over">
      <dt>有格调</dt>
      <dd :class="{active:kind==='all'}" kind="all" keyword="景点">全部</dd>
      <dd :class="{active:kind==='part'}" kind="part" keyword="美食">约会聚餐</dd>
      <dd :class="{active:kind==='spa'}" kind="spa" keyword="丽人">丽人SPA</dd>
      <dd :class="{active:kind==='movie'}" kind="movie" keyword="电影">电影演出</dd>
      <dd :class="{active:kind==='travel'}" kind="travel" keyword="旅游">品质出游</dd>
    </dl>
    <!-- 内容区域 -->
    <ul class="ibody">
      <li v-for="item in cur" :key="item.id">
        <el-card :body-style="{ padding: '0px' }" shadow="never">
          <img :src="item.img" class="image" />
          <ul class="cbody">
            <li class="title">{{ item.title }}</li>
            <li class="pos">
              <span>{{ item.pos }}</span>
            </li>
            <li class="price">
              ￥
              <em>{{ item.price }}</em>
              <span>/起</span>
            </li>
          </ul>
        </el-card>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      kind: "all",
      list: {
        all: [
          {
            title: "日式美甲",
            pos: "日式美甲(上海店1)",
            price: "222",
            img:
              "//p1.meituan.net/msmerchant/99b654036b936f1173a0ddbe9cfbc0e6115463.jpg@368w_208h_1e_1c",
            url: "aaa"
          },
          {
            title: "日式美甲",
            pos: "日式美甲(上海店1)",
            price: "222",
            img:
              "//p1.meituan.net/msmerchant/99b654036b936f1173a0ddbe9cfbc0e6115463.jpg@368w_208h_1e_1c",
            url: "aaa"
          },
          {
            title: "日式美甲",
            pos: "日式美甲(上海店1)",
            price: "222",
            img:
              "//p1.meituan.net/msmerchant/99b654036b936f1173a0ddbe9cfbc0e6115463.jpg@368w_208h_1e_1c",
            url: "aaa"
          }
        ],
        part: [
          {
            title: "日式美甲1",
            pos: "日式美甲(上海店1)",
            price: "222",
            img:
              "//p1.meituan.net/msmerchant/99b654036b936f1173a0ddbe9cfbc0e6115463.jpg@368w_208h_1e_1c",
            url: "aaa"
          },
          {
            title: "日式美甲1",
            pos: "日式美甲(上海店1)",
            price: "222",
            img:
              "//p1.meituan.net/msmerchant/99b654036b936f1173a0ddbe9cfbc0e6115463.jpg@368w_208h_1e_1c",
            url: "aaa"
          },
          {
            title: "日式美甲1",
            pos: "日式美甲(上海店1)",
            price: "222",
            img:
              "//p1.meituan.net/msmerchant/99b654036b936f1173a0ddbe9cfbc0e6115463.jpg@368w_208h_1e_1c",
            url: "aaa"
          }
        ],
        spa: [
          {
            title: "日式美甲1",
            pos: "日式美甲(上海店1)",
            price: "222",
            img:
              "//p1.meituan.net/msmerchant/99b654036b936f1173a0ddbe9cfbc0e6115463.jpg@368w_208h_1e_1c",
            url: "aaa"
          },
          {
            title: "日式美甲1",
            pos: "日式美甲(上海店1)",
            price: "222",
            img:
              "//p1.meituan.net/msmerchant/99b654036b936f1173a0ddbe9cfbc0e6115463.jpg@368w_208h_1e_1c",
            url: "aaa"
          },
          {
            title: "日式美甲1",
            pos: "日式美甲(上海店1)",
            price: "222",
            img:
              "//p1.meituan.net/msmerchant/99b654036b936f1173a0ddbe9cfbc0e6115463.jpg@368w_208h_1e_1c",
            url: "aaa"
          }
        ],
        movie: [
          {
            title: "日式美甲1",
            pos: "日式美甲(上海店1)",
            price: "222",
            img:
              "//p1.meituan.net/msmerchant/99b654036b936f1173a0ddbe9cfbc0e6115463.jpg@368w_208h_1e_1c",
            url: "aaa"
          },
          {
            title: "日式美甲1",
            pos: "日式美甲(上海店1)",
            price: "222",
            img:
              "//p1.meituan.net/msmerchant/99b654036b936f1173a0ddbe9cfbc0e6115463.jpg@368w_208h_1e_1c",
            url: "aaa"
          },
          {
            title: "日式美甲1",
            pos: "日式美甲(上海店1)",
            price: "222",
            img:
              "//p1.meituan.net/msmerchant/99b654036b936f1173a0ddbe9cfbc0e6115463.jpg@368w_208h_1e_1c",
            url: "aaa"
          }
        ],
        travel: [
          {
            title: "日式美甲1",
            pos: "日式美甲(上海店1)",
            price: "222",
            img:
              "//p1.meituan.net/msmerchant/99b654036b936f1173a0ddbe9cfbc0e6115463.jpg@368w_208h_1e_1c",
            url: "aaa"
          },
          {
            title: "日式美甲1",
            pos: "日式美甲(上海店1)",
            price: "222",
            img:
              "//p1.meituan.net/msmerchant/99b654036b936f1173a0ddbe9cfbc0e6115463.jpg@368w_208h_1e_1c",
            url: "aaa"
          },
          {
            title: "日式美甲1",
            pos: "日式美甲(上海店1)",
            price: "222",
            img:
              "//p1.meituan.net/msmerchant/99b654036b936f1173a0ddbe9cfbc0e6115463.jpg@368w_208h_1e_1c",
            url: "aaa"
          }
        ]
      }
    };
  },
  computed: {
    cur() {
      // this.kind为kind对应的值
      console.log(this.kind);
      console.log(this.list[this.kind]);
      return this.list[this.kind];
    }
  },
  methods: {
    //   鼠标进入
    over(e) {
      let that = this;
      let dom = e.target;
      let tag = dom.tagName.toLowerCase();
      // 当鼠标进入到 dd 标签里面
      if (tag === "dd") {
        this.kind = dom.getAttribute("kind");
        let keyword = dom.getAttribute("keyword");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/index/artistic.scss";
</style>