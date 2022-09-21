<template>
  <div class="h-txtbox">
    <ul>
      <li v-for="item in popularRecommend" v-bind:key="item.id">
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
</template>

<script>
export default {
  name: "recommend",
  data() {
    return {
      popularRecommend: [],
      recommendStrongly: [],
      StrongPush: [],
    };
  },
  methods: {
    getData() {
      let _this = this;
      let pro = axios.get("data/novel.json", { params: { limit: 3 } });
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
  },
  mounted() {
    this.getData();
  },
};
</script>

<style lang="scss" scoped>
.h-txtbox {
  ul {
    width: 100%;
    height: 340px;
    li {
      width: 100%;
      height: 100px;
      display: flex;
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
</style>