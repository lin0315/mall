<template>
  <div id="category">
    <NavBar class="category-navbar">
      <div slot="center">商品分类</div>
    </NavBar>
    <div class="category-left"></div>
    <div class="category-right"></div>
  </div>
</template>

<script>
import { getCategory } from "network/category";

import NavBar from "components/common/navbar/NavBar";

// import BScroll from "better-scroll";

export default {
  name: "Category",
  components: {
    NavBar,
  },
  data() {
    return {
      categoryList: [],
      // scroll: null,
    };
  },
  created() {
    getCategory().then((res) => {
      this.categoryList = res.data.category.list;
      console.log(this.categoryList);
    });
  },
  // 组件创建完后调用
  // mounted() {
  //   this.scroll = new BScroll(this.$refs.aaaa, {
  //     probeType: 3,
  //     pullUpLoad: true,
  //   });

  //   this.scroll.on("scroll", (position) => {});

  //   this.scroll.on("pullingUp", () => {
  //     console.log("上啦加载更多");
  //   });
  // },
  // methods: {
  //   btnClick() {
  //     console.log("btnClick");
  //   },
  //   divClick() {
  //     console.log("divClick");
  //   },
  // },
};
</script>

<style scoped>
#category {
  height: 100vh;
  display: flex;
}

.category-navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: var(--color-tint);
  color: #ffffff;
}

/* .category-left {
  width: 100px;
  background-color: pink;
}

.category-right {
  flex: 1;
} */
</style>
