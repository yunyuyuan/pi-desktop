export type PiData = {
  cpu_temp: number,
  cpu_usage: string,
  // [total, used, free]
  ram_usage: [string, string, string],
  // [ssid, signal quality, signal level, signal percentage]
  wifi_status: [string, string, string, number],
}

export type Weather = {
  status: string,
  api_version: string,
  api_status: string,
  lang: string,
  unit: string,
  tzshift: number,
  timezone: string,
  server_time: number,
  location: [
    number,
    number,
  ],
  result: {
    alert: {
      status: string,
      content: []
    },
    realtime: {
      status: string,
      temperature: number,
      humidity: number,
      cloudrate: number,
      skycon: string,
      visibility: number,
      dswrf: number,
      wind: {
        speed: number,
        direction: number
      },
      pressure: number,
      apparent_temperature: number,
      precipitation: {
        local: {
          status: string,
          datasource: string,
          intensity: number
        },
        nearest: {
          status: string,
          distance: number,
          intensity: number
        }
      },
      air_quality: {
        pm25: number,
        pm10: number,
        o3: number,
        so2: number,
        no2: number,
        co: number,
        aqi: {
          chn: number,
          usa: number,
        },
        description: {
          chn: string,
          usa: string
        }
      },
      life_index: {
        ultraviolet: {
          index: number,
          desc: string
        },
        comfort: {
          index: number,
          desc: string
        }
      }
    },
    minutely: {
      status: string,
      datasource: string,
      precipitation_2h: number[],
      precipitation: number[],
      probability: number[],
      description: string
    },
    hourly: {
      skycon: Array<{
        datetime: string,
        value: string
      }>,
      precipitation: Array<{
        datetime: string,
        value: number
      }>,
      temperature: Array<{
        datetime: string,
        value: number
      }>,
    },
    daily: {
      status: string,
      astro: Array<{
        date: string,
        sunrise: {
          time: string
        },
        sunset: {
          time: string
        }
      }>,
      temperature: Array<{
        date: string,
        max: number,
        min: number,
        avg: number
      }>,
      wind: Array<{
        date: string,
        max: {
          speed: number,
          direction: number
        },
        min: {
          speed: number,
          direction: 37.0
        },
        avg: {
          speed: number,
          direction: 39.59
        }
      }>,
      humidity: Array<{
        date: string,
        max: number,
        min: number,
        avg: number
      }>,
      cloudrate: Array<{
        date: string,
        max: number,
        min: number,
        avg: number
      }>,
      pressure: Array<{
        date: string,
        max: number,
        min: number,
        avg: number
      }>,
      visibility: Array<{
        date: string,
        max: number,
        min: number,
        avg: number
      }>,
      dswrf: Array<{
        date: string,
        max: number,
        min: number,
        avg: number
      }>,
      air_quality: {
        aqi: Array<{
          date: string,
          max: {
            chn: number,
            usa: number
          },
          avg: {
            chn: number,
            usa: number
          },
          min: {
            chn: number,
            usa: number
          }
        }>,
        pm25: Array<{
          date: string,
          max: number,
          avg: number,
          min: number
        }>,
      },
      skycon: Array<{
        date: string,
        value: string
      }>,
      skycon_08h_20h: Array<{
        date: string,
        value: string
      }>,
      skycon_20h_32h: Array<{
        date: string,
        value: string
      }>,
      life_index: {
        ultraviolet: Array<{
          date: string,
          index: string,
          desc: string
        }>,
        carWashing: Array<{
          date: string,
          index: string,
          desc: string
        }>,
        dressing: Array<{
          date: string,
          index: string,
          desc: string
        }>,
        comfort: Array<{
          date: string,
          index: string,
          desc: string
        }>,
        coldRisk: Array<{
          date: string,
          index: string,
          desc: string
        }>,
      }
    },
    primary: number,
    forecast_keypoint: string
  }
}

export function toFixed(v: number | string): number {
  return parseFloat(parseFloat(<string>v).toFixed(1));
}

export function toTwo(n: number): number[] {
  if (n < 10) {
    return [0, n]
  }
  return [Math.floor(n/10), n%10]
}
