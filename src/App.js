
import './App.css';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import Login from './pages/Login';
import Registration from './pages/Registration';
import ApplyLoan from './pages/ApplyLoan';
import NavBar from './component/NavBar';
import Home from './pages/Home';
import UserDashboard from './pages/UserDashboard';
import ChangePassword from './ChangePassword';



function App() {
  return (
    <>
     <Router>
      <Routes>
       <Route path="login" element={<Login/>}/>
       <Route path='reg' element={<Registration/>}/>
       <Route path='page'element={<ApplyLoan/>}/>
       <Route path='home'element={<Home/>}/>
       <Route path='nav'element={<NavBar/>}/>
       <Route path="change" element={<ChangePassword/>} />
       <Route path='dash' element={<UserDashboard/>}/>
      </Routes>
    </Router>

    </>

  );
}

export default App;
