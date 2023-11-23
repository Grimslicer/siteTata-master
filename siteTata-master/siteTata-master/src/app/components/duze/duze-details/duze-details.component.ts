import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-duze-details',
  templateUrl: './duze-details.component.html',
  styleUrls: ['./duze-details.component.css'],
})
export class DuzeDetailsComponent implements OnInit {
  selectedProduct: any;

  constructor(
    private route: ActivatedRoute,
    private productServ: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log('Product before value', this.selectedProduct);
    this.productServ.getSelectedProduct().subscribe((product) => {
      if (!product) {
        this.router.navigate(['/duze']);
      }
      this.selectedProduct = product;
      console.log('Selected product is', this.selectedProduct);
    });
  }
}
