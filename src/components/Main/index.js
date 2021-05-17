import './styles.css';
import NavBar from '../NavBar';
import SideBar from '../SideBar';
import Content from '../Content';
import { CounterContextProvider } from '../../context/counterContext';


export default function Main(props){
    return(
        <CounterContextProvider>
        <div className='main-container'>
            <NavBar></NavBar>
            <div className={'flex-row flex-1'}>
            <SideBar>

                <div>
                   {'new Element'}
                </div>
            </SideBar>
            <Content></Content>

            </div>
        </div>
        </CounterContextProvider>
    )

}