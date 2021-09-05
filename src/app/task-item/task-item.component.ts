import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from "../model/task";
import {DataHolderService} from "../services/dataHolder/data-holder.service";

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  @Input() public task: Task = new Task('', 0)

  constructor(private data: DataHolderService) {

  }

  ngOnInit(): void {
  }


  processClick(event: any) {
    console.log("this task")
    if (event.target.checked) {
      this.data.setCheckForDelete(this.task.id);
    } else {
      this.data.unCheck(this.task.id);
    }

    // console.log(event.target.checked)
  }
}
