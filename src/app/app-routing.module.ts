import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaunchSiteComponent } from './launch-site/launch-site.component';
import { LaunchListComponent } from './launch-list/launch-list.component';

const routes: Routes = [
  {path: 'launch', component: LaunchListComponent, data: { title: 'Upcoming Rocket Launches' }  },
  {path: 'launch/:flightNumber', component: LaunchSiteComponent, data: { title: 'Launch Site' }  },
  {path: '', redirectTo: 'launch', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
