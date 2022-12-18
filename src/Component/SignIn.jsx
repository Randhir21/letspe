import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Popup from "./Popup";
const SignIn = () => {
    const [isPopupVisibale, setisPopupVisibale]=useState(false);
    const showPopup=()=>{

        setisPopupVisibale(true);
    }
  return (
    <Wrapper>
      <div className="item">
        <img src="img/logo.png" className="logo" alt="logo" />
        <div className="paragraph">
          <p>
            {"<"}Why choose LetsPe for payments{">"}
          </p>
          <p>
            {"<"}Get started with 100% online onboarding{">"}
          </p>
          <p>
            {"<"}Get started with 100% online onboarding{">"}
          </p>
          <p>
            {"<"}Why choose LetsPe for payments{">"}
          </p>
          <p>
            {"<"}Get started with 100% online onboarding{">"}
          </p>
          <p>
            {"<"}Why choose LetsPe for payments{">"}
          </p>
        </div>
      </div>
      <div className="item1">
        <div className="form_box">
          <h1>Welcome Merchant!!</h1>
          <p>Don't have an account? Sign-Up</p>
          <div className="form_area">
            <label className="label-text">Email:</label>
            <input
              type="text"
              className="input-field"
              placeholder="Type somthing.."
            />
            <label className="label-text">Password:</label>
            <input
              type="text"
              className="input-field"
              placeholder="Type somthing.."
            />

            <input type="checkbox" />
            <label className="checkbox-label">Remember Me</label>
            {/* <NavLink to="/popup"> */}
              <button onClick={showPopup}>Sign In</button>
            {/* </NavLink> */}
          </div>
        </div>
      </div>
      {isPopupVisibale && <Popup  setisPopupVisibale={setisPopupVisibale} /> }
    </Wrapper>
  );
};


const Wrapper = styled.section`
  background-color: #e3e3e3;
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  .logo {
    width: 150px;
  }
  .paragraph {
    margin-top: 40px;
  }
  .paragraph p {
    padding-left: 10px;
    font-size: 20px;
    line-height: 40px;
  }
  .item {
    padding-top: 40px;
    padding-left: 90px;
  }

  .item1 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;
  }
  .form_box {
    background-color: #fff;
    height: 500px;
    width: 50vw;
    border-radius: 30px 0 0 30px;
    border-top: 20px solid #4884b8;
    border-bottom: 2px solid #4884b8;
    border-left: 2px solid #4884b8;
  }
  .form_box h1,
  .form_box p {
    text-align: right;
    margin-top: 20px;
    margin-right: 5px;
  }
  .form_area {
    width: 35vw;
    margin: 20px auto;
  }
  .input-field {
    border: none;
    background-color: rgb(240, 238, 238);
    padding: 8px 10px;
    border-radius: 5px;
    width: 100%;
    margin-bottom: 10px;
  }
  .label-text {
    font-size: 20px;
    font-weight: 500;
  }
  .checkbox {
    width: 20px;
    height: auto;
  }
  .checkbox-label {
    font-size: 16px;
    margin-left: 5px;
  }
  button {
    width: 100%;
    padding: 10px 0;
    border-radius: 5px;
    background-color: #4884b8;
    margin-top: 40px;
    border: none;
    color: #fff;
    font-size: 16px;
  }
`;
export default SignIn;
