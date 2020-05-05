import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../../../core/services/products/products.service';
import { Product } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products: Product[] = [];
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

  constructor(private productsService: ProductsService ) { 

  }

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productsService.getAllProducts().subscribe(products => {
      this.products = products;
    });
  }

  deleteProduct(id: string) {
    this.productsService.deleteProduct(id).subscribe(rpta => {
          this.fetchProducts();
      });
  }

  // desafios
  // 1. Eliminar el producto cuando sea true sin llamar al fetchProduct, sino eliminando su indice de la lista
  // 2. Hacer order de la lista.

}