<template>
  <div class="h-bookBox">
    <h-list>
      <template> </template>
    </h-list>

    <classification-list> </classification-list>

    <comp-title>热门推荐 <span class="title-txt">全部 ></span></comp-title>
    <recommend> </recommend>

    <comp-title>主编力荐 <span class="title-txt">全部 ></span></comp-title>
    <recommend> </recommend>

    <comp-title>本周强推 <span class="title-txt">全部 ></span></comp-title>
    <recommend> </recommend>
  </div>
</template>


<script>
import hList from "@/components/h-list.vue";
import classificationList from "@/components/h-classificationList.vue";
import recommend from "@/components/h-recommend.vue";
import compTitle from "@/components/comp-title.vue";

export default {
  name: "Bookcity",
  components: {
    hList: hList,
    classificationList: classificationList,
    recommend: recommend,
    compTitle: compTitle,
  },
  mounted(){
       axios.get("http://novel.kele8.cn/categories").then(
         res=> {
             console.log(res)
         }
      )
  }
};
</script>

<style lang="scss" scoped>
.h-bookBox {
  background-color: #ffffff;
  width: 100%;
  height: 100%;
}
</style>