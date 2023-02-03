import {useSelector} from 'react-redux';
type Props ={
    factor:number
}
export const CounterMultiply:React.FC <Props> =({factor})=>{
 const count = useSelector<any,number>(state =>state.counter.count);
    return <div>
        <p>count ^2={count *10}</p>
        <p>factor={factor}</p>
    </div> 
    
}