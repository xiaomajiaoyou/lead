<template>
  <div class="web-home">
    <section class="section">
      <div class="form">
        <h6>账号登录</h6>
        <div class="form-box1">
          <i class="iconfont icon-wode2 txt-1"></i
          ><input v-model="v1" type="text" placeholder="请输入账号" />
        </div>
        <div class="form-box2">
          <i class="iconfont icon-mima txt-2"></i
          ><input type="text" v-model="v2" placeholder="请输入密码" />
        </div>
        <div>
          <button v-on:click="myLogin">登录</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      v1: "",
      v2: "",
    };
  },
  methods: {
    myLogin() {
      let proLogin = axios.get("/data/login.json");

      proLogin.then((response) => {
        let data = response.data;
        if (data.code == 2000) {
          if (
            this.v1 == data.result[0].account &&
            this.v2 == data.result[0].password
          ) {
            // location.href = "/home/myInformation";
            let boo = false;
            localStorage.setItem("str", boo);
            this.$router.push({ path: "/home/myInformation" });
          }
        } else {
          alert(data.message);
          console.log(data.message);
        }
      });

      proLogin.catch((error) => {
        console.log("请求失败");
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.web-home {
  width: 375px;
  height: 100%;
  height: 812px;
  background-color: rgb(240, 240, 240);
  h6 {
    font-size: 24px;
    font-weight: 500;
    text-align: center;
  }
  .form {
    width: 375px;
    height: 100%;
    padding: 40px 20px;
    background-color: rgb(240, 240, 240);
    box-sizing: border-box;
    .form-box1 {
      margin-top: 30px;
    }
    > div {
      position: relative;
      margin-left: 9%;
      input[type="text"] {
        width: 76%;
        height: 40px;
        margin-top: 20px;
        border: none;
        outline: none;
        border-bottom: 1px solid #ccc;
        background-color: rgb(240, 240, 240);
        text-indent: 3em;
      }
      button {
        width: 72%;
        padding: 10px 20px;
        border: 1px solid #ccc;
        background-color: #fff;
        margin-top: 30px;
        cursor: pointer;
        margin-left: 2%;
        background-color: #cccccc;
        border-radius: 25px;
        color: white;
      }
      .icon-wode2 {
        font-size: 16px;
        top: 50%;
        left: 15px;
      }
      .icon-mima {
        font-size: 24px;
        top: 43%;
        left: 10px;
      }
    }
    i {
      position: absolute;
    }
  }
}
</style>