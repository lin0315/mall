<template>
  <div id="category">
    <NavBar class="category-navbar">
      <div slot="center">商品分类</div>
    </NavBar>
    <div class="content">
      <TabMenu :categories="categories" @leftClick="leftClick"></TabMenu>
      <Scroll id="tab-content">
        <TabContentCategory :subcategories="subcategories"></TabContentCategory>
        <TabControl
          class="good-list"
          :titles="['综合', '新品', '销量']"
        ></TabControl>
        <GoodsList class="good-list" :goods="goodsList"></GoodsList>
      </Scroll>
    </div>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";

import TabMenu from "./childComps/TabMenu";
import TabContentCategory from "./childComps/TabContentCategory";

import {
  getCategory,
  getSubcategory,
  getCategoryDetail,
} from "network/category";

export default {
  name: "Category",
  components: {
    NavBar,
    TabMenu,
    Scroll,
    TabContentCategory,
    TabControl,
    GoodsList,
  },
  data() {
    return {
      categories: [],
      subcategories: [],
      goodsList: [],
    };
  },
  created() {
    // 获取右边分类数据
    getCategory().then((res) => {
      this.categories = res.data.category.list;
      console.log(this.categories);
    });
  },
  methods: {
    leftClick(index) {
      console.log(index);
      // 请求子分类数据
      getSubcategory(this.categories[index].maitKey).then((res) => {
        // console.log(res);
        this.subcategories = res.data.list;

        // 请求推荐数据
        getCategoryDetail(this.categories[index].miniWallkey, "pop").then(
          (res) => {
            console.log(res);
            this.goodsList = res;
          }
        );
      });
    },
  },
};
</script>

<style scoped>
#category {
  position: relative;
  height: 100vh;
}

.category-navbar {
  /* position: fixed;
  top: 0;
  left: 0;
  right: 0; */
  background-color: var(--color-tint);
  color: #ffffff;
}

.content {
  position: absolute;
  display: flex;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 49px;
  overflow: hidden;
}

#tab-content {
  height: 100%;
  flex: 1;
}

.good-list {
  width: 50%;
}
</style>
