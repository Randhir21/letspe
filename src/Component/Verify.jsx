import React from 'react'
import styled from 'styled-components'
import { Link} from 'react-router-dom';
const Verify = () => {
  return (
    <Wrapper>
      <div className='item'>
        <img src="img/logo.png" className='logo' alt="logo" />
        <div className='paragraph'>
        <p>{"<"}Why choose LetsPe for payments{">"}</p>
        <p>{"<"}Get started with 100% online onboarding{">"}</p>
        <p>{"<"}Get started with 100% online onboarding{">"}</p>
        <p>{"<"}Why choose LetsPe for payments{">"}</p>
        <p>{"<"}Get started with 100% online onboarding{">"}</p>
        <p>{"<"}Why choose LetsPe for payments{">"}</p>
        </div>
      </div>
      <div className='item1'>
        <form className='form_box' >
            <h1>OTP Verification</h1>
            <p>OTP Share on your registered number</p>
            <div className='number-box'>+91 XXXX-XX-XXXX</div>
            <div className='form_area'>
            <h2>Enter OTP</h2>
            <div className="otp-area">
            <input type="text" className='input-field' placeholder='X'  />
            
            <input type="text" className='input-field' placeholder='X' />
           
            <input type="text" className='input-field' placeholder='X' />
            <input type="text" className='input-field' placeholder='X' />
            </div>
            <div className='pr-page'>
            <span className='previous'><Link to="/">Previous Page</Link></span> <span className='otp-T'>Resend OTP in : 00:30</span>
            <Link to="/signin"><button>Verify</button></Link>

            </div>
            </div>
            
        </form>
      </div>
    </Wrapper>
  )
}

const Wrapper=styled.section`
    background-color: #e3e3e3;
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    
    .logo{
        width: 150px;
    }
    .paragraph{
        margin-top: 40px;
    }
    .paragraph p{
        
        padding-left: 10px;
        font-size: 20px;
        line-height: 40px;
    }
    .item{
        padding-top: 40px; 
        padding-left: 90px; 
    }
    

    .item1{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: end;
        
    }
    h2{
        text-align: center;
        margin: 20px 0;

    }
    .number-box{
        box-shadow: rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;
        padding: 20px 10px;
        width: 35vw;
        margin: 0 auto;
        border-radius: 10px;
        font-size: 20px;
        text-align: center;
    }
    .form_box{
        background-color: rgb(230, 226, 226);
        height: 500px;
        width: 50vw;
        border-radius: 30px 0 0 30px;
        border-top: 20px solid #4884b8;
        border-bottom: 2px solid #4884b8;
        border-left: 2px solid #4884b8;
    }
    .form_box h1, .form_box p{
        text-align: center;
        margin-top: 20px;
        margin-right: 5px;
    }
    .form_area{
        width: 35vw;
        margin: 20px auto;
    }
    .input-field{
        border: none;
        background-color: #fff;
        padding: 8px 10px;
        border-radius: 5px;
        width: 40px; 
        margin-right: 10px;
        margin-bottom: 10px;
        // font-size: 20px;

    }
    .otp-area{
        display: flex;
        justify-content: center;
    } 
    button{
        width: 100%;
        
        padding: 10px 0;
        border-radius: 5px;
        background-color: #4884b8;
        margin:  20px auto;
        border: none;
        color: #fff;
        font-size: 16px;
    }
    .pr-page{
        width: 30vw;
        margin: auto;
    }
    .pr-page p{
        width: unset;
    }
    .previous{
        float: left;
    }
    
    .otp-T{
        float: right;
    }

`;
export default Verify
