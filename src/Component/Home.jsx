import React from 'react'
import styled from 'styled-components'
import Dashboard from '../pages/Dashboard';
import PaymentButton from '../pages/PaymentButton';
import PaymentLink from '../pages/PaymentLink';
import Transections from '../pages/Transections';
import NavPage from './NavPage';
import Sidebar from './Sidebar';
import {Outlet} from 'react-router-dom'
const Home = () => {
  return (
    <Wrapper>
        <header>
        <img src="/img/logo.png" className='logo' alt="logo" />
        </header>
        <section>
        <div className='flex'>
          <div className='box-item1'>
              <Sidebar />
              
          </div>


          <div className='box-item2'>
              <Outlet />
              {/* <NavPage /> */}
              {/* <Dashboard /> */}
              {/* <Transections /> */}
              {/* <PaymentLink /> */}
              {/* <PaymentButton /> */}
              
          </div>
        </div>
      </section>
      
    </Wrapper>
  )
}

const Wrapper=styled.section`
// background-color: #e3e3e3;
width: 100vw;
height: 100vh;

    header{
        height: 15vh;
        background-image: linear-gradient(to right, rgb(226, 224, 224) , rgb(179, 173, 173));
        width: 100%;
        border-bottom: 2px solid rgb(135, 132, 132);
        padding: 15px 0 15px 40px;

    }
    .logo{
        width: 150px;
    }
    .flex{
        display: flex;
    }
    .box-item1{
        width: 20vw;
        height: 85vh;
        background-image: linear-gradient(to right, rgb(226, 224, 224) , rgb(179, 173, 173));
        border-right: 4px solid rgb(49, 49, 49);
        // padding: 20px 0 20px 40px;
    }

`;
export default Home
