import { useState } from "react"
import PropTypes from 'prop-types'

function Counter({onIncrease, onDecrease}) {
    const [count, setCount] = useState(0);

    const handleIncrease = () => {
        setCount(count + 1);
        if(onIncrease){
            onIncrease(count + 1);
        }
    }
    
    const handleDecrease = () => {
        setCount(count - 1);
        if(onDecrease){
            onDecrease(count - 1);
        }
    }

    return (
        <div>
            <span style={{fontsize:40, color:"blue"}}>
                {count}
            </span>
            <br />
            <button onClick={handleIncrease}>+</button>
            <button onClick={handleDecrease}>-</button>
        </div>
    )
}

Counter.PropTypes = {
    onChange: PropTypes.func
}

export default Counter;