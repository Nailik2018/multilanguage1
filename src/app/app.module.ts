import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccordionModule } from 'primeng/accordion';
import { MenuItem } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NaviComponent } from './navi/navi.component';
import { SensorsOverviewModule } from './pages/sensors-overview/sensors-overview.module';
import { ComponentModule } from './pages/component/component.module';

@NgModule({
    declarations: [
        AppComponent,
        NaviComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AccordionModule,
        BrowserAnimationsModule,
        SensorsOverviewModule,
        ComponentModule,

    ],
    providers: [
        { provide: LOCALE_ID, useValue: 'fr'},
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
