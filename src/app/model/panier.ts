import { Product } from "./product";

export class Panier {

    articles: Map<Product, number>

    constructor(map: Map<Product, number>) { this.articles = map }
}