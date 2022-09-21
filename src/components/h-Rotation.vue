<template>
  <div class="recommendPage">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide
        ><router-link to=""><img src="../assets/images/1.jpg" /></router-link
      ></swiper-slide>
      <swiper-slide
        ><router-link to=""><img src="../assets/images/2.jpg" /></router-link
      ></swiper-slide>
      <swiper-slide
        ><router-link to=""><img src="../assets/images/3.jpg" /></router-link
      ></swiper-slide>
      <swiper-slide
        ><router-link to=""><img src="../assets/images/4.jpg" /></router-link
      ></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
// 引入插件
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";

export default {
  components: {
    swiper,
    swiperSlide,
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        autoplay: true,
        speed: 2000,
        autoplayDisableOnInteraction: false,
        // 显示分页
        // pagination: {
        //   el: ".swiper-pagination",
        //   clickable: true, //允许分页点击跳转
        // },
        pagination: ".swiper-pagination",
        paginationClickable: true,
        // onTouchEnd: function (swiper) {
        //   swiper.startAutoplay();
        // },
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
  },
  mounted() {
    // // current swiper instance
    // // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    // console.log("this is current swiper instance object", this.swiper);
    // // this.swiper.slideTo(4, 1000, false);
  },
};
</script>

<style scoped>
.recommendPage .swiper-container {
  position: relative;
  width: 94%;
  height: 140px;
  background: pink;
  border-radius: 15px;
  margin-bottom: 15px;
}
.recommendPage .swiper-container .swiper-slide {
  width: 100%;
  line-height: 200px;
  color: #000;
  font-size: 16px;
  text-align: center;
}
.recommendPage .swiper-container .swiper-slide img {
  width: 100%;
  height: 100%;
}
</style>