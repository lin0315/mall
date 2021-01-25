<template>
  <div id="toast" v-show="isShow">
    <span>{{ messages }}</span>
  </div>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {
      messages: "",
      isShow: false,
    };
  },
  methods: {
    show(messages = "默认消息", duration = 2000) {
      this.isShow = true;
      this.messages = messages;

      setTimeout(() => {
        this.isShow = false;
        this.messages = "";
      }, duration);
    },
  },
};
</script>

<style scoped>
#toast {
  padding: 10px 12px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 7px;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  z-index: 999;
}
</style>