import { ProductType } from "./productType";

export class Product {
    constructor(private _name: string, private _photo: string, private _description: string, private _price: number,
        private _category: ProductType, private _state: boolean, private _quantity: number) { }
    get quantity() { return this._quantity }
}