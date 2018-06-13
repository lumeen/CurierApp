import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {FormsModule} from "@angular/forms";
import { CuriersListComponent } from './curiers-list/curiers-list.component';
import {DataTableModule} from "angular5-data-table";
import {NgxDatatableModule} from '@swimlane/ngx-datatable';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CuriersListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DataTableModule.forRoot(),
    NgxDatatableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
