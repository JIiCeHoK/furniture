import { IconsModule } from './../icons/icons.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupComponent } from './popup.component';



@NgModule({
    declarations: [PopupComponent],
    imports: [
        CommonModule,
        IconsModule,
    ],
    exports: [PopupComponent]
})
export class PopupModule { }
