import { Action, Selector, State, StateContext } from "@ngxs/store";
import { AddProduct } from "actions/AddProduct";
import { RemoveProduct } from "actions/RemoveProduct";
import {BasketStateModel} from "../models/Basket";

@State<BasketStateModel>({
    name:"products",
    defaults: {
        products:[]
    }
})

export class BasketState {
    @Selector()
    static getProducts(state:BasketStateModel) {
        return state.products;
    }

    @Action(AddProduct)
    add({getState, patchState}:StateContext<BasketStateModel>, {payload}:AddProduct) {
        const state = getState();
        patchState({
            products:[...state.products, payload]
        })
    }

    @Action(RemoveProduct)
    remove({getState, patchState}:StateContext<BasketStateModel>, {payload}:RemoveProduct) {
        const state = getState();
        let productsCopy = [...state.products];
        let indexToRemove = productsCopy.indexOf(payload);
        productsCopy.splice(indexToRemove, 1);
        patchState({
            products:productsCopy
        })
    }
}