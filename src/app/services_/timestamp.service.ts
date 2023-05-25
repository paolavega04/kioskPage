import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimestampService {

  constructor() { }

  getTimestamp(): Date {
    return new Date();
  }
}
