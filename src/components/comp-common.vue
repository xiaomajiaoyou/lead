<template>
  <div class="c-common">
    <div class="c-common-content">
      <div class="common-content-top">
        <p>常用功能</p>
        <div class="content-top-lis">
          <ul>
            <li>
              <div class="box">
                <i class="iconfont icon-lishijilu"></i>
                <p>浏览历史</p>
              </div>
            </li>
            <li>
              <div class="box">
                <i class="iconfont icon-wodeguanzhu"></i>
                <p>我的关注</p>
              </div>
            </li>
            <li>
              <div class="box">
                <i class="iconfont icon-1"></i>
                <p>阅读时长</p>
              </div>
            </li>
          </ul>
          <ul class="content-top-uls">
            <li>
              <div class="box">
                <i class="iconfont icon-xiaoxizhongxin"></i>
                <p>消息中心</p>
              </div>
            </li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
      <div class="common-content-bottom">
        <p>设置</p>
        <ul>
          <li>清除缓存 <span>0.01MB</span></li>
          <li>账号与安全</li>
          <li>用户协议</li>
          <li>隐私政策</li>
          <li>联系方式</li>
          <li>帮助中心</li>
          <li>版本更新<span>1.0.9</span></li>
        </ul>
        <div class="common-ftoor">
          <button @click="myExit" class="common-ftoor-btn">退出登入</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Common",
  data() {
    return {
      boo: true,
    };
  },
  methods: {
    myExit() {
      let isExit = JSON.parse(localStorage.getItem("str"));
      if (isExit == false) {
        this.$emit("my-click", this.boo);
      } else {
        alert("当前未登录");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.c-common {
  width: 80%;
  height: 100%;
  margin-left: 10%;
  padding-bottom: 70px;
  .c-common-content {
    width: 100%;
    .common-content-top {
      width: 100%;
      p {
        font-size: 22px;
        font-weight: 600;
      }
      .content-top-lis {
        width: 100%;
        ul {
          width: 300px;
          height: 130px;
          display: flex;
          margin: 0;
          padding: 0;
          li {
            flex-basis: 25%;
            align-items: center;
            flex-basis: 33.3333%;
            flex-shrink: 0;
            flex-wrap: 1;
            height: 80px;
            line-height: 80px;
            font-size: 12px;
            color: #999999;
            text-align: center;
            .box {
              width: 75px;
              height: 75px;
              background-color: #f3f2f2;
              position: relative;
              i {
                font-size: 34px;
                color: #fec603;
                margin-top: -10px;
                display: inline-block;
              }
              p {
                margin: 0;
                padding: 0;
                font-size: 12px;
                margin-top: -62px;
                font-weight: 500;
              }
            }
          }
        }
        .content-top-uls {
          margin-top: -15px;
        }
      }
    }
    .common-content-bottom {
      width: 100%;
      p {
        margin: 0;
        margin-bottom: 10px;
      }
      ul {
        li {
          font-size: 12px;
          color: #8d9699;
          height: 30px;
          line-height: 30px;
          span {
            margin-left: 60%;
          }
        }
      }
      .common-ftoor {
        width: 100%;
        .common-ftoor-btn {
          width: 100%;
          height: 40px;
          border: none;
          background-color: #ffc501;
          color: white;
          border-radius: 10px;
        }
      }
    }
  }
}
</style>