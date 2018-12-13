import { ProductType } from "./productType";

export class Product {
    constructor(private name: string, private photo: string, private description: string, private price: number,
        private category: ProductType, private state: boolean, private quantity: number) { }
}