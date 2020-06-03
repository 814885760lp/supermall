import {
  debouce
} from "common/utils";
import BackTop from "components/content/backTop/BackTop";

export const itemListenerMixin = {
  data() {
    return {
      itemListener: null
    }
  },
  components: {
    BackTop
  },
  mounted() {
    //监听item中图片加载完成
    const refresh = debouce(this.$refs.scroll.refresh, 50);
    this.itemListener = () => {
      refresh();
    };
    this.$bus.$on("itemImageLoad", this.itemListener);
  }
}

export const minxin = {
  data() {
    return {
      isShowBackTop: false,
    }
  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
  }
}
