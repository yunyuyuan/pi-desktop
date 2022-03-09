<template>
  <div class="clock flex">
    <template v-for="(num,idx) in nowTime">
      <svg y="0" xmlns='http://www.w3.org/2000/svg' viewBox="0 0 415.4 754.6">
        <use :class="{active: numsMap[0].includes(num)}" href="#p1"></use>
        <use :class="{active: numsMap[1].includes(num)}" href="#p2"></use>
        <use :class="{active: numsMap[2].includes(num)}" href="#p3"></use>
        <use :class="{active: numsMap[3].includes(num)}" href="#p4"></use>
        <use :class="{active: numsMap[4].includes(num)}" href="#p5"></use>
        <use :class="{active: numsMap[5].includes(num)}" href="#p6"></use>
        <use :class="{active: numsMap[6].includes(num)}" href="#p7"></use>
      </svg>
      <span v-if="idx===1 || idx===3">:</span>
    </template>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {toTwo} from "../utils/type";

export default defineComponent({
  name: "clock3",
  data() {
    return {
      nowTime: [0, 0, 0, 0, 0, 0] as number[],
      numsMap: [[0, 2, 3, 5, 6, 8, 9], [0, 2, 3, 5, 6, 7, 8, 9], [0, 1, 3, 4, 5, 6, 7, 8, 9], [0, 2, 6, 8], [0, 4, 5, 6, 8, 9], [0, 1, 2, 3, 4, 7, 8, 9], [2, 3, 4, 5, 6, 8, 9]]
    }
  },
  mounted() {
    this.setTime();
    setInterval(() => {
      this.setTime();
    }, 500)
  },
  methods: {
    setTime() {
      // 先还原位置
      const time = new Date(Date.now() + 1000);
      const hour = toTwo(time.getHours()),
          min = toTwo(time.getMinutes()),
          sec = toTwo(time.getSeconds());
      this.nowTime = [...hour, ...min, ...sec];
    },
  }
})
</script>

<style lang="scss" scoped>
.clock {
  width: 257px;
  height: 70px;
  justify-content: space-evenly;
  svg {
    width: 26px;
    use{
      fill: #f6f6f6;
      transition: all .15s linear;
      &.active {
        fill: #000000;
      }
    }
  }
  span {
    font-size: 50px;
  }
}
</style>
