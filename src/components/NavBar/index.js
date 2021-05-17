import { useContext } from 'react';
import CounterContext from '../../context/counterContext';
import './styles.css';


export default function Navbar(props){
    let {counterState} = useContext(CounterContext)
    return(
        <div className='navbar'>
        <h2> Navbar.. </h2>
        <p className='counter'>  {counterState.counterValue}</p>

        </div>
    )

}