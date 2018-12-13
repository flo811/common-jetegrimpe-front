import { Component, OnInit } from '@angular/core';
import { ProductType } from 'src/app/model/productType';

// import { AuthService } from 'src/app/auth/auth.service';


class CreateProdForm {  name: string; photo: string; description: string; price: number;
  category: ProductType; state: boolean; quantity: number }

  


@Component({
  selector: 'app-create-product-form',
  templateUrl: './create-product-form.component.html',
  styleUrls: ['./create-product-form.component.scss']
})
export class CreateProductFormComponent implements OnInit {

  createProdForm:CreateProdForm = new CreateProdForm();

  minValue:number=0;

  // constructor(private _authService:AuthService) { }
  constructor() { }

  ngOnInit() {
  }


  positiveValue():boolean{
    return (this.createProdForm.price >= 0)&&(this.createProdForm.quantity >= 0);
  }

  submit() {
    console.log(this.createProdForm);

    



  }

}
