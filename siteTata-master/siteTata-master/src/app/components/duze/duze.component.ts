import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IDuze, IDuzeReverse } from 'src/app/models/products';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-duze',
  templateUrl: './duze.component.html',
  styleUrls: ['./duze.component.css'],
})
export class DuzeComponent {
  duzeFlat: IDuze[] = [
    {
      id: 1,
      name: 'The Line Marking',
      reference: '63-507',
      compozitie: 'Corp din oțel inoxidabil',
      h: '11 mm',
      greek: '15 mm',
      photo: '63-507.jpg',
    },
  ];

  duzeReverse: IDuzeReverse[] = [
    {
      id: 2,
      name: 'SPEEDY 5',
      MWP: '350 bar',
      Compatibilitate: 'Fără protecție dedicată Exitflex',
      Standard: 'Da; 88-491',
      Superfinish: 'Da; 88-492',
      Twintip: 'Da; 88-493',
      Marcaj: 'Da; 88-490',
      photo: '8T1A0190.png',
    },
  ];

  constructor(private router: Router, private productServ: ProductService) {}
  selectedProduct: any;

  selectProduct(product: any) {
    console.log('Product is', product);
    this.selectedProduct = product;
    console.log('Selected product is', this.selectedProduct);
    this.productServ.setSelectedProduct(this.selectedProduct);
    // Navigate to the 'pompe/:id' route with the selectedProduct object as a query parameter
    this.router.navigate(['duze', this.selectedProduct.id]);
  }
}
