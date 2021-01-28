<template>
  <div class="goods-list">
    <GoodsListItem
      v-for="(item, index) in goods"
      :key="index"
      :goodsItem="item"
      class="item"
    >
    </GoodsListItem>
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";
export default {
  name: "GoodsList",
  components: {
    GoodsListItem,
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
  justify-content: space-around;
}

.goods-list .item {
  width: 48%;
}
</style>