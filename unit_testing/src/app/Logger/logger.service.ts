import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  message: string[] = [];

  constructor() { }

  log(message: string) {
    debugger
    this.message.push(message);
  }

}
