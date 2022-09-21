<template>
  <div class="b-bookshelfs">
    <div v-if="!msg" class="b-bookshelfs-box">
      <ul>
        <li
          v-for="item in popularRecommend"
          v-bind:key="item.id"
          @touchstart.prevent="touchin(item, popularRecommend)"
          @touchend.prevent="cleartime(item, popularRecommend)"
        >
          <img :src="item.pigurl" alt="" />
          <p class="p1">{{ item.name }}</p>
        </li>
      </ul>
    </div>
    <div v-if="msg" class="b-bookshelfs-box2">
      <ul>
        <li
          v-for="item in popularRecommend"
          v-bind:key="item.id"
          @touchstart.prevent="touchin(item, popularRecommend)"
          @touchend.prevent="cleartime(item, popularRecommend)"
        >
          <div class="txtbox-left">
            <img :src="item.pigurl" alt="" />
          </div>
          <div class="txtbox-right">
            <p class="txtbox-right-title">{{ item.name }}</p>
            <p class="txtbox-right-txt1">{{ item.introduce }}</p>
            <p class="txtbox-right-txt2">
              <span>{{ item.author }}</span> <span> • {{ item.state }} </span>
            </p>
          </div>
        </li>
      </ul>
    </div>

    <div class="bookshelfs-Popup-bg" v-if="isShow"></div>
    <div class="b-bookshelfs-Popup" v-if="isShow">
      <p>是否删除</p>
      <button class="bookshelfs-Popup-btn1" v-if="isShow" @click="showClick()">
        取消
      </button>
      <button
        class="bookshelfs-Popup-btn2"
        @delete="deleteClick"
        @click="bClick()"
        v-if="isShow"
      >
        确定
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      popularRecommend: [],
      isShow: false,
      newpopular: [],
    };
  },
  props: {
    msg: {
      type: Number,
    },
  },
  methods: {
    getData() {
      let _this = this;
      let pro = axios.get("data/novelKu.json");
      pro.then((res) => {
        let result = res.data.result;
        let arr = [];
        result.forEach((item) => {
          let obj = {};
          obj.id = item.id;
          obj.name = item.name;
          obj.author = item.author;
          obj.state = item.state;
          obj.clickNum = item.clickNum;
          obj.introduce = item.introduce;
          obj.pigurl = item.pigurl;
          arr.push(obj);
        });
        _this.popularRecommend = arr;
      });
    },
    touchin(id, user_id) {
      clearInterval(this.Loop); //再次清空定时器，防止重复注册定时器
      this.Loop = setTimeout(
        function () {
          this.isShow = true;
        }.bind(this),
        1000
      );
    },
    cleartime(id, course_id) {
      // 这个方法主要是用来将每次手指移出之后将计时器清零
      clearInterval(this.Loop);
    },
    bClick() {
      this.deleteClick();
      this.isShow = false;
    },
    deleteClick(index) {
      this.popularRecommend.splice(index, 1);
    },
    showClick() {
      this.isShow = false;
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style lang="scss">
.b-bookshelfs {
  width: 80%;
  margin-left: 10%;
  .b-bookshelfs-box {
    background-color: white;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    //   padding-bottom: 3px;
    ul {
      width: 100%;
      height: 100%;
      clear: both;
      overflow: hidden;
      li {
        float: left;
        width: 100px;
        height: 100%;
        margin-bottom: 10px;
        img {
          width: 76px;
          height: 90px;
          margin: 10px;
        }
        .p1 {
          width: 80px;
          font-size: 14px;
          margin: 0;
          margin-left: 10px;
          padding: 0;
        }
      }
      li.active {
        float: none;
      }
    }
    &::after {
      content: "";
    }
  }
  .b-bookshelfs-box.active {
    padding-bottom: 50px;
  }
  &::after {
    content: "";
  }
  .b-bookshelfs-Popup {
    width: 64%;
    height: 120px;
    background-color: white;
    border-radius: 10px;
    position: fixed;
    top: 280px;
    left: 16%;
    box-sizing: 1px 1px 10px #ccc;
    overflow: hidden;
    p {
      margin: 0;
      padding: 0;
      margin-left: 30%;
      padding-top: 18%;
      font-size: 22px;
      box-sizing: border-box;
    }
    button {
      width: 50%;
      height: 32px;
      border: none;
      margin-top: 20px;
      background-color: white;
      border-top: 1px solid #ccc;
    }
    .bookshelfs-Popup-btn1 {
      border-right: 1px solid #ccc;
      color: #ccc;
    }
    .bookshelfs-Popup-btn2 {
      color: yellowgreen;
    }
  }
  .bookshelfs-Popup-bg {
    width: 120%;
    height: 100%;
    background-color: rgba(172, 172, 172, 0.1);
    position: fixed;
    top: 0;
    left: 0;
  }

  .b-bookshelfs-box2 {
    width: 100%;
    height: 100px;
    ul {
      width: 100%;
      height: 340px;
      background-color: white;
      box-shadow: -1px 0px 5px #ccc;
      border-radius: 10px;
      li {
        width: 100%;
        height: 100px;
        display: flex;
        padding-top: 10px;
        .txtbox-left {
          width: 70px;
          height: 86px;
          background-color: skyblue;
          margin-left: 10px;
          img {
            width: 70px;
            height: 86px;
          }
        }
        .txtbox-right {
          width: 68%;
          height: 86px;
          margin-left: 10px;
          font-size: 12px;
          p {
            margin: 0;
          }
          .txtbox-right-title {
            font-size: 18px;
            font-weight: 500;
            margin-bottom: 3px;
          }
          .txtbox-right-txt1 {
            width: 100%;
            height: 38px;
            font-size: 15.5px;
            overflow: hidden;
            -webkit-line-clamp: 2;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            color: #ccc;
            margin-bottom: 3px;
          }
          .txtbox-right-txt2 {
            color: #ccc;
          }
        }
      }
    }
  }
}
</style>