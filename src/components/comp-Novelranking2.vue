<template>
  <div class="content-right-box">
    <ul>
      <li v-for="item in Novelarr" v-bind:key="item.id">
        <div class="txtbox-left">
          <img :src="item.pigurl" alt="" />
        </div>
        <div class="txtbox-right">
          <p class="txtbox-right-title">{{ item.name }}</p>
          <p class="txtbox-right-txt1">{{ item.introduce }}</p>
          <p class="txtbox-right-txt2">
            <span>{{ item.author }}</span> <span> • {{ item.state }} </span>
            <span> • {{ item.type }} </span>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Novelranking",
  data() {
    return {
      Novelarr: [],
    };
  },
  methods: {
    getData() {
      let _this = this;
      let pro = axios.get("data/novellsit2.json");
      pro.then((res) => {
        let result = res.data.result;
        let arr = [];
        result.forEach((item) => {
          let obj2 = {};
          obj2.id = item.id;
          obj2.name = item.name;
          obj2.author = item.author;
          obj2.state = item.state;
          obj2.clickNum = item.clickNum;
          obj2.introduce = item.introduce;
          obj2.pigurl = item.pigurl;
          obj2.type = item.type;

          arr.push(obj2);
        });
        _this.Novelarr = arr;
      });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style lang="scss" scoped>
.content-right-box {
  margin-top: 20px;
  padding-bottom: 50px;
  ul {
    width: 100%;
    height: calc(100% + 100px);
    box-sizing: content-box;
    li {
      width: 100%;
      height: 100px;
      display: flex;
      box-sizing: border-box;
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
          font-size: 14px;
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
</style>