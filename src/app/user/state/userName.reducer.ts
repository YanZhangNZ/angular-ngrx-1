export function reducer(state,action){
    debugger;
    switch(action.type){
        case 'TOGGLE_USER_NAME':
            console.log('current state is: ',JSON.stringify(state));
            console.log('payload is: ',action.payload);
            return{
                ...state,
                maskUserName:action.payload
            }
            
        default:
            return state
    }
}