import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProductClass, Product } from 'src/app/models/products';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-pump-details',
  templateUrl: './pump-details.component.html',
  styleUrls: ['./pump-details.component.css'],
})
export class PumpDetailsComponent implements OnInit {
  selectedProduct: IProductClass = new IProductClass(null);

  constructor(
    private route: ActivatedRoute,
    private productServ: ProductService,
    private router: Router
  ) {}
  ngOnInit(): void {
    console.log('Product before value', this.selectedProduct);
    this.productServ.getSelectedProduct().subscribe((product) => {
      if (!product) {
        this.router.navigate(['/pompe']);
      }
      this.selectedProduct = product;
      console.log('Selected product is', this.selectedProduct);
    });
  }
}
