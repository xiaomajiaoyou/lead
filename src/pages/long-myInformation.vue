<template>
  <div>
    <!-- <my-message></my-message> -->
    <div class="c-my">
      <div class="c-my-header">
        <div class="my-header-top">
          <p class="p1">我的 <span>编辑</span></p>
          <i class="iconfont icon-wode1"></i>
          <router-link to="/login">
            <p class="p2" v-if="userShow"><button>登录</button></p>
          </router-link>
          <p class="p2" v-if="!userShow">书友-666</p>
          <p class="p3">
            <span>vip等级</span><span>普通用户</span><span>查看权益</span>
          </p>
        </div>
        <div class="my-header-nav">
          <ul>
            <li class="header-nav-txt1">
              <span>0</span>
              <p>书币</p>
            </li>
            <li>
              <span>0</span>
              <p>月票</p>
            </li>
            <li>
              <span>0</span>
              <p>推荐票</p>
            </li>
            <li>
              <button>立即充值</button>
            </li>
          </ul>
        </div>
      </div>
      <div class="exit-mask" v-if="isExit">
        <div class="exit">
          <div class="title">
            <p>是否退出登录？</p>
          </div>
          <div class="form">
            <button @click="no">取消</button>
            <button class="active" @click="Yes">确定</button>
          </div>
        </div>
      </div>
    </div>
    <common @my-click="Rev"></common>
  </div>
</template>


<script>
import myMessage from "@/components/comp-myMessage.vue";
import common from "@/components/comp-common.vue";

export default {
  name: "myInformation",
  components: {
    myMessage: myMessage,
    common: common,
  },
  data() {
    return {
      userShow: true,
      isExit: false,
    };
  },
  methods: {
    Rev(i) {
      this.userShow = false;
      this.isExit = i;
    },
    Yes() {
      localStorage.clear("str");
      this.userShow = true;
      this.isExit = false;
    },
    no() {
      this.userShow = false;
      this.isExit = false;
    },
  },
  beforeRouteEnter(to, from, next) {
    if (from.name == "Login") {
      next((vm) => {
        // let boo = JSON.parse(vm.$route.query.str);
        let boo = JSON.parse(localStorage.getItem("str"));
        // console.log(boo);
        vm.userShow = boo;
      });
    }

    next();
  },
};
</script>

<style lang="scss" scoped>
.c-my {
  .c-my-header {
    width: 100%;
    height: 260px;
    background: #ede574; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #f5e9cf,
      #efdcb1
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #f5e9cf,
      #efdcb1
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    .my-header-top {
      text-align: center;
      .p1 {
        font-size: 20px;
        margin: 0;
        text-align: center;
        padding-bottom: 15px;
        padding-top: 40px;
        span {
          font-size: 16px;
          position: absolute;
          left: 82%;
        }
      }
      .icon-wode1 {
        font-size: 40px;
        color: rgb(151, 132, 132);
        text-align: center;
      }
      .p2 {
        font-size: 12px;
        color: #b4b6aa;
        button {
          background-color: #f2e2c0;
          border: none;
          color: white;
        }
      }
      .p3 {
        font-size: 13px;
        color: #b4b6aa;
        span {
          margin-left: 8px;
        }
      }
    }
    .my-header-nav {
      width: 100%;
      height: 60px;
      border-top-left-radius: 30px;
      border-top-right-radius: 30px;
      background: #ede574; /* fallback for old browsers */
      background: -webkit-linear-gradient(
        to right,
        #e1f5c4,
        #fdca8a
      ); /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(to right, #e1f5c4, #fdca8a);
      ul {
        display: flex;
        li {
          height: 60px;
          line-height: 26px;
          text-align: center;
          margin-left: 50px;
          margin-top: 6px;
          span {
            font-size: 18px;
          }
          p {
            font-size: 12px;
            color: #b7b9b2;
            margin: 0;
            padding-bottom: 2px;
          }
          button {
            background-color: #b49a75;
            border: none;
            padding: 8px 20px;
            color: white;
            border-radius: 16px;
            margin-top: 12px;
            font-size: 12px;
            text-align: center;
          }
        }
        .header-nav-txt1 {
          margin-left: 30px;
        }
      }
    }
  }
  .exit-mask {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10000;
    .exit {
      width: 260px;
      background-color: #fff;
      border-radius: 15px;
      padding: 20px 0 0;
      overflow: hidden;
      margin: 300px auto 0;
      .title {
        margin-bottom: 20px;
        height: 40px;
        p {
          text-align: center;
          margin: 0;
          padding: 0;
        }
      }
      .form {
        width: 100%;
        height: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-top: 1px solid #ccc;
        button {
          flex-grow: 1;
          font-size: 16px;
          border: 0;
          height: 100%;
          box-sizing: border-box;
          color: #808080;
          background-color: transparent;
          &:nth-of-type(1) {
            border-right: 1px solid #ccc;
          }
          &.active {
            color: orange;
          }
        }
      }
    }
  }
}
</style>