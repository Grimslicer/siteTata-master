import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IPistolClass, Pistol, Product } from 'src/app/models/products';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-pistoale',
  templateUrl: './pistoale.component.html',
  styleUrls: ['./pistoale.component.css'],
})
export class PistoaleComponent {
  products: IPistolClass[] = [
    {
      id: 1,
      name: 'PISTOL SV-PLUS',
      details: {
        series: 'HDS-700',
        weight: '500g',
        pressure: '450 bar',
      },
      imgFileName: 'SV-PLUS GUN (HDS-700).jpg',
    },
    {
      id: 2,
      name: 'PISTOL CT',
      details: {
        series: 'HDC-605',
        weight: '430g',
        pressure: '350 bar',
      },
      imgFileName: 'CT-GUN (HDC-605).jpg',
    },
    {
      id: 3,
      name: 'PISTOL PRELUNGITOR',
      details: {
        series: 'HPG-100,180,240',
        weight: '1,350 g',
        pressure: '450 bar',
      },
      imgFileName: 'POLE GUN (HPG-100, 180, 240).jpg',
    },
    {
      id: 4,
      name: 'PISTOL AUTOMAT',
      details: {
        series: 'HAG-05',
        weight: '700 g',
        pressure: '450 bar',
      },
      imgFileName: 'AUTO GUN (HAG-05) (1).jfif',
    },
    {
      id: 5,
      name: 'PISTOL AUTOMAT',
      details: {
        series: 'HAG-053',
        weight: '960 g',
        pressure: '12bar pentru sticlă',
      },
      imgFileName: 'BEAD GUN (HAG-053) (1).jfif',
    },
    {
      id: 6,
      name: 'PISTOL GOLDEN',
      details: {
        series: 'HDG-657',
        weight: '500g',
        pressure: '450 bar',
      },
      imgFileName: 's5_2b-removebg-preview.png',
    },
    {
      id: 7,
      name: 'PISTOL CT',
      details: {
        series: 'HDC-605',
        weight: '430 g',
        pressure: '350 bar',
      },
      imgFileName: 'removed-BG.png',
    },
  ];

  pistoaleEntans: IPistolClass[] = [
    {
      id: 8,
      name: 'PISTOL DE MÂNĂ',
      details: {
        series: 'HDG-052',
        weight: '480 g',
        pressure: '500 bar',
      },
      imgFileName: 'HAND GUN (HDG-052).jpg',
    },
    {
      id: 9,
      name: 'PISTOL UL',
      details: {
        series: 'HSG-775',
        weight: '630 g',
        pressure: '510 bar',
      },
      imgFileName: 'UL-GUN (HSG-775).jfif',
    },
  ];

  selectedProduct!: Pistol;

  constructor(private router: Router, private productServ: ProductService) {}

  ngOnInit() {
    console.log('The products are', this.products);
  }

  selectProduct(product: Product) {
    console.log('Product is', product);
    this.selectedProduct = product;
    console.log('Selected product is', this.selectedProduct);
    this.productServ.setSelectedProduct(this.selectedProduct);
    // Navigate to the 'pompe/:id' route with the selectedProduct object as a query parameter
    this.router.navigate(['pistoale', this.selectedProduct.id]);
  }

  navigateToChildRoute(id: string) {}
}
