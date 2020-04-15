import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { coreRoutes } from './core.routes';
import { HomeComponent } from './components/home/home.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(coreRoutes)
    ],
    declarations: [
        HomeComponent
    ],
    providers: [
    ]
})

export class CoreModule {
}
