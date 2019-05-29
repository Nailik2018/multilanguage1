import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SensorsOverviewComponent } from './pages/sensors-overview/sensors-overview.component';
import { ComponentComponent } from './pages/component/component.component';

const routes: Routes = [
    { path: 'sensors-overview', component: SensorsOverviewComponent },
    { path: 'component', component: ComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
