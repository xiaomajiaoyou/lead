<template>
  <div class="h-listbox">
    <ul class="h-clist">
      <li>
        <router-link to="">
          <span class="i-box-1"><i class="iconfont icon-paihang"></i></span>
          <p class="i-txt-4">排行</p>
        </router-link>
      </li>
      <li>
        <router-link to="/home/classification">
          <span class="i-box-2"><i class="iconfont icon-fenlei"></i></span>
          <p class="i-txt-4">分类</p>
        </router-link>
      </li>
      <li>
        <router-link to="">
          <span class="i-box-3"><i class="iconfont icon-ai235"></i></span>
          <p class="i-txt-4">新书入库</p>
        </router-link>
      </li>
      <li>
        <router-link to="">
          <span class="i-box-4"><i class="iconfont icon-huo"></i></span>
          <p class="i-txt-4">精品</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "",
};
</script>

<style lang="scss" scoped>
.h-listbox {
  margin-bottom: 10px;
  .h-clist {
    width: 80%;
    height: 80px;
    background-color: rgb(255, 255, 255);
    display: flex;
    margin-left: 10%;
    box-shadow: 4px 4px 10px #ededed;
    li {
      flex: 1;
      align-items: center;
      flex-basis: 25%;
      flex-shrink: 0;
      height: 42px;
      line-height: 42px;
      text-align: center;
      align-content: center;
      span {
        display: inline-block;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        text-align: center;
        line-height: 40px;
        box-sizing: border-box;
        box-shadow: 4px 4px 10px #ededed;
      }
      .i-box-1 {
        background-color: #4ddeb9;
      }
      .i-box-2 {
        background-color: #78c2ff;
      }
      .i-box-3 {
        background-color: #fb994d;
      }
      .i-box-4 {
        background-color: #5f86ef;
      }
      i {
        color: white;
        font-size: 20px;
      }
      .icon-ai235 {
        font-size: 24px;
      }
      .icon-huo {
        font-size: 22px;
      }
      p {
        margin-top: -5px;
        padding: 0;
        font-size: 12px;
        color: #b3b4b5;
      }
    }
  }
}
</style>