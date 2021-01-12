<template>
  <div class="goods-item">
    <img :src="goodsItems.show.img" alt="" />
    <div class="goods-info">
      <p>{{ goodsItems.title }}</p>
      <span class="price">{{ goodsItems.price }}</span>
      <span class="collect">{{ goodsItems.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItems: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.goods-item {
  width: 48%;
}
.goods-item img {
  width: 100%;
  border-radius: 5px;
}

.goods-info {
  font-size: 12px;
  overflow: hidden;
  text-align: center;
  margin: 4px 0 6px;
}
.goods-info p {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin-bottom: 3px;
}

.price {
  color: var(--color-high-text);
  margin-right: 20px;
}

.collect {
  position: relative;
  margin-left: 2px;
}
.collect::before {
  content: "";
  position: absolute;
  top: -1px;
  left: -15px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>