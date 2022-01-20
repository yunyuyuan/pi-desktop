import {PiData, Weather} from "./type";
import {reactive, ref} from "vue";

export const socketConnected = ref<boolean>(false);

export const piData = reactive<PiData>({
  cpu_temp: 0,
  cpu_usage: '0',
  ram_usage: ['1', '1', '1'],
  wifi_status: ['', '', '', 50],
});

// @ts-ignore
export const weatherData = reactive<Weather>({});

export const timeInterval = ref<number>(1);

setInterval(() => {
  if (timeInterval.value > 1000) {
    return timeInterval.value = 0;
  }
  timeInterval.value ++;
}, 1000)
