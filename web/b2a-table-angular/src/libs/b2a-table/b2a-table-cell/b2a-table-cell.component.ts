import { Component, HostBinding, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { calculateWith, defaultIndent } from './b2a-table-cell-fns';

@Component({
    selector: 'b2a-table-cell',
    template: `
        <ng-content></ng-content>
    `,
})
export class B2aTableCellComponent {
    private _width = null;
    @Input() set width(value: string | null) {
        if (value) {
            this._width = value;
            this._recalculateWidthUnit(this.width, this.level);
        }
    }
    get width() {
        return this._width;
    }

    private _level = 0;
    @Input() set level(value: number | null) {
        this._level = value;
        this._recalculateWidthUnit(this.width, this.level);
    }
    get level() {
        return this._level;
    }

    @HostBinding('class')
    get className() {
        return this.width === null || this._unit === '%' ? 'b2a-table__cell' : 'b2a-table__cell--width';
    }

    @HostBinding('style.width')
    get styleWidth() {
        return this.width === null ? null : this._domSanitizer.bypassSecurityTrustStyle(this._calculatedWith as string);
    }

    private _calculatedWith = this.width;
    private _unit: string = null;

    constructor(private _domSanitizer: DomSanitizer) {}

    private _recalculateWidthUnit(width: string, level: number) {
        const { full, unit } = calculateWith(width, defaultIndent, level);
        this._calculatedWith = full;
        this._unit = unit;
    }
}
