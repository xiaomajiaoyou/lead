<template>
  <div class="title">
    <h3>
      <slot></slot>
    </h3>
  </div>
</template>

<script>
export default {
  name: "comTitle",
};
</script>

<style lang="scss" scoped>
.title {
  margin-bottom: 10px;
  h3 {
    font-size: 16px;
    padding-left: 20px;
    position: relative;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #f0f0f0;
  }
  .title-txt {
    margin-left: 65%;
    font-size: 12px;
    color: #ccc;
  }
}
</style>