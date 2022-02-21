const counterReducer=(state='',action) =>{

    switch(action.type)
    {
        case 'INCREMENTCOUNTER':
            let prevState=state
            let newState= prevState +1;
            return newState
        case "SETCOUNTER":
            let newState1=action.payload
            return newState1
        default:
            return state
    }
}

export default counterReducer