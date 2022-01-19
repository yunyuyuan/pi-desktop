import {PiData} from "./type";
import {reactive, ref} from "vue";

export const socketConnected = ref<boolean>(false);

export const piData = reactive<PiData>({
  cpu_temp: 0,
  cpu_usage: 0,
  ram_usage: [1, 1, 1],
  wifi_status: ['', '', '', 50],
});
