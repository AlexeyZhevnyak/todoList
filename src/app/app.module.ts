import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ContainerComponent} from './container/container.component';
import {ButtonsComponent} from './buttons/buttons.component';
import {FormsModule} from "@angular/forms";
import {TaskItemComponent} from './task-item/task-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    ButtonsComponent,
    TaskItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
