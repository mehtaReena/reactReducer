import { useContext } from 'react';
import CounterContext from '../../context/counterContext';
import './styles.css';




export default function Counter(props){
    let {counterState , dispatch} = useContext(CounterContext)
    return(
        <div className='counter-card'>
        <div className='counterbtn'>
       <button className='primaryBtn' onClick={()=>dispatch('increament')}>  + </button>

       {counterState.counterValue}
       <button className='primaryBtn'  onClick={()=>dispatch('decreament')}>  -  </button>
       </div>
       <div>
       <button className='primaryBtn'  onClick={()=>dispatch('reset')}>  reset  </button>

       </div>

        </div>


    )

}