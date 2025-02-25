import React, {useState} from 'react'




function Counter() {

    const [gonona, setCount] = useState(0);

    const Increment = () =>{
        setCount(gonona + 1);

    }
    const Decrement = () =>{
        if(gonona>0)
            {setCount(gonona - 1);}
    }

    const Zero = () =>{
        setCount(0)
    }

  return (
    
    <div className='counter-container'>
        <h3 className='count-display'>Count : {gonona}</h3>
        <div className='button-group'>
            <button className='button increment-button' onClick={Increment}>+</button>
            <button className='button decrement-button' onClick={Decrement}>-</button>
            <button className='button reset-button' onClick={Zero}>0</button>
        </div>
    </div>
  )
}


export default Counter;