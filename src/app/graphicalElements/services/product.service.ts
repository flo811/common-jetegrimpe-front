import { Injectable } from '@angular/core';
import { ProductType } from 'src/app/model/productType';
import { Product } from 'src/app/model/product';
import { Subject, Observable } from 'rxjs';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private _http: HttpClient) { }

  getProducts(category: string, itemNumber: number): Promise<Product[]> {
    return <Promise<Product[]>>this._http.get(environment.baseUrl.concat("product/few?type=" + category + "&number=" + itemNumber)).toPromise()
  }



  addProducts(newProduct:any):Promise<HttpResponse<any>> {

    console.log(newProduct)

    

    return this._http.post(environment.baseUrl.concat('product'), newProduct,
                          {headers: new HttpHeaders({"Content-Type": "application/json"})})
                      .toPromise()
                      .then((response:HttpResponse<any>)=>response);
  }
  
// ajouterProduit(prod: Product): Promise<Product> {

//   console.log(prod)

//   return this._http.post(environment.baseUrl.concat('product'), prod)
//     .toPromise().then((c: Product) => c = new Product("this.name","this.photo","this.description",0,ProductType.Baudrier,true,0))
// }


}