import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'nx-check-crazy-button',
  template: ` <button (click)="handleBeCrazy()">Baby, I'm craaaaazyyy</button> `,
  styleUrls: ['./crazy-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CrazyButtonComponent {

  public handleBeCrazy(): void {
    alert("wohoooooo!");
  }
}
