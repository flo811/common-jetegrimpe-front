import { Injectable } from '@angular/core';
import { ProductType } from 'src/app/model/productType';
import { Product } from 'src/app/model/product';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private _http: HttpClient) { }

  getProducts(type: string, itemNumber: number): Promise<Product[]> {
    return <Promise<Product[]>>this._http.get(environment.baseUrl.concat("product?type=" + type + "&number=" + itemNumber)).toPromise()
  }
}