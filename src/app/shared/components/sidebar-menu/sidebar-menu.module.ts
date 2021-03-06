import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarMenuComponent } from './sidebar-menu.component';

@NgModule({
    declarations: [
        SidebarMenuComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
    ],
    exports: [
        SidebarMenuComponent,
    ]
})
export class SidebarMenuModule { }
