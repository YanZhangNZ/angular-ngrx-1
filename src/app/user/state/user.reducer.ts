import { User } from '../user';
import * as fromRoot from '../../state/app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserActions, UserActionTypes } from './user.actions';


export interface State extends fromRoot.State{
    users:UserState
}

export interface UserState {
    maskUserName:boolean,
}

const initalState: UserState = {
    maskUserName:false,
}

const getUserFeatureState = createFeatureSelector<UserState>('user');

export const getMaskUserName = createSelector(
    getUserFeatureState,
    state => state.maskUserName
)


export function reducer(state=initalState,action:UserActions):UserState{
    switch(action.type){
        case UserActionTypes.MaskUserName:
            return{
                ...state,
                maskUserName:action.payload
            }
            
        default:
            return state
    }
}