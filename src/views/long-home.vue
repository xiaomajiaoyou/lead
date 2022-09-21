<template>
  <div class="m-home">
    <div class="content">
      <router-view />
    </div>

    <footer class="m-footer">
      <ul>
        <li @click="addClickEvent(0)">
          <router-link to="/home/bookshelf" active-class="active" exact>
            <i class="iconfont icon-shu"></i>
            <span class="m-txt">书架</span>
          </router-link>
        </li>
        <li @click="addClickEvent(1)">
          <router-link to="/home/Bookcity" active-class="active" exact>
            <i class="iconfont icon-shu1"></i>
            <span class="m-txt">书城</span>
          </router-link>
        </li>
        <li>
          <router-link to="/home/classification/Novelranking" active-class="active" exact>
            <i class="iconfont icon-fenleiorguangchangorqita"></i>
            <span class="m-txt">分类</span>
          </router-link>
        </li>
        <li @click="addClickEvent(3)">
          <router-link to="/home/myInformation" active-class="active" exact>
            <i class="iconfont icon-wode"></i>
            <span class="m-txt">我的</span>
          </router-link>
        </li>
      </ul>
    </footer>

    
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      navIndex: 0,
    };
  },
  methods: {
    addClickEvent(index) {
      this.navIndex = index;
    },
  },
 
};
</script>

<style lang="scss" scoped>
.m-home {
  max-width: 475px;
  min-width: 320px;
  .m-footer {
    height: 50px;
    width: 100%;
    background-color: white;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 100;
    box-shadow: 1px 1px 8px #ccc;
    ul {
      height: 50px;
      display: flex;
      li {
        flex: 1;
        align-items: center;
        flex-basis: 25%;
        flex-shrink: 0;
        height: 32px;
        line-height: 32px;
        position: relative;
        text-align: center;
        i {
          font-size: 20px;
          // color:#f0f0f0;
        }
        .m-txt {
          font-size: 12px;
          position: absolute;
          left: 34.5px;
          top: 16px;
          margin-top: 8px;
          text-align: center;
        }
        .active {
          color: red;
        }
      }
    }
  }
}
</style>