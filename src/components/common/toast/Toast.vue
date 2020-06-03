<template>
  <div class="toast">
    <div v-show="isShow">{{message}}</div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  props: {
    message: {
      type: String,
      default: ""
    },
    isShow: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  background-color: rgba(0, 0, 0, 0.6);
  color: #fff;
  transform: translate(-50%, -50%);
  padding: 8px 10px;
  border-radius: 4px;
}
</style>