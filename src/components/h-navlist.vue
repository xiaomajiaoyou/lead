<template>
  <div>
    <div class="l-content">
      <div class="l-content-left">
        <ul>
          <router-link to="/home/classification/Novelranking">
            <li v-bind:class="num == 0 ? 'active' : ''" @click="getClick(0)">
              历史军事
            </li>
          </router-link>

          <router-link to="/home/classification/Novelranking2">
            <li v-bind:class="num == 1 ? 'active' : ''" @click="getClick(1)">
              年代风云
            </li>
          </router-link>

          <router-link to="/home/classification/Novelranking3">
            <li v-bind:class="num == 2 ? 'active' : ''" @click="getClick(2)">
              武侠仙侠
            </li>
          </router-link>

          <router-link to="/home/classification/Novelranking4">
            <li v-bind:class="num == 3 ? 'active' : ''" @click="getClick(3)">
              悬疑灵异
            </li>
          </router-link>

          <router-link to="/home/classification/Novelranking5">
            <li v-bind:class="num == 4 ? 'active' : ''" @click="getClick(4)">
              科幻奇幻
            </li>
          </router-link>
        </ul>
      </div>
      <div class="l-content-right">
        <div class="content-right-nav">
          <ul>
            <li v-for="(item, index) in arr" :key="index">
              <button
                :class="item.ischeck == true ? 'active' : ''"
                @click="sel(index, item)"
              >
                {{ item.val }}
              </button>
            </li>
          </ul>
          <ol class="nav-ol1">
            <li>全部</li>
            <li>完结</li>
            <li>连载</li>
          </ol>
          <ol class="nav-ol2">
            <li v-bind:class="i == 0 ? 'active' : ''" @click="liClick(0)">
              点击
            </li>
            <li
              v-bind:class="i == 1 ? 'active' : ''"
              @click="liClick(1)"
              class="nav-ol2-li"
            >
              收藏
            </li>
            <li
              v-bind:class="i == 2 ? 'active' : ''"
              @click="liClick(2)"
              class="nav-ol2-li"
            >
              订阅
            </li>
            <li
              v-bind:class="i == 3 ? 'active' : ''"
              @click="liClick(3)"
              class="nav-ol2-li"
            >
              推荐
            </li>
            <li
              v-bind:class="i == 4 ? 'active' : ''"
              @click="liClick(4)"
              class="nav-ol2-li"
            >
              催更
            </li>
            <li
              v-bind:class="i == 5 ? 'active' : ''"
              @click="liClick(5)"
              class="nav-ol2-li"
            >
              月票
            </li>
          </ol>
        </div>
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "navlist",
  props: {},
  data() {
    return {
      index: 0,
      i: 0,
      arr: [
        {
          val: "全部按钮",
          ischeck: true,
        },
        {
          val: "穿越",
          ischeck: false,
        },
        {
          val: "热血",
          ischeck: false,
        },
        {
          val: "爽文",
          ischeck: false,
        },
        {
          val: "历史",
          ischeck: false,
        },
      ],
      selarr: [],
      historyArr: [],
      yearsArr: [],
      artsArr: [],
      SuspenseArr: [],
      scienceArr: [],
      num: 0,
    };
  },
  methods: {
    getClick(num) {
      this.num = num;
    
    },
    liClick(i) {
      this.i = i;
    },
    btnClick(index) {
      if (this.arr[index].ischeck == true) {
        index = 1;
      }
      this.index = index;
    },
    sel(index, item) {
      let arr = [...this.arr];
      let selarr = [...this.selarr];

      if (arr[index].ischeck == false) {
        arr[index].ischeck = true;
        selarr.push(index);
      } else {
        arr[index].ischeck = false;
        var index11 = selarr.indexOf(index);
        selarr.splice(index11, 1);
      }

      if (arr[index].val == "全部按钮") {
        for (var i = 1; i < this.arr.length; i++) {
          arr[i].ischeck = false;
        }
        arr[0].ischeck = true;
      } else if (arr[index].val != "全部按钮" && arr[index].ischeck == true) {
        arr[0].ischeck = false;
      } else if (
        arr[1].ischeck == false &&
        arr[2].ischeck == false &&
        arr[3].ischeck == false &&
        arr[4].ischeck == false
      ) {
        arr[0].ischeck = true;
      }

      this.arr = arr;
      this.selarr = selarr;
    },
  },
};
</script>

<style lang="scss" scoped>
.l-content {
  display: flex;
  width: 100%;
  height: 560px;
  .l-content-left {
    width: 19%;
    height: 560px;
    background-color: #f5f5f5;
    ul {
      width: 100%;
      li {
        font-size: 14px;
        width: 100%;
        height: 50px;
        line-height: 50px;
        text-align: center;
        box-sizing: border-box;
      }
      li.active {
        background-color: white;
        border-left: 5px solid #fec500;
      }
    }
  }
  .l-content-right {
    width: 80%;
    .content-right-nav {
      height: 100px;
      width: 100%;
      ul {
        display: flex;
        li {
          height: 50px;
          line-height: 50px;
          font-size: 12px;
          button {
            font-size: 12px;
            border: none;
            text-align: center;
            margin-left: 10px;
            padding: 2px 10px;
            border-radius: 10px;
          }
          .active {
            color: white;
            background-color: #ffc500;
          }
        }
      }
      ol {
        display: flex;
        li {
          height: 25px;
          font-size: 14px;
          margin-left: 10px;
        }
      }
      .nav-ol1 {
        margin-bottom: 3px;
      }
      .nav-ol2 {
        color: #a3a3a3;

        li.active {
          color: #000;
        }
        .nav-ol2-li {
          margin-left: 21px;
        }
      }
    }
  }
}
</style>