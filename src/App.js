
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Component/Home';
import SignUp from './Component/SignUp';
import Verify from './Component/Verify';
import SignIn from './Component/SignIn';


import Dashboard from './pages/Dashboard'
import Transections from './pages/Transections'
import PaymentLink from './pages/PaymentLink'
import PaymentButton from './pages/PaymentButton'
import Massages from './pages/Massages'
import Websites from './pages/Websites'
import BankAccount from './pages/BankAccount'
import UserMgmt from './pages/UserMgmt'
import Popup from './Component/Popup';




function App() {
  return (
    <Router>

      <Routes>
        
        <Route exact path='/popup' element={<Popup />} />
        <Route exact path='/' element={<SignUp />} />
        <Route path="/otp-verification" element={<Verify />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/home" element={<Home />} >

          <Route exact path='' element={<Dashboard />}  />
          <Route  path='dashboard' element={<Dashboard />} />
          <Route path='transection' element={<Transections />} />
          <Route path='paymentLink' element={<PaymentLink />} />
          <Route path='PaymentButton' element={<PaymentButton />} />
          <Route path='Massages' element={<Massages />} />
          <Route path='Websites' element={<Websites />} />
          <Route path='bank-account' element={<BankAccount />} />
          <Route path='User' element={<UserMgmt />} />
        </Route>
      </Routes>


    </Router>

  );
}

export default App;
