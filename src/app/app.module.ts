import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { MapComponent } from './map/map.component';

import { ActivityService } from './services/activity.service';
import{ MapService } from './services/map.service';
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from '../routes';


@NgModule({
  declarations: [
    AppComponent,
    ActivityListComponent,
    MapComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    RouterModule,
    BrowserModule
  ],
  providers: [ActivityService, MapService],
  bootstrap: [AppComponent]
})
export class AppModule { RouterModule }
