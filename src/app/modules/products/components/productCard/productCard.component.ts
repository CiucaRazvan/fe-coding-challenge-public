import { Component, HostListener, Input } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './productCard.component.html',
  styleUrls: ['./productCard.component.scss'],
})
export class ProductCardComponent {
  @Input()
  public product?: Product;

  @HostListener('click')
  public handleProductClick() {
    window.open(this.product?.url, '_blank');
  }
}