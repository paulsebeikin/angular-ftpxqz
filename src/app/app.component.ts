import {
  ApplicationRef,
  ChangeDetectorRef,
  Component,
  NgZone,
} from '@angular/core';

import * as allIcons from '@progress/kendo-svg-icons';

@Component({
  selector: 'my-app',
  template: `
        <div class="config-wrapper">
            <p>Size</p>
            <kendo-svg-icon [icon]="icon()"></kendo-svg-icon>
            <kendo-svg-icon [icon]="icon()" size="medium"></kendo-svg-icon>
            <kendo-svg-icon [icon]="icon()" size="large"></kendo-svg-icon>
        </div>
        <kendo-textbox
            [style.width.px]="350"
            [value]="val"
            placeholder="Type your message here"
            [clearButton]="true"
            (afterValueChanged)="onAfterValueChange($event)"
            (valueChange)="onValueChange($event)"
        ></kendo-textbox>
        <button kendo-button (click)="handleClick()">Submit</button>
        <div>{{ val }}</div>
        <div>{{ rawValue }}</div>
        <div>{{ value }}</div>
    `,
  styles: [
    `
        .config-wrapper {
            vertical-align: top;
            padding-bottom: 44px;
        }

        .config-wrapper > .k-icon {
            margin-right: 14px;
        }
    `,
  ],
})
export class AppComponent {
  public val: string = 'arrowDownIcon';
  public rawValue = 0;
  public value = 0;
  public icons = allIcons;
  //   public icon = allIcons[this.val ?? 'arrowDownIcon'];

  icon() {
      console.log('callign icon, val = ', this.val);
    return allIcons[this.val];
  }

  constructor(
    private _zone: NgZone,
    private _ref: ChangeDetectorRef,
    private _appRef: ApplicationRef
  ) {}

  handleClick() {
    console.log(this.icon);

    // this._ref.detectChanges();
    this._ref.markForCheck();
    // this._appRef.tick();
    // this._zone.run(() => this.val = 'boldIcon');
  }

  public onValueChange(value: any): void {
    this.val = value;
  }

  public onAfterValueChange(value: any): void {
    this.value = value;
  }
}
