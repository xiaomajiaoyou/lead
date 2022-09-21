<template>
  <div class="b-recommend">
    <h6>今日推荐</h6>
    <div class="b-recommend-box">
      <div class="b-box-left">
        <img :src="this.RecommendArr[getNum].pigurl" />
      </div>
      <div class="b-box-right">
        <p class="p1">{{ this.RecommendArr[getNum].name }}</p>
        <p class="p2">{{ this.RecommendArr[getNum].introduce }}</p>
        <p class="p3">
          <span>{{ this.RecommendArr[getNum].author }}</span> •
          <span>{{ this.RecommendArr[getNum].type }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      RecommendArr: [],
    };
  },
  methods: {
    getData() {
      let _this = this;
      let pro = axios.get("data/novellsit.json");
      pro.then((res) => {
        let result = res.data.result;
        let arr = [];
        result.forEach((item) => {
          let obj = {};
          obj.id = item.id;
          obj.name = item.name;
          obj.author = item.author;
          obj.state = item.state;
          obj.introduce = item.introduce;
          obj.pigurl = item.pigurl;
          obj.type = item.type;
          arr.push(obj);
        });
        _this.RecommendArr = arr;
      });
    },
  },
  computed: {
    getNum() {
      return Math.floor(Math.random() * this.RecommendArr.length);
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style lang="scss" scoped>
.b-recommend {
  width: 80%;
  margin-left: 10%;
  margin-bottom: 10px;
  h6 {
    margin-bottom: 10px;
  }
  .b-recommend-box {
    width: 100%;
    height: 80px;
    background-color: white;
    border-radius: 5px;
    box-shadow: -1px 0px 5px #ccc;
    display: flex;
    .b-box-left {
      width: 60px;
      height: 64px;
      margin: 2% 3%;
      img {
        width: 60px;
        height: 64px;
      }
    }
    .b-box-right {
      width: 70%;
      height: 60px;
      margin: 3% 0;
      p {
        margin: 0;
        padding: 0;
        margin-left: 5px;
      }
      .p1 {
        font-size: 16px;
        margin-bottom: 2px;
      }
      .p2 {
        font-size: 14px;
        color: #ccc;
        margin-bottom: 2px;
        overflow: hidden;
        -webkit-line-clamp: 1;
        display: -webkit-box;
        -webkit-box-orient: vertical;
      }
      .p3 {
        font-size: 12px;
        color: #ccc;
      }
    }
  }
}
</style>