const inputReducer=(state='',action) =>{

    switch(action.type)
    {
        case 'INCREMENTINPUT':
            let prevState=state
            let newState= prevState +1;
            return newState
        case "SETINPUT":
            let newState1=action.payload
            return newState1
        default:
            return state
    }
}

export default inputReducer