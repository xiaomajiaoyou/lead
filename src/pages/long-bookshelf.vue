<template>
  <div class="l-bookshelf">
    <div class="l-bookshelf-header">
      <span class="l-bookshelf-title">书架</span>
      <span class="bookshelf-header-txt">
        <i
          v-if="num == 0 ? true : false"
          @click="showClick(num, 0)"
          class="iconfont icon-row-full"
          v-bind:click="index == 0 ? 'active' : ''"
        ></i>
        <i
          v-if="num == 1 ? true : false"
          @click="showClick(num, 1)"
          class="iconfont icon-jiugongge"
          v-bind:click="index == 1 ? 'active' : ''"
        ></i>
      </span>
    </div>

    <brecommend> </brecommend>

    <bookshelfs :msg="num"> </bookshelfs>
  </div>
</template>


<script>
import brecommend from "@/components/b-recommend.vue";
import bookshelfs from "@/components/b-bookshelfs.vue";

export default {
  name: "Bookcity",
  data() {
    return {
      num: 1,
      index: 0,
    };
  },
  methods: {
    showClick(num, index) {
      if (num == 0) {
        this.num = 1;
      } else {
        this.num = 0;
      }
      this.index = index;
    },
  },
  components: {
    brecommend: brecommend,
    bookshelfs: bookshelfs,
  },
};
</script>

<style lang="scss" scoped>
.l-bookshelf {
  width: 100%;
  // min-height: 667px;
  height: 812px;
  background-color: #f7f7f7;
  .l-bookshelf-header {
    text-align: center;
    padding-top: 25px;
    margin-bottom: 20px;
    .l-bookshelf-title {
      font-size: 18px;
    }
    .bookshelf-header-txt {
      position: absolute;
      left: 90%;
    }
    .icon-row-full {
      font-size: 18px;
    }
    .icon-jiugongge {
      font-size: 18px;
    }
  }
  .b-bookshelfs-box {
    ul.active {
      display: block;
    }
  }
}
</style>