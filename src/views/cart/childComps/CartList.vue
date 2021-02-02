<template>
  <div class="cart-list">
    <Scroll class="content" ref="scroll">
      <div v-if="!cartLength" class="img-show">
        <img src="../../../assets/img/cart/empty.jpg" alt="" />
      </div>
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
    ...mapGetters(["cartList", "cartLength"]),
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

.img-show img {
  margin-top: 100px;
  width: 95%;
}
</style>