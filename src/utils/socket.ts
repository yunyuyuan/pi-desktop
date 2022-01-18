import {io} from 'socket.io-client';
import {Socket} from "socket.io-client/build/socket";
import {piData, socketConnected} from "./store";
import config from '../../config.json';

export class Client {
  private readonly socket: Socket;

  constructor() {
    this.socket = io(`http://${config.host}:${config.port}`, {
      reconnection: true
    });
    this.socket.on('connect', () => {
      socketConnected.value = this.socket.connected;
    });
    this.socket.on('connect_error', (e: any) => {
    });
    this.socket.on('reconnect', () => {
    });
    this.socket.on('disconnect', (e: any) => {
      socketConnected.value = this.socket.connected;
    });
    this.socket.on('return_data', this.acceptData);
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
  
  public acceptData(data: Record<string, any>): void {
    Object.assign(piData, data);
  }
}
