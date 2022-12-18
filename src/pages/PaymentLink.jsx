import React from 'react'
import styled from 'styled-components'
import {MdOutlineCopyAll} from 'react-icons/md'
const PaymentLink = () => {
  return (
    <Wrapper>
      <div className="item1">
          <div className="top-box">
            <h1>Generate Payment Link</h1>
            
          </div>
          <div className='cart-box'>
            <div className="link-box">
              {/* <div className="share-link"> */}
                <span>www.pay.letspe.com/321rtyb1/fgt225l/pay</span>
                {/* <img src="/img/copy.png" alt="copy-icon" /> */}
                <MdOutlineCopyAll  className='icon'/>
              {/* </div> */}
            </div>
            <form >
              
                  <div className="details">
                    <label>Select Website: </label> 
                    <select name="" id="">
                      <option value="Website 1">Website 1</option>
                      <option value="Website 2">Website 2</option>
                      <option value="Website 3">Website 3</option>
                      <option value="Website 4">Website 4</option>
                    </select>
                    <label>Amount: </label><input type="text" placeholder='xxx,xxx,xx.xx' />
                  </div>
                  <div className="details">
                    <label>Product Name: </label>
                      <select name="" id="">
                      <option value="Product 1">Product 1</option>
                      <option value="Product 2">Product 2</option>
                      <option value="Product 3">Product 3</option>
                      <option value="Product 4">Product 4</option>
                      
                    </select>
                  </div>
                  <div className="details my-20">
                    <label>Payer's Details </label>
                  </div>
                  <div className="details">
                    <label>Full Name: </label><input type="text" placeholder='Full Name' />
                    <label>Email ID: </label><input type="text" placeholder='Email ID' />
                  </div>
                  <div className="details">
                    <label>Contact Number: </label><input type="text" placeholder='Contact Number' />
                  </div>
                  <div className="details">
                    <label>Payer's Address: </label><input type="text" placeholder='House/Flat No' />
                    <input type="text" placeholder='Street Name' /><input type="text" placeholder='Road Name' />
                    <input type="number" placeholder='City' /><input type="text" placeholder='state' /><input type="text" placeholder='Country' />
                    <input type="number" placeholder='Pincode' />
                  </div>
                  <div className="details">
                    <label >Term & Conditions: </label><input type="text" placeholder='Term & Conditions' />
                    <label >Notes: </label><input type="text" placeholder='Notes' />
                  </div>
                  <div className="btns">
                    <button>Submit</button>
                    <button>Go Back</button>
                  </div>

                
            </form>
            
          </div>
          
        </div>
    </Wrapper>
  )
}

const Wrapper=styled.section`
width: 100%;
.item1{
  width:70vw;
  height: 600px;
  
}
.top-box{
  width:100%;
  height: 70px;
  padding: 0 20px;
  background-image: linear-gradient(to right, rgb(226, 224, 224) , rgb(179, 173, 173));
  margin-top: 10px;
  margin-bottom: 2px;
  border-radius: 0 25px 25px 0;
  display: flex;
  align-items: center;
  
}
.top-box h1{
  font-size: 30px;
}
.cart-box{
  background-image: linear-gradient(to right, rgb(226, 224, 224) , rgb(179, 173, 173));
  height: 530px;
  border-radius: 0 25px 25px 0;
  padding: 20px 30px;
}
.details{
  display: grid;
 grid-template-columns: repeat(4,1fr);
 margin-top: 10px;
 grid-gap: 10px 40px;

}
label{
  font-size: 18px;
  // margin-left: 20px;
}
input{
  padding: 10px;
  font-size: 14px;
  border-radius: 5px;
 border: none;
// border-color: rgb(120, 117, 117);
}
select{
  padding: 10px;
  font-size: 14px;
  border-radius: 5px;
 border: none;
}
.my-20{
  margin: 20px 0;
}
.btns{
  margin-top: 30px;
  display: flex;
  justify-content: center;
  // align-items: center;
}
button{
  padding: 10px 30px;
  background-color: #4884b8;
  margin-left: 10px;
  border: none;
        color: #fff;
        font-size: 16px;
        border-radius: 5px;
}
.link-box{
  width: 100%;
  display: flex;
  align-items: center;
}
.link-box span{
  padding: 10px;
  background-color: #fff;
  width: 70%;
  border-radius: 8px;
}
.link-box .icon{
  width: 40px;
  height: 40px;
  margin-left: 50px;
  color: #4884b8;
  cursor: pointer;
}



`
export default PaymentLink
