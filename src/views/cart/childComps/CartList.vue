<template>
  <div class="cart-list">
    <Scroll class="content" ref="scroll">
      <CartListItem
        v-for="(item, index) in cartList"
        :key="index"
        :product="item"
      >
      </CartListItem>
    </Scroll>
  </div>
</template>

<script>
import CartListItem from "./CartListItem";

import Scroll from "components/common/scroll/Scroll";

import { mapGetters } from "vuex";

export default {
  name: "CartList",
  components: {
    CartListItem,
    Scroll,
  },
  activated() {
    this.$refs.scroll.refresh();
  },
  computed: {
    ...mapGetters(["cartList"]),
  },
};
</script>

<style scoped>
.cart-list {
  height: calc(100% - 44px - 49px - 49px);
}

.content {
  height: 100%;
  overflow: hidden;
}
</style>