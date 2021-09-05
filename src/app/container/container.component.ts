import {Component, OnInit} from '@angular/core';
import {DataHolderService} from "../services/dataHolder/data-holder.service";

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  public valueToPush: string = '';

  constructor(private dataHolder: DataHolderService) {
  }

  ngOnInit(): void {
  }

  public getData(): string[] {
    return this.dataHolder.getData();
  }

  onChangedParent(event: any) {
    if (event)
      this.valueToPush = ''
  }
}
