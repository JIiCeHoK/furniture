import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SliderComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}
