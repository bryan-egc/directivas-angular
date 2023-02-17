import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva-ng-for',
  templateUrl: './directiva-ng-for.component.html',
  styleUrls: ['./directiva-ng-for.component.css'],
})
export class DirectivaNgForComponent implements OnInit{
  proveedores: Array<any> = [
    {
      nombre: 'Gas natural',
      cif: 'A12K3S12',
    },
    {
      nombre: 'Iberdrola',
      cif: 'B2JAS233',
    },
    {
      nombre: 'Zeta gas',
      cif: 'P0132300',
    },
    {
      nombre: 'Tropigas',
      cif: 'DA12390A',
    },
  ];

  ngOnInit(): void {
    setTimeout(() => {
      this.proveedores.push({nombre: 'Orange', cif: 'SAD231K1'})
    }, 3000);
  }

}
