<template>
  <div class="subcategories">
    <div class="sub-item" v-for="(item, index) in subcategories" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabContentCategory",
  props: {
    subcategories: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.subcategories {
  padding: 20px 0 8px 5px;
  display: flex;
  flex-wrap: wrap;
}

.sub-item {
  margin: 0 12px;
  width: 65px;
  height: 112px;
  text-align: center;
  font-size: 12px;
}

.sub-item img {
  width: 100%;
  margin-bottom: 12px;
}
</style>