import { ProductType } from "./productType";

export class Product {

    name: string
    photo: string
    description: string
    price: number
    category: ProductType
    state: boolean
    quantity: number

    constructor(name: string, photo: string, description: string, price: number, category: ProductType, state: boolean, quantity: number) {
        this.name = name
        this.photo = photo
        this.description = description
        this.price = price
        this.category = category
        this.state = state
        this.quantity = quantity
    }
}