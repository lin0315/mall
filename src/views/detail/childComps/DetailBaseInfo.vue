<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="info-title">{{ goods.title }}</div>
    <div class="info-price">
      <span class="new-price">{{ goods.newPrice }}</span>
      <span class="old-price">{{ goods.oldPrice }}</span>
      <span v-if="goods.discount" class="discount">{{ goods.discount }}</span>
    </div>
    <div class="info-other">
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span>{{ goods.services[goods.services.length - 1].name }}</span>
    </div>
    <div class="info-service">
      <span v-for="index in goods.services.length - 1" :key="index">
        <img :src="goods.services[index - 1].icon" alt="" />
        <span>{{ goods.services[index - 1].name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.base-info {
  padding: 15px 8px 0;
}

.info-title {
  color: #222;
}

/* 价格样式 */
.info-price {
  margin: 10px 0 20px;
}
.new-price {
  font-size: 24px;
  color: var(--color-high-text);
}
.old-price {
  font-size: 13px;
  margin-left: 5px;
  color: #999;
  text-decoration: line-through;
}
.discount {
  position: relative;
  top: -8px;
  font-size: 12px;
  padding: 2px 5px;
  color: #fff;
  background-color: var(--color-high-text);
  border-radius: 8px;
  margin-left: 5px;
}

/* 销量那行的样式 */
.info-other {
  display: flex;
  padding-bottom: 8px;
  justify-content: space-between;
  font-size: 13px;
  color: #999;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}

/* 退货补运费那行样式 */
.info-service {
}
</style>