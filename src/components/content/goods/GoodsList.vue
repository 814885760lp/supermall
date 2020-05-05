<template>
  <div class="goods">
    <goods-list-item v-for="item in goods" :goods-item="item" />
  </div>
</template>

<script>
import GoodsListItem from "components/content/goods/GoodsListItem";

export default {
  name: "GoodsList",
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    GoodsListItem
  }
};
</script>

<style>
.goods {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>