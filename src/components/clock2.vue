<template>
  <div class="clock flex">
    <div :style="{lineHeight: `${size}px`, fontSize: `${size}px`}" v-for="i in 3">
      <span v-for="j in [-2, -1]" :style="{height: `${size}px`}">
        <span :style="toStyle(i*2+j)" :class="{animate: animation[i*2+j]}">
          <b v-for="(t,idx) in calcTimes(i*2+j)" :key="idx">{{ t }}</b>
        </span>
      </span>
      <span :style="{lineHeight: `${size*0.9}px`}" class="separator" v-if="i !== 3">:</span>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, watch} from "vue";
import {toTwo} from "../utils/type";

export default defineComponent({
  name: "clock2",
  data() {
    return {
      size: 50,
      nowTime: [0, 0, 0, 0, 0, 0] as number[],
      nextTime: [0, 0, 0, 0, 0, 0] as number[],
      animation: [true, true, true, true, true, true] as boolean[]
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
      const times = [...hour, ...min, ...sec];
      this.nowTime = this.nowTime.length ? this.nextTime.slice() : times.slice();
      this.nextTime = times; 
      // time变化了，触发动画
      this.animation = this.nextTime.map((t, idx) => t !== this.nowTime[idx]);
      if (this.animation[this.animation.length-1]) {
        setTimeout(() => {
          this.nowTime = this.nextTime.slice();
          this.animation = new Array(6).fill(false);
        }, 400)
      }
    },
    calcTimes(idx: number): Record<string, any> {
      return [this.nowTime[idx], this.nextTime[idx]];
    },
    toStyle(idx: number): Record<string, any> {
      if (this.animation[idx]) {
        return {
          transform: `translateY(-${this.size}px)`
        }
      }
      return {}
    },
  }
})
</script>

<style lang="scss" scoped>
.clock {
  width: 257px;
  height: 70px;
  justify-content: center;
  > div {
    display: flex;
    > span {
      overflow: hidden;
      > span{
        overflow: visible;
        display: flex;
        flex-direction: column;
        transform: translateY(0);
        &.animate {
          transition: transform .3s linear;
          transform: translateY(-24px);
        }
        > b{
          font-family: robot-momo,sans-serif;
        }
      }
    }
    .separator {
      margin: 0 3px;
    }
  }
  > span {
    
  }
}
</style>
