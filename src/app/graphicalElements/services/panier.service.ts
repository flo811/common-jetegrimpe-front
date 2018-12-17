import { Injectable } from '@angular/core';
import { Panier } from 'src/app/model/panier';
import { AuthService } from 'src/app/auth/auth.service';
import { Collegue } from 'src/app/auth/auth.domains';
import { Product } from 'src/app/model/product';

@Injectable({
  providedIn: 'root'
})

export class PanierService {

  panier: Panier
  storageId: string = ""

  constructor(_authService: AuthService) {
    _authService.collegueConnecteObs.subscribe((collegue: Collegue) => {
      this.storageId = collegue.email + "panier"
      this.panier = new Panier(new Map(JSON.parse(localStorage.getItem(this.storageId))))
      if (this.panier == null) {
        this.panier = new Panier(new Map())
      }
    })
  }

  getPanier(): Panier { return this.panier }

  addToPanier(product: Product) {
    let nbr: number = this.panier.articles.get(product)
    this.panier.articles.set(product, nbr == undefined ? 1 : nbr + 1)
    this.saveToLocaltorage()
  }

  removeItem(product: Product) {
    let nbr: number = this.panier.articles.get(product)
    nbr == 1 ? this.panier.articles.delete(product) : this.panier.articles.set(product, nbr - 1)
    this.saveToLocaltorage()
  }

  removeAll() {
    this.panier = new Panier(new Map())
    this.saveToLocaltorage()
  }

  saveToLocaltorage() {
    localStorage.setItem(this.storageId, JSON.stringify(Array.from(this.panier.articles.entries())))
  }
}