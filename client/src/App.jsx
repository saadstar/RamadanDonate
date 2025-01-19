import {BrowserRouter, Navigate, Route, Routes,useLocation} from 'react-router-dom'
import Layout from './components/Layout/Layout';
import Dashboard from './pages/Dashboard/Dashboard';
import DataGrid from './pages/DataGrid/DataGrid';
import { Home } from './pages/Home/Home';
import { Footer } from './components/Footer/Footer';
import { AddUser } from './pages/AddUser/AddUser';
import { Login } from './pages/Login/Login';
import { useSelector } from "react-redux";
import { Toaster } from "sonner";
import { Register } from './pages/Register/Register';

const App = () => {
  const { user } = useSelector((state) => state.auth);    
  
  return (
    <div id="dashboard">
    <BrowserRouter>
      {user?<Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="dashboard" element={<Dashboard/>}/>
          <Route path="users" element={<DataGrid/>}/>
          <Route path='home' element={<Home/>}/>
          <Route path='add-user' element={<AddUser/>}/>
        </Route>
      </Routes> :
          <Routes>            
          <Route path='/' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
      </Routes>
      }
      </BrowserRouter>
      <Toaster position="bottom-left"/>
    <Footer/>
  </div>)
};

export default App;
