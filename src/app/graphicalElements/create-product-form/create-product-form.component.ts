import { Component, OnInit } from '@angular/core';
import { ProductType } from 'src/app/model/productType';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { ProductService } from '../services/product.service';
import { Product } from 'src/app/model/product';
// import { AuthService } from 'src/app/auth/auth.service';


// class CreateProdForm {
//   name: string; photo: string; description: string; price: number;
//   category: ProductType; state: boolean; quantity: number
// }




@Component({
  selector: 'app-create-product-form',
  templateUrl: './create-product-form.component.html',
  styleUrls: ['./create-product-form.component.scss']
})
export class CreateProductFormComponent implements OnInit {

  // createProdForm: CreateProdForm = new CreateProdForm();
  name: string;
  photo: string;
  description: string;
  price: number;
  category: ProductType;
  state: boolean; 
  quantity: number

  statusRequete:[number, string];
  minValue: number = 0;

  // constructor(private _authService:AuthService) { }
  constructor(private _productService:ProductService) { }

  ngOnInit() {
  }


  positiveValue(): boolean {
    // return (this.createProdForm.price >= 0) && (this.createProdForm.quantity >= 0);
    return (this.price >= 0) && (this.quantity >= 0);
  }

  submit() {
    console.log(this.name, this.category);

    
    let newProduct = {
      "name": this.name,
      "photo": this.photo,
      "description": this.description,
      "price": this.price,
      "category": this.category,
      "state": this.state,
      "quantity": this.quantity
    }
    
    this._productService.addProducts(newProduct)
    .then((response:HttpResponse<any>) => {
                                          let stringResult:string =`Status : ${response.status} body : ${response.body}`;
                                          console.log(stringResult);
                                          console.log(response.body);
                                          if((response.status >= 300)){
                                            this.statusRequete = [1,stringResult];
                                          }else{
                                            this.statusRequete = [2,stringResult];
                                          }
                                        })
    .catch((err:HttpErrorResponse) => {
                    let stringResult:string = `requête échouée : ${err.message}`;
                    console.log(stringResult);
                    this.statusRequete = [0,stringResult]
                  })

    // this._productService.ajouterProduit(new Product(this.name,this.photo,this.description,this.price,this.category,this.state,this.quantity))
    


  }

}
