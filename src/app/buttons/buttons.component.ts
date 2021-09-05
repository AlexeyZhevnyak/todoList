import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DataHolderService} from "../services/dataHolder/data-holder.service";

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  @Input() toAdd: string = '';
  @Output() onChangedChildO = new EventEmitter<boolean>();


  constructor(private dataHolder: DataHolderService) {

  }

  ngOnInit(): void {
  }

  addItem(): void {
    this.dataHolder.addData(this.toAdd);
    this.change(true);
  }

  change(increased: boolean): void {
    this.onChangedChildO.emit(increased);
  }

  deleteItems() {
    this.dataHolder.deleteByCheck();
  }
}
