import { Injectable } from '@angular/core';
import { Product } from 'src/app/model/product';
import { Subject } from 'rxjs';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';

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

  getProducts(category: string, itemNumber: number): Promise<Product[]> {
    return <Promise<Product[]>>this._http.get(environment.baseUrl.concat("product/few?category=" + category + "&number=" + itemNumber)).toPromise()
  }

  addProducts(newProduct: any): Promise<HttpResponse<any>> {
    console.log(newProduct)
    return this._http.post(environment.baseUrl.concat('product'), newProduct,
      { headers: new HttpHeaders({ "Content-Type": "application/json" }) })
      .toPromise()
      .then((response: HttpResponse<any>) => response);
  }

  deleteProductByName(name:string):Promise<HttpResponse<any>>{
    console.log(`Envoie de la requête de suppression du produit : ${name}`);
    return this._http.delete(environment.baseUrl.concat(`product/${name}`))
                          .toPromise()
                          .then((response: HttpResponse<any>) => response);
  }

  // Patch method to modify a product
  modifyProduct(product: Product): Promise<Product> {
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