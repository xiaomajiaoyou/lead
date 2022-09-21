<template>
  <div class="l-classification-box">
    <header class="l-nav">分类</header>
    

    <navlist></navlist>
  </div>
</template>


<script>
import navlist from "@/components/h-navlist.vue";
import Novelranking from "@/components/comp-Novelranking.vue";
import Novelranking2 from "@/components/comp-Novelranking2.vue";
import Novelranking3 from "@/components/comp-Novelranking3.vue";
import Novelranking4 from "@/components/comp-Novelranking4.vue";
import Novelranking5 from "@/components/comp-Novelranking5.vue";

export default {
  name: "classification",
  components: {
    navlist: navlist,
    Novelranking: Novelranking,
    Novelranking2: Novelranking2,
    Novelranking3: Novelranking3,
    Novelranking4: Novelranking4,
    Novelranking5: Novelranking5,
  },
};
</script>

<style lang="scss" scoped>
.l-classification-box {
  .l-nav {
    width: 100%;
    height: 60px;
    background-color: #fec400;
    text-align: center;
    line-height: 60px;
    font-size: 18px;
    font-weight: 600;
  }
}
</style>