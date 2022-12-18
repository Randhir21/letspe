import React from 'react'
import styled from 'styled-components'

const Transections = () => {
  return (
    <Wrapper>
      <div className="item1">
        <div className="top-box ">
          <h1>Generate Invoice</h1>

        </div>
        <div className="top-box">
          <button>MID</button>
          <button>Website ID</button>
          <button>Acquirer</button>
          <button>Status</button>
          <button>Card Type</button>
          <label className='mx-10' >From:</label>
          <input type="date" />
          <label className='mx-10' >To:</label>
          <input type="date" />
          <button>Search</button>

        </div>
        <div className='cart-box'>
          <table>
            <thead>
            <tr>
              <th>Product ID</th>
              <th>Order ID</th>
              <th>Order Amt.</th>
              <th>Customer Name</th>
              <th>Name</th>
              <th>Email</th>
              <th>Date</th>
              <th>Status</th>


            </tr>
            </thead>
            <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>


            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            </tbody>
          </table>

        </div>

      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
width: 100%;
.item1{
  width:78vw;
  height: 600px;
  padding-top: 20px;
  
}
.mx-10{
  margin: 0 10px;
}
.top-box{
  width:100%;
  height: 70px;
  padding: 0 20px;
  background-image: linear-gradient(to right, rgb(226, 224, 224) , rgb(179, 173, 173));
  // margin-top: 10px;
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
  height: 460px;
  border-radius: 0 25px 25px 0;
  padding: 20px 30px;
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
.my-20{
  margin: 20px 0;
}
.my-10{
  margin: 10px 0;
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
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #000;
  text-align: left;
  padding: 8px;
}
td{
height: 50px
}
tr:nth-child(even) {
  background-color: rgb(192, 190, 149);
}



`
export default Transections
