import { Component } from '@angular/core';

@Component({
  selector: 'app-directiva-ng-style',
  templateUrl: './directiva-ng-style.component.html',
  styleUrls: ['./directiva-ng-style.component.css'],
})
export class DirectivaNgStyleComponent {
  puntuacion: any = null;

  getColor() {
    if (this.puntuacion >= 7) {
      return 'green';
    } else if (this.puntuacion >= 5) {
      return 'orange';
    } else {
      return 'red';
    }
  }
}
