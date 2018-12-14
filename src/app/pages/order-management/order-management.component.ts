import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from 'src/app/graphicalElements/services/product.service';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-order-management',
  templateUrl: './order-management.component.html',
  styleUrls: ['./order-management.component.scss']
})
export class OrderManagementComponent implements OnInit {

  @Input() product:Product;
  error:boolean;
  itemList: Product[];
  visible:boolean = false;

  constructor(private pService:ProductService) {

  }

  setVisible() {
    this.visible = true;
  }

  ngOnInit() {
    this.pService.modifyProduct(this.product)
      .then(prodModify => {this.product = prodModify;})
      .catch(err => console.log(err));
  }

}
