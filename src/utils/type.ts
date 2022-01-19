export type PiData = {
  cpu_temp: number,
  cpu_usage: number,
  // [total, used, free]
  ram_usage: [1, 1, 1],
  // [ssid, signal quality, signal level, signal percentage]
  wifi_status: [],
}
