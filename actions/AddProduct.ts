import { Product } from "models/Product";

export class AddProduct {
    static readonly type = "ADD_PRODUCT";

    constructor(public payload:Product)
    {

    }
}