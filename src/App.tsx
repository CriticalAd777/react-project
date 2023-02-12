import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App'
function App(){
  
return <BrowserRouter>
<Routes>
  <Route path='/' element={Layout/>}>
    <Route index element={<Home/>}></Route>
    <Route path='costumers' element={<Costumers/>}></Route>
    <Route path='orders' element={<Orders/>}></Route>
    <Route path='products' element={<products/>}>
                <Route path='dairy'element={DairyProducts}/>
                <Route path='dairy' element={<BreadProducts/>}
                </Route>

    </Route>
  </Route>
  </Routes>
  </BrowserRouter>

}

export default App;