
export const setInput=(data)=>{
    return {
        type:"SETINPUT",
        payload:data
    }
}
export const incrementInput=()=>{
    return {
        type:"INCREMENTINPUT"
    }
}
export const setCounter=(data)=>{
   return{
       type: "SETCOUNTER",
       payload: data
   }
}

export const incrementCounter=()=>{
    return{
        type: "INCREMENTCOUNTER"
    }
 }
export const addInList=(data)=>{
    return{
        type: "ADDINLIST",
        payload: data
    }
 }

 export const removeFromList=()=>{
    return{
        type: "REMOVEFROMLIST"
         
    }
 }
 export const removeAnItem=(data)=>{
    return{
        type: "REMOVEANITEM",
        payload:data
         
    }
 }

