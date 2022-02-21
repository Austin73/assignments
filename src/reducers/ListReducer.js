const listReducer = (state = [], action) => {

    switch (action.type) {
        case 'ADDINLIST':
            return [...state, action.payload]
        case "REMOVEFROMLIST":
            return []
        case "REMOVEANITEM":
           let arr = state.filter(function(item) {
                return item !== action.payload
            })
             return arr
        default:
            return state
    }
}

export default listReducer