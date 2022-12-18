import React from 'react'
import {Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Transections from '../pages/Transections'
import PaymentLink from '../pages/PaymentLink'
import PaymentButton from '../pages/PaymentButton'
import Massages from '../pages/Massages'
import Websites from '../pages/Websites'
import BankAccount from '../pages/BankAccount'
import UserMgmt from '../pages/UserMgmt'

import SignUp from './SignUp';
import Verify from './Verify';
import SignIn from './SignIn';
import Home from './Home';

const NavPage = () => {
  return (

      <Routes>
        <Route exact path='/' element={<SignUp />} />
          <Route path="/otp-verification" element={<Verify />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/home" element={<Home />} />

        {/* <Route exact path='/' element={<Dashboard />}  /> */}
        <Route  path='/dashboard' element={<Dashboard />}  />
        <Route path='/transection' element={<Transections />} />
        <Route path='/paymentLink' element={<PaymentLink />} />
        <Route path='/PaymentButton' element={<PaymentButton />} />
        <Route path='/Massages' element={<Massages />} />
        <Route path='/Websites' element={<Websites />} />
        <Route path='/bank-account' element={<BankAccount />} />
        <Route path='/User' element={<UserMgmt />} />
        
      </Routes>
      
  )
}

export default NavPage
