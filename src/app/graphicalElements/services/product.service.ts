import { Injectable } from '@angular/core';
import { Product } from 'src/app/model/product';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private _http: HttpClient) { }

  getByName(name: string): Promise<Product> {
    return <Promise<Product>>this._http.get(environment.baseUrl.concat("product/" + name)).toPromise()
  }

  getProducts(type: string, itemNumber: number): Promise<Product[]> {
    return <Promise<Product[]>>this._http.get(environment.baseUrl.concat("product/few?type=" + type + "&number=" + itemNumber)).toPromise()
  }

  getProductsMultiCriteria(name: string, category: string, priceMin: number, priceMax: number, sort: string, pageNbr: number, nbrByPage: number): Promise<Product[]> {
    return <Promise<Product[]>>this._http.get(environment.baseUrl.concat("product/criteria?" + "name=" + name + "&category=" + category + "&priceMin=" + priceMin
      + "&priceMax=" + priceMax + "&sort=" + sort + "&pageNbr=" + pageNbr + "&nbrByPage=" + nbrByPage)).toPromise()
  }

  getResultNbr(name: string, category: string, priceMin: number, priceMax: number): Promise<number> {
    return <Promise<number>>this._http.get(environment.baseUrl.concat("product/count?" + "name=" + name + "&category=" + category + "&priceMin=" + priceMin
      + "&priceMax=" + priceMax)).toPromise()
  }
}