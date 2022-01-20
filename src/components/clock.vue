<template>
  <div class="clock">
    <div class="digit tenhour">
      <span class="base"></span>
      <div class="flap over front"></div>
      <div class="flap over back"></div>
      <div class="flap under"></div>
    </div>

    <div class="digit hour has-right">
      <span class="base"></span>
      <div class="flap over front"></div>
      <div class="flap over back"></div>
      <div class="flap under"></div>
    </div>

    <div class="digit tenmin">
      <span class="base"></span>
      <div class="flap over front"></div>
      <div class="flap over back"></div>
      <div class="flap under"></div>
    </div>

    <div class="digit min has-right">
      <span class="base"></span>
      <div class="flap over front"></div>
      <div class="flap over back"></div>
      <div class="flap under"></div>
    </div>

    <div class="digit tensec">
      <span class="base"></span>
      <div class="flap over front"></div>
      <div class="flap over back"></div>
      <div class="flap under"></div>
    </div>

    <div class="digit sec">
      <span class="base"></span>
      <div class="flap over front"></div>
      <div class="flap over back"></div>
      <div class="flap under"></div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, watch} from "vue";
import { timeInterval } from "../utils/store";

export default defineComponent({
  name: "clock",
  mounted() {
    this.setTime(false);
    watch(timeInterval, () => {
      this.setTime(true);
    })
  },
  methods: {
    flipTo(digit: HTMLElement, n: string){
      const current = digit.getAttribute('data-num')!;
      digit.setAttribute('data-num', n);
      digit.querySelector('.front')!.setAttribute('data-content', current);
      digit.querySelectorAll('.back, .under').forEach(el => el.setAttribute('data-content', n));
      digit.querySelectorAll('.flap').forEach(el => (el as HTMLElement).style.display = 'block');
      setTimeout(function(){
        digit.querySelector('.base')!.innerHTML = n;
        digit.querySelectorAll('.flap').forEach(el => (el as HTMLElement).style.display = 'none');
      }, 350);
    },
    jumpTo(digit: HTMLElement, n: string){
      digit.setAttribute('data-num', n);
      digit.querySelector('.base')!.innerHTML = n;
    },
    updateGroup(group: string, n: number, flip: boolean){
      const digit1 = this.$el.querySelector('.ten'+group);
      const digit2 = this.$el.querySelector('.'+group);
      let sn = String(n);
      if(sn.length == 1) sn = '0'+sn;
      const num1 = sn.substr(0, 1);
      const num2 = sn.substr(1, 1);
      if(digit1.getAttribute('data-num') != num1){
        if(flip) this.flipTo(digit1, num1);
        else this.jumpTo(digit1, num1);
      }
      if(digit2.getAttribute('data-num') != num2){
        if(flip) this.flipTo(digit2, num2);
        else this.jumpTo(digit2, num2);
      }
    },
    setTime(flip: boolean){
      const t = new Date();
      this.updateGroup('hour', t.getHours(), flip);
      this.updateGroup('min', t.getMinutes(), flip);
      this.updateGroup('sec', t.getSeconds(), flip);
    }
  }
})
</script>

<style lang="scss" scoped>
$flipColour: #343434;
$flipColourDark: darken($flipColour, 65%);
$textColour: #fafafa;
$textColourDark: darken($textColour, 65%);
$size: 30px;
$radius: $size / 4;

.clock {
  display: flex;
  padding: 10px 0;
}  

.digit {
  width: $size * 1.2;
  height: $size * 1.5;
  background-color: $flipColour;
  border-radius: $radius;
	text-align: center;
  font-family: Oswald, sans-serif;
  font-size: $size;
  position: relative;
  margin-right: $radius / 2;
  &:nth-child(2n+2) { 
    margin-right: $size / 2;
  }
  &:last-child { 
    margin-right: 0;
  }
  &.has-right {
    &:before, &:after {
      display: block;
      content: '';
      position: absolute;
      width: $size / 6;
      height: $size / 6;
      border-radius: 50%;
      right: - $size / 2;
      transform: translateX(-100%);
      background: $flipColour;
      top: $size / 2;
    }
    &:after {
      top: $size / 1.2;
    }
  }
}

.base {
	display: block;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	color: $textColour;
}
  
.flap {
	display: none;
	position: absolute;
	width: 100%;
	height: 50%;
	background-color: $flipColour;
	left: 0;
	top: 0;
	border-radius: $radius $radius 0 0;
	transform-origin: 50% 100%;
	backface-visibility: hidden;
	overflow: hidden;
	
	&::before {
		content: attr(data-content);
		position: absolute;
		left: 50%;
	}
	
	&.front::before,
	&.under::before {
		top: 100%;
		transform: translate(-50%, -50%);
	}
	
	&.back {
		transform: rotateY(180deg);
		&::before {
			top: 100%;
			transform:  translate(-50%, -50%) rotateZ(180deg);
		}
	}

	&.over {
		z-index: 2;
	}
	
	&.under {
		z-index: 1;
	}
	
	&.front {
		animation: flip-down-front 300ms ease-in both;
	}
	
	&.back {
		animation: flip-down-back 300ms ease-in both;
	}
	
	&.under {
		animation: fade-under 300ms ease-in both;
	}
	
}

@keyframes flip-down-front {
	0% {
		transform: rotateX(0deg);
		background-color: $flipColour;
		color: $textColour;
	}
	100% {
		transform: rotateX(-180deg);
		background-color: $flipColourDark;
		color: $textColourDark;
	}
}

@keyframes flip-down-back {
	0% {
		transform: rotateY(180deg) rotateX(0deg);
		background-color: $flipColourDark;
		color: $textColourDark;
	}
	100% {
		transform: rotateY(180deg) rotateX(180deg);
		background-color: $flipColour;
		color: $textColour;
	}
}

@keyframes fade-under {
	0% {
		background-color: $flipColourDark;
		color: $textColourDark;
	}
	100% {
		background-color: $flipColour;
		color: $textColour;
	}
}
</style>
