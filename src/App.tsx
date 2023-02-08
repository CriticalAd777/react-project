import React from 'react';
<<<<<<< HEAD

import './App.css'
import { CounterMultiply } from './components/CounterMultiply';
import { CounterSquare } from './components/CounterSquare';
import { CounterUpdater } from './components/CounterUpdater';
import { Login } from './components/Login';
import { Logout } from './components/Logout';
import {useSelector} from 'react-redux';
import { Input } from './components/Input';
function App() {
  const auth: boolean = useSelector<any, boolean>(state => state.auth.authenticated);
  const [operand, setOperand] = React.useState(1);
  const [factor, setFactor] = React.useState(10);
  return <div>
    {auth && <div>
        <Input placeHolder={'Enter operand'} inputProcess={function (value: string):
         string {
        setOperand(+value);
        return '';
      } }></Input>
        <Input placeHolder={'Enter factor'} inputProcess={function (value: string):
         string {
        setFactor(+value);
        return '';
      } }></Input>
      </div>}
    {auth && <div>
    <CounterUpdater operand={operand}></CounterUpdater>
    <CounterSquare></CounterSquare>
    <CounterMultiply factor={factor}></CounterMultiply>
  </div>}
  {auth && <Logout></Logout>}
  {!auth && <Login></Login>}
  </div>
=======
import './App.css'
function App() {
  

  return <div ></div>
  
>>>>>>> f46a5016675adfa7250702c928954b44bbe56436

}
export default App;