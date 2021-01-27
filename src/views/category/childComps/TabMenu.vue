<template>
  <Scroll>
    <ul id="tab-menu">
      <li
        class="menu-item"
        v-for="(item, index) in categories"
        :key="index"
        @click="menuItemClick(index)"
        :class="index === currentIndex ? 'active' : ''"
      >
        {{ item.title }}
      </li>
    </ul>
  </Scroll>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";

export default {
  name: "TabMenu",
  components: {
    Scroll,
  },
  props: {
    categories: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    menuItemClick(index) {
      this.currentIndex = index;
      this.$emit("leftClick", index);
    },
  },
};
</script>

<style scoped>
#tab-menu {
  background-color: #f6f6f6;
  height: 100%;
  width: 100px;
  box-sizing: border-box;
}

.menu-item {
  height: 45px;
  text-align: center;
  line-height: 45px;
  font-size: 14px;
  list-style: none;
}

.active {
  font-weight: 700;
  color: var(--color-high-text);
  background-color: #fff;
  border-left: 3px solid var(--color-high-text);
}
</style>