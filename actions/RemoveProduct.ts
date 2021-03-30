import { Product } from "models/Product";

export class RemoveProduct {
    static readonly type = "REMOVE_PRODUCT";

    constructor(public payload:Product)
    {
        
    }
}