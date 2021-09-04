import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataHolderService {
  private data: string[] = [
    "Cook dinner",
    "repair the chair"
  ]

  constructor() {
  }

  public getData(): string[] {
    return this.data;
  }

  addData(value: string) {
    this.data.push(value);
  }
}
