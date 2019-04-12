import { Product } from "../product";
import * as fromRoot from '../../state/app.state';
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductActionTypes, ProductActions } from "./product.actions";

//strongly type our state in case of typo leading to errors with no error warning
export interface State extends fromRoot.State{
    products:ProductState
}

export interface ProductState{
    showProductCode:boolean;
    currentProduct:Product;
    products:Product[];
}

const initialState: ProductState = {
    showProductCode:true,
    currentProduct:null,
    products:[]
}


const getProductFeatureState = createFeatureSelector<ProductState>('products');

export const getShowProductCode = createSelector(
    getProductFeatureState,
    state => state.showProductCode
);

export const getCurrentProduct = createSelector(
    getProductFeatureState,
    state => state.currentProduct
);

export const getProducts = createSelector(
    getProductFeatureState,
    state => state.products
);

//define state and param with ProductState type; change hard code with strongly typed actions
export function reducer(state=initialState,action:ProductActions):ProductState{
    switch(action.type){
        // case 'TOGGLE_PRODUCT_CODE':
        case ProductActionTypes.ToggleProductCode:
            return{
                ...state,
                showProductCode:action.payload,
            }
        case ProductActionTypes.SetCurrentProduct:
            return {
                ...state,
                currentProduct:{ ...action.payload }
            }
        case ProductActionTypes.ClearCurrentProduct:
            return {
                ...state,
                currentProduct:null
            }
        case ProductActionTypes.InitializeCurrentProduct:
            return{
                ...state,
                currentProduct:{
                    id:0,
                    productName:'',
                    productCode:'New',
                    description:'',
                    starRating:0
                }
            }
            
        default:
            return state
    }
}