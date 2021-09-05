export class Task {
  private _title: string;
  private _id: number;
  private _checkForDelete: boolean;

  constructor(task: string, id: number) {
    this._title = task;
    this._id = id;
    this._checkForDelete = false;
  }

  get title(): string {
    return this._title;
  }

  get id(): number {
    return this._id;
  }

  get checkForDelete(): boolean {
    return this._checkForDelete;
  }

  set checkForDelete(value: boolean) {
    this._checkForDelete = value;
  }

  set title(value: string) {
    this._title = value;
  }

  set id(value: number) {
    this._id = value;
  }
}
