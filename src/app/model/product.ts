import { ProductType } from "./productType";

export class Product {
    constructor(private _name: string, private _photo: string, private _description: string, private _price: number,
        private _category: ProductType, private _state: boolean, private _quantity: number) { }

    get name(){return this._name}   
    get photo(){return this._photo}  
    get description(){return this._description}  
    get price(){return this._price}  
    get category(){return this._category}  
    get state(){return this._state}  
    get quantity(){return this._quantity}   
}