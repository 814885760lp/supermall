<template>
  <div class="car-list">
    <scroll class="content">
      <cart-list-item v-for="item in cartList1" :key="item.iid" :item-info="item"></cart-list-item>
    </scroll>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
import CartListItem from "./CartListItem";
import { mapGetters } from "vuex";

export default {
  name: "CartList",
  components: {
    Scroll,
    CartListItem
  },
  props: {
    cartList1: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  computed: {
    ...mapGetters(["cartList"])
  }
};
</script>

<style scoped>
.content {
  height: calc(100vh - 133px);
}
</style>