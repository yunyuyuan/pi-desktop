export type PiData = {
  cpu_temp: number,
  cpu_usage: number,
  // [total, used, free]
  ram_usage: [number, number, number],
  // [ssid, signal quality, signal level, signal percentage]
  wifi_status: [string, string, string, number],
}
