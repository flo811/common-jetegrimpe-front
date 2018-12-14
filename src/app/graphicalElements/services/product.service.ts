import { Injectable } from '@angular/core';
import { ProductType } from 'src/app/model/productType';
import { Product } from 'src/app/model/product';
import { Subject, observable, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  lastValue = new Subject<Product>();

  constructor(private _http: HttpClient) { }

  getProducts(type: string, itemNumber: number): Promise<Product[]> {
    return <Promise<Product[]>>this._http.get(environment.baseUrl.concat("product/few?type=" + type + "&number=" + itemNumber)).toPromise()
  }



  // Patch method to modify a product
  modifyProduct(product:Product):Promise<Product>{
    return <Promise<Product>>this._http.patch(environment.baseUrl + "productModif/" + name, product).toPromise()
  }


}