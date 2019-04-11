import { User } from '../user';
import * as fromRoot from '../../state/app.state';


export interface State extends fromRoot.State{
    users:UserState
}

export interface UserState {
    maskUserName:boolean,
    currentUser:User,
    users:User[]
}

const initalState: UserState = {
    maskUserName:false,
    currentUser:null,
    users:[]
}

export function reducer(state=initalState,action):UserState{
    debugger;
    switch(action.type){
        case 'TOGGLE_USER_NAME':
            return{
                ...state,
                maskUserName:action.payload
            }
            
        default:
            return state
    }
}