import { Action } from "@ngrx/store";
import { Product } from "../product";

//step 1 : name your actions
export enum ProductActionTypes {
    ToggleProductCode = '[Product] Toggle Product Code',
    SetCurrentProduct = '[Product] Set Current Product',
    ClearCurrentProduct = '[Product] Clear Current Prodct',
    InitializeCurrentProduct = '[Product] Initialize Current Product',
    Load = '[Product] Loading',
    LoadSuccess = '[Product] Load Success',
    LoadFail = '[Product] Load Fail'

}

//step 2: build action creator
export class ToggleProductCode implements Action {
    readonly type = ProductActionTypes.ToggleProductCode;
    
    constructor(public payload: boolean) { }
}

export class SetCurrentProduct implements Action {
    readonly type = ProductActionTypes.SetCurrentProduct;
    
    constructor(public payload: Product) { }
}

export class ClearCurrentProduct implements Action {
    readonly type = ProductActionTypes.ClearCurrentProduct;
    
// no payload
}
export class InitializeCurrentProduct implements Action {
    readonly type = ProductActionTypes.InitializeCurrentProduct;
// no need payload
}

export class Load implements Action {
    readonly type = ProductActionTypes.Load;
}

export class LoadSuccess implements Action {
    readonly type = ProductActionTypes.LoadSuccess;
    constructor(public payload: Product[]) { }
}

export class LoadFail implements Action {
    readonly type = ProductActionTypes.LoadFail;
    constructor(public payload: string) { }
}

//step 3: union all action creators
export type ProductActions = ToggleProductCode
|SetCurrentProduct
|ClearCurrentProduct
|InitializeCurrentProduct
|Load
|LoadSuccess
|LoadFail