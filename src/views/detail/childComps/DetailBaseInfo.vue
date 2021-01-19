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
      <span
        class="info-service-item"
        v-for="index in goods.services.length - 1"
        :key="index"
      >
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
  padding-top: 15px;
}

.info-title {
  padding: 0 8px;
  color: #222;
}

/* 价格样式 */
.info-price {
  margin: 10px 8px 20px;
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
  padding: 0 8px 8px 8px;
  justify-content: space-between;
  font-size: 13px;
  color: #999;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}

/* 退货补运费那行样式 */
.info-service {
  padding: 0 8px;
  display: flex;
  justify-content: space-between;
  height: 60px;
  line-height: 60px;
  font-size: 13px;
  color: #333;
  border-bottom: 5px solid #f2f5f8;
}

.info-service-item img {
  position: relative;
  top: 2px;
  width: 14px;
  height: 14px;
}
</style>