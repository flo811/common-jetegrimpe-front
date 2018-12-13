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

  getProducts(type: string, itemNumber: number): Promise<Product[]> {
    return <Promise<Product[]>>this._http.get(environment.baseUrl.concat("product/few?type=" + type + "&number=" + itemNumber)).toPromise()
  }



  addProducts(newProduct:Product):Promise<HttpResponse<any>> {

    console.log(newProduct)

    let test = {
                "name": newProduct.name,
                "photo": newProduct.photo,
                "description": newProduct.description,
                "price": newProduct.price,
                "category": newProduct.category,
                "state": newProduct.state,
                "quantity": newProduct.quantity
    }
    

    return this._http.post(environment.baseUrl.concat('product'), test,
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