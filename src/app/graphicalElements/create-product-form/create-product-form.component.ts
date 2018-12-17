import { Component, OnInit } from '@angular/core';
import { ProductType } from 'src/app/model/productType';
import { HttpErrorResponse } from '@angular/common/http';
import { ProductService } from '../services/product.service';
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
  category: string;
  state: boolean; 
  quantity: number

  statusRequete:string;
  minValue: number = 0;

  categories:string[]=Object.values(ProductType);

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

    // this._productService.addProducts(new Product(this.name,this.photo,this.description,this.price,this.category,this.state,this.quantity))
    
    this._productService.addProducts(newProduct)
    
    .then((response:any) => {this.statusRequete = response.message;})
    .catch((err:HttpErrorResponse) => {this.statusRequete = `Requête échouée : ${err.error.message}`;})
  }
}