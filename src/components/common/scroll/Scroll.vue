<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "Scroll",
  data() {
    return {
      scroll: null
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      tyoe: Boolean,
      default: false
    }
  },
  mounted() {
    //1.创建BScoll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    });

    //2.监听滚动的位置
    if (this.probeType === 2 || this.probeType === 3) {
      this.scroll.on("scroll", position => {
        // console.log(position);
        this.$emit("scroll", position);
      });
    }

    //3.监听上拉事件
    if (this.probeType === 2 || this.probeType === 3) {
      this.scroll.on("pullingUp", () => {
        this.$emit("pullingUp");
      });
    }
  },

  methods: {
    //定位
    scrollTo(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    //上拉的结束
    finishPullUp() {
      this.scroll.finishPullUp();
    },
    //刷新
    refresh() {
      this.scroll && this.scroll.refresh();
    },
    //跳转
    getScrollY() {
      return this.scroll ? this.scroll.y : 0;
    }
  }
};
</script>

<style>
</style>