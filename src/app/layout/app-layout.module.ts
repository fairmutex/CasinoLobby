import { NgModule } from '@angular/core';
import { MaterialModule } from '../shared/material.module';
import { AppToolbarComponent } from './app-toolbar/app-toolbar.component';
import { AppSidenavComponent } from './app-sidenav/app-sidenav.component';
import { AppLayoutComponent } from './app-layout.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        SharedModule,
        MaterialModule,
    ],
    declarations: [

        AppLayoutComponent,
        AppToolbarComponent,
        AppSidenavComponent,
    ],
    exports: [
        AppLayoutComponent,
    ],
    providers: [
    ],
    entryComponents: [
    ],
})
export class AppLayoutModule {

}
