import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
const Popup = () => {

  return (
    <Wrapper>
      <div className="poppup-box">
        <div className="left">
          <img src="/img/logo.png" className="logo" alt="logo" />
          <img src="/img/img.png" className="img" alt="logo" />
        </div>
        <div className="right">
          <div className="box">
            <NavLink to="/home">
              <button >Complete Profile</button>
            </NavLink>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  // width: 100%;
  // height: 100vh;
  // display: flex;
  // justify-content: center;
  // align-items: center;

  inset: 0;
  background: #00000088;
  position: fixed;
  display: grid;
  place-items: center;



  .poppup-box {
    width: 50vw;
    height: 50vh;
    border-radius: 25px;
    background-image: linear-gradient(
      to right,
      rgb(226, 224, 224),
      rgb(179, 173, 173)
    );
    display: grid;
    justify-items: center;
    // align-items: center;
    grid-template-columns: repeat(2, 1fr);
  }
  .left {
    // border: 1px solid #000;
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .logo {
    width: 180px;
    margin: 0 auto;
  }
  .img {
    width: 320px;
    margin: 0 auto;
  }
  .right {
    width: 100%;
    display: flex;
    align-items: center;
  }
  button {
    height: 50px;
    padding: 10px 30px;
    border-radius: 8px;
    border: none;
    margin: 0 10px;
    color: #fff;
    font-size: 16px;
    background-color: #4884b8;
  }
  .box {
    width: 100%;
    height: 40vh;
    display: flex;
    justify-content: center;
    align-items: end;
    padding: 0 0 20px 0;
    border-radius: 25px 0 0 25px;
    background-image: linear-gradient(
      to right,
      rgb(234, 225, 225),
      rgb(187, 181, 181)
    );
  }
`;
export default Popup;
