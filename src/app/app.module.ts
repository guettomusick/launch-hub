import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuiModule } from 'ng2-semantic-ui';
import { LaunchListComponent } from './launch-list/launch-list.component';
import { LaunchSiteComponent } from './launch-site/launch-site.component';
import { MapComponent } from './launch-site/map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    LaunchListComponent,
    LaunchSiteComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SuiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
