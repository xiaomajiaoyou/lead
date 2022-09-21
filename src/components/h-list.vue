<template>
  <div>
    <header class="h-header">
      <input
        @input="mySearch"
        v-model="keywords"
        type="text"
        class="int-1"
        placeholder="搜索关键字"
      />
      <i class="iconfont icon-fangdajing" id="txt-1"></i>
      <div class="nav" v-if="isSearch">
        <ul>
          <li v-for="(item, index) in searchList" :key="index">
            <span>{{ item.name }}</span
            ><span>{{ item.author }}</span>
          </li>
        </ul>
      </div>
    </header>

    <rotation></rotation>
  </div>
</template>

<script>
import rotation from "@/components/h-Rotation.vue";
export default {
  name: "list",
  components: {
    rotation: rotation,
  },
  data() {
    return {
      keywords: "",
      isSearch: false,
      timer: null,
      searchList: [],
    };
  },
  methods: {
    getData() {
      let pro = axios.get("data/novellsit.json");
      pro.then((res) => {
        // console.log(res.data.result);
        let newArr = res.data.result;
        for (let i = 0; i < newArr.length; i++) {
          // console.log(newArr[i]);
          if (newArr[i].name.indexOf(this.keywords) > -1) {
            this.searchList.push(newArr[i]);
          } else {
            continue;
          }
        }
      });
    },
    mySearch() {
      if (this.timer !== null) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {
        this.getData();
      }, 300);

      if (this.keywords.length != 0) {
        this.isSearch = true;
      } else {
        this.searchList = [];
        this.isSearch = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  .h-header {
    height: 70px;
    background-color: #fec400;
    margin-bottom: 10px;
    position: relative;
    .int-1 {
      border-radius: 20px;
      width: 80%;
      height: 35px;
      border: none;
      text-indent: 2.8em;
      position: absolute;
      top: 20px;
      left: 10%;
      color: #ccc;
      outline: none;
    }
    .icon-fangdajing {
      font-size: 20px;
      position: absolute;
      top: 28px;
      left: 50px;
    }
    .nav {
      position: absolute;
      width: 280px;
      background-color: #fff;
      z-index: 10000;
      top: 57px;
      left: 50px;
      padding: 0 30px 5px;
      box-sizing: border-box;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
      ul {
        li {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          border-bottom: 1px dotted #ccc;
          padding: 5px 0;
          span {
            font-size: 16px;
            margin-right: 5px;
            &:last-child {
              margin-top: 5px;
              font-size: 12px;
              color: #808080;
            }
          }
          &:last-child {
            border: 0;
          }
        }
      }
    }
  }
}
</style>