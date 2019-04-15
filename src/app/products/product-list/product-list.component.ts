import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription, Observable } from 'rxjs';

import { Product } from '../product';
import { ProductService } from '../product.service';
import { Store, select } from '@ngrx/store';
import * as fromProduct from '../state/product.reducer';
import * as productActions from '../state/product.actions';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  pageTitle = 'Products';
  errorMessage$: Observable<string>;

  displayCode: boolean;

  products: Product[];

  // Used to highlight the selected product in the list
  selectedProduct: Product | null;
  componentActive = true;
  products$: Observable<Product[]>;
  // sub: Subscription;

  constructor(
    private productService: ProductService,
    private store: Store<fromProduct.State>  
  ) { }

  ngOnInit(): void {
    this.products$ = this.store.pipe(select(fromProduct.getProducts));
    // this.sub = this.productService.selectedProductChanges$.subscribe(
    //   selectedProduct => this.selectedProduct = selectedProduct
    // );

    this.errorMessage$ = this.store.pipe(select(fromProduct.getError));
//previously we get products from services. but now we do that with effect like bellow:
    this.store.dispatch(new productActions.Load());

    //subscribe here coz it does not use an async pipe
    this.store.pipe(
      select(fromProduct.getCurrentProduct),
      takeWhile(()=>this.componentActive)).subscribe(
      currentProduct => this.selectedProduct = currentProduct
    )

    
    // this.productService.getProducts().subscribe(
    //   (products: Product[]) => this.products = products,
    //   (err: any) => this.errorMessage = err.error
    // );
    
//TODO: unsubscribe
    this.store.pipe(
      select(fromProduct.getShowProductCode),
      takeWhile(()=>this.componentActive)).subscribe(
        showProductCode => this.displayCode = showProductCode
      )
  }

  ngOnDestroy(): void {
    // this.sub.unsubscribe();
    this.componentActive = false;
  }

  checkChanged(value: boolean): void {
    // this.store.dispatch({
    //   type:'Toggle Product Code',
    //   payload:value
    // })
    this.store.dispatch(
      new productActions.ToggleProductCode(value)
    )
  }

  newProduct(): void {
    // this.productService.changeSelectedProduct(this.productService.newProduct());
    this.store.dispatch(new productActions.InitializeCurrentProduct())
  }

  productSelected(product: Product): void {
    // this.productService.changeSelectedProduct(product);
    this.store.dispatch(new productActions.SetCurrentProduct(product))
  }

}
