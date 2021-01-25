<template>
  <div class="BottomBar">
    <div class="button">
      <CheckButton :isChecked="isSelectAll" @click.native="checkClick" />
      <span class="button-text">全选</span>
    </div>
    <span class="price">合计:￥{{ totalPrice }}</span>
    <span class="product" @click="productClick">去结算({{ checkLength }})</span>
  </div>
</template>

<script>
import CheckButton from "./CheckButton";

import { mapGetters } from "vuex";

export default {
  name: "CartBottomBar",
  components: {
    CheckButton,
  },
  computed: {
    ...mapGetters(["cartList"]),
    totalPrice() {
      return this.cartList
        .filter((item) => item.checked)
        .reduce((preValue, item) => {
          return preValue + item.count * item.price;
        }, 0)
        .toFixed(2);
    },
    checkLength() {
      return this.cartList.filter((item) => item.checked).length;
    },
    isSelectAll() {
      if (this.cartList.length === 0) return false;
      return this.cartList.every((item) => item.checked);
    },
  },
  methods: {
    checkClick() {
      if (this.isSelectAll) {
        this.cartList.forEach((item) => (item.checked = false));
      } else {
        this.cartList.forEach((item) => (item.checked = true));
      }
    },
    productClick() {
      if (
        this.cartList.length === 0 ||
        !this.cartList.some((item) => item.checked)
      ) {
        this.$toast.show("请选择要购买的商品");
      }
    },
  },
};
</script>

<style scoped>
.BottomBar {
  display: flex;
  position: fixed;
  bottom: 49px;
  right: 0;
  left: 0;
  height: 44px;
  align-items: center;
  text-align: center;
  background-color: #eee;
  box-shadow: 0 -2px 3px rgba(0, 0, 0, 0.2);
}

.button {
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
}
.button-text {
  margin-left: 3px;
}

.price {
  flex: 4;
  margin-right: 30px;
}

.product {
  flex: 2;
  line-height: 49px;
  color: #fff;
  background-color: red;
}
</style>