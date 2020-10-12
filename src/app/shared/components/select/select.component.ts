import {
    Component, OnInit, ChangeDetectionStrategy, HostBinding, ElementRef,
    EventEmitter, HostListener, Inject, Input, Output, QueryList, ViewChild, ViewChildren
} from '@angular/core';

@Component({
    selector: 'obbey-select',
    templateUrl: './select.component.html',
    styleUrls: ['./select.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectComponent {

    @Input()
    items: string[];

    @Input()
    value: string;

    @Output()
    valueChange = new EventEmitter<string>();

    @HostBinding('class._opened')
    opened = false;

    readonly optionFilters = {
        // tslint:disable-next-line: object-literal-key-quotes
        'mousemove': ({ target }: MouseEvent) =>
            target !== document.activeElement,
        'keydown.arrowDown': ({ target }: KeyboardEvent) =>
            this.options.last.nativeElement !== target,
        'keydown.arrowUp': ({ target }: KeyboardEvent) =>
            this.options.first.nativeElement !== target,
    };

    @ViewChild('input')
    private readonly input: ElementRef;

    @ViewChildren('option')
    private readonly options: QueryList<ElementRef>;

    constructor(
        @Inject(ElementRef) private readonly elementRef: ElementRef,
        // @Inject(EventFiltersService) service: EventFiltersService,
    ) {
        // service.register({
        //     'keydown.esc': () => this.opened,
        //     'focusout': ({ relatedTarget }: FocusEvent) =>
        //         !this.elementRef.nativeElement.contains(relatedTarget),
        // });
    }


    @HostBinding('class._focused')
    get focused(): boolean {
        return this.elementRef.nativeElement.contains(document.activeElement);
    }

    @HostListener('keydown.esc.filtered.stop')
    onEsc() {
        this.input.nativeElement.focus();
        this.opened = false;
    }

    @HostListener('focusout.filtered')
    onBlur() {
        this.opened = false;
    }

    onClick() {
        this.opened = !this.opened;
    }

    onSelect(value: string, input: ElementRef) {
        this.input.nativeElement.focus();
        this.value = value;
        this.valueChange.emit(value);
        this.opened = false;
    }

    onInputArrowDown() {
        if (!this.options.first) {
            this.opened = true;
        } else {
            this.options.first.nativeElement.focus();
        }
    }

    onArrowDown(currentIndex: number) {
        this.options.find((item, index) => index === currentIndex + 1).nativeElement.focus();
    }

    onArrowUp(currentIndex: number) {
        this.options.find((item, index) => index === currentIndex - 1).nativeElement.focus();
    }

}
