import { Injectable } from '@angular/core';
import { Product } from 'src/app/model/product';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { Subject} from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  lastValue = new Subject<Product>();

  constructor(private _http: HttpClient) { }

  //Ne pas utiliser
  getByName(name: string): Promise<Product> {
    return <Promise<Product>>this._http.get(environment.baseUrl.concat("product/" + name)).toPromise()
  }

  getProducts(type: string, itemNumber: number): Promise<Product[]> {
    return <Promise<Product[]>>this._http.get(environment.baseUrl.concat("product/few?type=" + type + "&number=" + itemNumber)).toPromise()
  }

  addProducts(newProduct:Product):Promise<HttpResponse<any>> {
    return this._http.post(environment.baseUrl.concat('product'), newProduct)
                      .toPromise()
                      .then((response:HttpResponse<any>)=>response);
  }

  // Patch method to modify a product
  modifyProduct(product:Product):Promise<Product>{
    return <Promise<Product>>this._http.patch(environment.baseUrl + "productModif/" + name, product).toPromise()
  }

  //Mettre des valeurs par défaut
  getProductsMultiCriteria(name: string, category: string, priceMin: number, priceMax: number, sort: string, pageNbr: number, nbrByPage: number): Promise<Product[]> {
    return <Promise<Product[]>>this._http.get(environment.baseUrl.concat("product/criteria?" + "name=" + name + "&category=" + category + "&priceMin=" + priceMin
      + "&priceMax=" + priceMax + "&sort=" + sort + "&pageNbr=" + pageNbr + "&nbrByPage=" + nbrByPage)).toPromise()
  }

  getResultNbr(name: string, category: string, priceMin: number, priceMax: number): Promise<number> {
    return <Promise<number>>this._http.get(environment.baseUrl.concat("product/count?" + "name=" + name + "&category=" + category + "&priceMin=" + priceMin
      + "&priceMax=" + priceMax)).toPromise()
  }
}