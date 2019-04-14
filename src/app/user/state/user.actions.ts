import { Action } from "@ngrx/store";

//step 1: add enum for the action type
export enum UserActionTypes {
    MaskUserName = '[User] Mask User Name',
}

//build the associated action creator
export class MaskUserName implements Action {
    readonly type = UserActionTypes.MaskUserName;    
    constructor(public payload: boolean) { }
}

//create a union type for the action creators
export type UserActions = MaskUserName