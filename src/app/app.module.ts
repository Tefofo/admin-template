import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TablesComponent } from './tables/tables.component';
import { AppService } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    NavBarComponent,
    TablesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
