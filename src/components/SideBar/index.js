import './styles.css';


export default function Sidebar(props){
    return(
        <div className='sidebar'>
        <h2> Sidebar.. </h2>
         {props.children}
        </div>
    )

}