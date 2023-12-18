import {io} from 'socket.io-client';
import {Socket} from "socket.io-client/build/socket";
import {piData, socketConnected, weatherData} from "./store";
import config from '../../config.json';

export class Client {
  private readonly socket: Socket;

  constructor(cb: Function) {
    this.socket = io(`http://${config.host}:${config.port}`, {
      reconnection: true
    });
    this.socket.on('connect', () => {
      socketConnected.value = this.socket.connected;
      cb();
    });
    this.socket.on('connect_error', (e: any) => {
    });
    this.socket.on('reconnect', () => {
    });
    this.socket.on('disconnect', (e: any) => {
      socketConnected.value = this.socket.connected;
    });
    this.socket.on('return_data', (data: Record<string, any>) => Object.assign(piData, data));
    this.socket.on('weather_data', (data: Record<string, any>) => Object.assign(weatherData, data));
  }

  public get connected(): boolean {
    return this.socket.connected;
  }

  public close(): void {
    if (this.connected) {
      this.socket.close()
    }
  }

  public getData(): void {
    this.socket.emit('get_data');
  }

  public getWeather(): void {
    this.socket.emit('get_weather');
  }
}
