import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private selectedProductSubject = new BehaviorSubject<any | null>(null);

  setSelectedProduct(product: any) {
    this.selectedProductSubject.next(product);
  }

  getSelectedProduct() {
    return this.selectedProductSubject.asObservable();
  }
}
