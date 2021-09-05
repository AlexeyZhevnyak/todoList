import {Injectable} from '@angular/core';
import {Task} from "../../model/task";

@Injectable({
  providedIn: 'root'
})
export class DataHolderService {
  private id: number = 0;
  private data: Task[] = [
    new Task("Cook dinner", this.id++),
    new Task("repair the chair", this.id++),
  ]

  constructor() {
  }

  public getData(): Task[] {
    return this.data;
  }

  addData(value: string) {
    this.data.push(new Task(value, this.id++));
  }

  setCheckForDelete(id: number): void {
    console.log(id)
    let find = this.data.findIndex(e => e.id = id);
    if (find !== undefined) {
      this.data[find].checkForDelete = true;
      console.log(this.data[find])
    }

  }

  deleteByCheck() {
    this.data = this.data.filter(e => !e.checkForDelete)
  }

  unCheck(id: number) {
    console.log(id)
    let find = this.data.findIndex(e => e.id = id);
    if (find !== undefined) {
      this.data[find].checkForDelete = false;
      console.log(this.data[find])
    }
  }
}
