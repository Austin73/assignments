import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addInList, incrementCounter, incrementInput, removeAnItem, removeFromList, setCounter, setInput } from '../actions'

function Counter() {

  const input=useSelector(state=>state.input)
  const counter=  useSelector(state=>state.counter)
  const list =useSelector(state=> state.list)
  const dispatch = useDispatch()

  const listItems = list.map((number,index) =>
  <li key={index}>
    {number} <button key={index} onClick={()=>{
        dispatch(removeAnItem(number))
    }}>Delete</button>
  </li>
);
  useEffect(()=>{
    
    if(input%counter ===0)
    {
        dispatch(addInList(input))
    }
    else
    {
        dispatch(removeFromList())
        let lastValue= input
        let i=1;
        while(i <= lastValue)
        {
            if(i%counter ===0)
             dispatch(addInList(i))
             i++;
        }

        

    }
  },[input,counter,dispatch])
  return (
    <div>


        <div>
        Input Value - {input}
         <input onChange={(e)=>{
             dispatch(setInput(parseInt(e.target.value)))
         }}/>  
         <button onClick={()=>{
             dispatch(incrementInput())
         }}>Increment Input</button>
        </div>

        <div>
        Counter checker - {counter}
         <input onChange={(e)=>{
             
             dispatch(setCounter(parseInt(e.target.value)))
         }}/>  
         <button onClick={()=>{
             dispatch(incrementCounter())
         }}>Increment counter checker</button>
        </div>
        <div>
        <ul>{listItems}</ul>
        </div>

    </div>
  )
}

export default Counter