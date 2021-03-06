import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from 'src/app/graphicalElements/services/product.service';
import { Product } from 'src/app/model/product';
import { Router } from '@angular/router';

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

  constructor(private pService:ProductService, private router:Router) {

  }

  setVisible() {
    this.visible = true;
  }

  ngOnInit() {
  }


  goToPage(page:string){
    this.router.navigate([page]);
  }
}
