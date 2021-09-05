import {Component, OnInit, ViewChild} from '@angular/core';
import {DataHolderService} from "../services/dataHolder/data-holder.service";
import {Task} from "../model/task";
import {ButtonsComponent} from "../buttons/buttons.component";

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  public valueToPush: string = '';

  @ViewChild(ButtonsComponent, {static: false})

  private temp: ButtonsComponent | undefined;

  constructor(private dataHolder: DataHolderService) {
  }

  ngOnInit(): void {

  }

  public getData(): Task[] {
    return this.dataHolder.getData();
  }

  onChangedParent(event: any) {
    if (event)
      this.valueToPush = ''
  }

  onCheck(event: boolean) {

  }
}
