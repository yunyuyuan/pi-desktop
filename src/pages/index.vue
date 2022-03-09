<template>
  <div class="main-page flexc">
    <div class="top">
      <div class="time flexc">
        <div class="date flex">
          <span>{{ timedate }}</span>
          <span>{{ week }}</span>
        </div>
        <div @click="changeClock">
          <clock2 v-if="clockNow === 2"/>
          <clock3 v-else-if="clockNow === 3"/>
        </div>
        <span class="tips">{{ weatherData.result?.forecast_keypoint }}</span>
      </div>
      <div class="info flexc">
        <div class="progressbar flex">
          <progressbar :text="'CPU'" :percentage="cpuUsage"/>
          <progressbar :text="'RAM'" :percentage="ramUsage"/>  
        </div>
        <div class="txt flex">
          <div>
            <icon-svg name="temperature"/>
            <span>{{ cpuTemp }}°C</span>
          </div>
          <div>
            <svg viewBox="0 0 1122 1024" xmlns="http://www.w3.org/2000/svg" >
              <path fill="#0197d5" d="M561.152 910.336c-7.68 0-25.088-13.824-53.248-41.984-27.648-28.16-41.472-45.568-41.472-53.248 0-12.288 11.776-22.528 35.84-30.72s43.52-12.8 59.392-12.8c15.872 0 35.328 4.096 59.392 12.8s35.84 18.432 35.84 30.72c0 7.68-13.824 25.6-41.472 53.248-29.184 28.16-46.592 41.984-54.272 41.984z"></path>
              <path :fill="piData.wifi_status[3] > 33 ? '#0197d5':'#c0c0c0'" d="M715.264 755.712c-0.512 0-8.192-4.608-23.04-14.336-14.336-9.728-33.792-18.944-57.856-28.672-24.064-9.728-48.64-14.336-73.216-14.336-24.576 0-49.152 4.608-73.216 14.336-24.064 9.728-43.52 18.944-57.856 28.672-14.336 9.728-22.016 14.336-23.04 14.336-6.656 0-24.576-14.336-53.248-43.008s-43.008-46.08-43.008-53.248c0-5.12 2.048-9.216 5.632-13.312 29.696-29.184 67.072-52.224 112.128-69.12s89.088-25.088 133.12-25.088c44.032 0 88.064 8.192 133.12 25.088 45.056 16.896 82.432 39.936 112.128 69.12 3.584 3.584 5.632 8.192 5.632 13.312 0 6.656-14.336 24.576-43.008 53.248-29.696 28.672-47.104 43.008-54.272 43.008z"></path>
              <path :fill="piData.wifi_status[3] > 66 ? '#0197d5':'#c0c0c0'" d="M871.424 600.064c-4.096 0-8.704-1.536-13.312-4.608-51.712-39.936-99.84-69.632-143.872-88.064s-95.232-28.16-153.088-28.16c-32.256 0-65.024 4.096-97.28 12.8S402.944 510.464 378.88 522.24c-24.064 11.776-45.568 23.552-65.024 35.328s-34.304 22.016-45.056 30.208c-11.264 8.192-16.896 12.8-17.92 12.8-6.656 0-24.064-14.336-52.736-43.008s-43.008-46.08-43.008-53.248c0-4.608 2.048-8.704 5.632-12.8 50.176-50.176 111.104-89.088 182.784-117.248 71.68-27.648 143.872-41.472 217.088-41.472s145.408 13.824 217.088 41.472c71.68 27.648 132.608 67.072 182.784 117.248 3.584 3.584 5.632 8.192 5.632 12.8 0 6.656-14.336 24.576-43.008 53.248s-45.056 42.496-51.712 42.496z"></path>
              <path :fill="piData.wifi_status[3] > 99 ? '#0197d5':'#c0c0c0'" d="M1026.048 445.44c-4.096 0-8.192-1.536-12.8-5.12-68.096-59.904-138.752-104.96-212.48-135.168-73.216-30.208-153.6-45.568-240.128-45.568-87.04 0-166.912 15.36-240.128 45.568S176.64 380.416 108.544 440.32c-4.096 3.584-8.192 5.12-12.8 5.12-6.656 0-24.064-14.336-52.736-43.008S0 356.352 0 349.184c0-5.12 2.048-9.216 5.632-13.312C76.8 265.216 161.792 210.432 260.096 171.52s198.656-58.368 301.056-58.368 202.752 19.456 301.056 58.368 183.296 93.696 254.464 164.352c3.584 3.584 5.632 8.192 5.632 13.312 0 6.656-14.336 24.576-43.008 53.248-28.672 28.672-46.592 43.008-53.248 43.008z"></path>
            </svg>
            <span>{{ piData.wifi_status[0] }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom flex">
      <div class="weather flex" @click="client.getWeather()">
        <div class="main flexc">
          <div class="svg flex">
            <weather :weather="weatherData.result?.realtime.skycon"/>
            <b>{{ weatherData.result?.realtime.temperature }}°C</b>
          </div>
          <p><span>湿度:</span><b>{{ toFixed(weatherData.result?.realtime.humidity * 100) }}<small>%</small></b></p>
          <p><span>降雨:</span><b>{{ toFixed(weatherData.result?.realtime.precipitation.local.intensity) }}<small>mm/h</small></b></p>
          <p><span>风速:</span><b>{{ toFixed(weatherData.result?.realtime.wind.speed) }}<small>m/s</small></b></p>
          <p><span>PM2.5:</span><b>{{ toFixed(weatherData.result?.realtime.air_quality.pm25) }}<small>μg/m3</small></b></p>
        </div>
        <div class="future">
          <div class="one">
            <time>一小时</time>
            <weather :weather="weatherData.result?.hourly.skycon[0].value"/>
            <span class="temp"><b>{{ toFixed(weatherData.result?.hourly.temperature[0].value) }}</b><small>°C</small></span>
            <span class="rain">雨：<b>{{ toFixed(weatherData.result?.hourly.precipitation[0].value) }}</b><small>mm/h</small></span>
          </div>
          <div class="two">
            <time>两小时</time>
            <weather :weather="weatherData.result?.hourly.skycon[1].value"/>
            <span class="temp"><b>{{ toFixed(weatherData.result?.hourly.temperature[1].value) }}</b><small>°C</small></span>
            <span class="rain">雨：<b>{{ toFixed(weatherData.result?.hourly.precipitation[1].value) }}</b><small>mm/h</small></span>
          </div>
          <div class="three">
            <time>明天</time>
            <weather :weather="weatherData.result?.daily.skycon[0].value"/>
            <span class="temp"><b>{{ toFixed(weatherData.result?.hourly.temperature[0].value) }}</b><small>°C</small></span>
            <span class="rain">雨：<b>{{ toFixed(weatherData.result?.hourly.precipitation[0].value) }}</b><small>mm/h</small></span>
          </div>
          <div class="four">
            <time>后天</time>
            <weather :weather="weatherData.result?.daily.skycon[1].value"/>
            <span class="temp"><b>{{ toFixed(weatherData.result?.hourly.temperature[1].value) }}</b><small>°C</small></span>
            <span class="rain">雨：<b>{{ toFixed(weatherData.result?.hourly.precipitation[1].value) }}</b><small>mm/h</small></span>
          </div>
        </div>
      </div>
      <todo/>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, watch} from "vue";
import {Client} from "../utils/socket";
import {piData, timeInterval, weatherData} from "../utils/store";
import Clock from "../components/clock.vue";
import Progressbar from "../components/progressbar.vue";
import IconSvg from "../assets/svg/IconSvg.vue";
import dayjs, { Dayjs } from "dayjs";
import Weather from "../components/weather.vue";
import {toFixed} from "../utils/type";
import Todo from "../components/todo.vue";
import Clock2 from "../components/clock2.vue";
import Clock3 from "../components/clock3.vue";

export default defineComponent({
  name: "index",
  components: {Clock3, Clock2, Todo, Weather, IconSvg, Progressbar, Clock},
  data() {
    return {
      client: null as null | Client,
      piData,
      weatherData,
      clockNow: 2,
      timeNow: dayjs() as Dayjs,
    }
  },
  computed: {
    timedate(): string {
      return this.timeNow.format('YYYY - MM - DD');
    },
    week(): string {
      return this.timeNow.format('dddd');
    },
    cpuTemp(): number {
      return toFixed(this.piData.cpu_temp);
    },
    cpuUsage(): number {
      return parseFloat(this.piData.cpu_usage);
    },
    ramUsage(): number {
      return toFixed(parseInt(this.piData.ram_usage[1]) * 100 / parseInt(this.piData.ram_usage[0]));
    }
  },
  mounted() {
    this.client = new Client(() => {
      watch(timeInterval, () => {
        this.client!.getData();
        this.timeNow = dayjs();
      });
      setInterval(() => {
        this.client!.getWeather();
      }, 600000);
      this.client!.getWeather();
    });
  },
  methods: {
    toFixed: toFixed,
    changeClock() {
      this.clockNow = (this.clockNow === 2 ? 3 : 2);
    }
  }
})
</script>

<style lang="scss" scoped>
.main-page {
  width: 100%;
  height: 100%;
  .top {
    display: flex;
    margin-top: 6px;
    padding-bottom: 6px;
    border-bottom: 1px solid #bebebe;
    .time {
      align-items: stretch;
      .date {
        span{
          font-size: 14px;
          font-weight: bold;
        }
        justify-content: space-around;
      }
    }
    .info {
      flex-grow: 1;
      align-items: stretch;
    }
    .progressbar {
      justify-content: space-evenly;
    }
    .txt {
      justify-content: space-between;
      div{
        display: flex;
        align-items: center;
        width: 50%;
        svg{
          width: 20px;
          height: 20px;
        }
        span {
          margin-left: 10px;
          font-size: 12px;
          word-break: break-all;
          font-weight: bold;
        }
      }
    }
    .tips {
      font-size: 13px;
      margin-top: auto;
      text-align: center;
    }
  }
  .bottom {
    align-items: stretch;
    flex-grow: 1;
    width: 100%;
    height: 0;
    .weather {
      width: 60%;
      background: linear-gradient(127deg, #e4d0ff, #ffdcc3);
      border-radius: 12px;
      margin: 4px;
      align-items: stretch;
      flex-shrink: 0;
      .main{
        width: 130px;
        align-items: stretch;
        .svg{
          ::v-deep(svg){
            width: 80px;
            height: 80px;
          }
          b{
            font-size: 22px;
          }
        }
        p{
          display: flex;
          align-items: center;
          margin: auto 0;
          transform: translateY(-8px);
          color: #1e1e1e;
          span{
            width: 45px;
            font-size: 13px;
            margin-right: 8px;
            text-align: right;
          }
          b{
            font-size: 15px;
          }
          small{
            font-size: 11px;
            margin-left: 3px;
            color: #363636;
          }
        }
      }
      .future {
        display: flex;
        flex-wrap: wrap;
        flex-grow: 1;
        >div {
          width: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          box-sizing: border-box;
          time {
            font-size: 12px;
            font-weight: bold;
          }
          ::v-deep(svg) {
            width: 36px;
            height: 36px;
          }
          span {
            font-size: 13px;
            color: #1e1e1e;
            &.temp {
              margin-top: -2px;
            }
            small {
              font-size: 8px;
            }
          }
          border-color: #fff;
          border-style:  solid;
          border-width: 0;
          &.one{
            border-right-width: 1px;
            border-bottom-width: 1px;
          }
          &.two {
            border-bottom-width: 1px;
          }
          &.three {
            border-right-width: 1px;
          }
        }
      }
    }
  }
}
</style>
