import React, { useState } from 'react'
import styled from 'styled-components'
import Chart from 'react-apexcharts'
import { FaChevronDown } from 'react-icons/fa';
import {MdOutlineCopyAll} from 'react-icons/md'
import {BsShareFill} from 'react-icons/bs'
const Dashboard = () => {
  const [state,setState]=useState(
    {options: {
      chart: {
        id: 'apexchart-example'
      },
      xaxis: {
        categories: ["01-02-2022", "02-02-2022", "03-02-2022", "04-02-2022"]
      }
    },
    series: [{
      name: 'UPI',
      data: [20, 40, 15, 12],
     
    },
    {
      name: 'Card',
      data: [10, 35, 10, 11]
    },
    {
      name: 'Debit Card',
      data: [5, 55, 40, 14]
    },
    {
      name: 'Net Banking',
      data: [25, 3, 5, 15]
    },
    {
      name: 'Others',
      data: [0, 45, 50, 18]
    }
    
  
  
  ]}
  );
  return (
    <Wrapper>
      <div className="flex">
        <div className="item1">
          <div className="top-box">
            <h1>Lets Glance at Your Business</h1>
            <div className='btns'>
              <button>Last 7 days <FaChevronDown className='btn-icon' /></button> 
              <button>Download <FaChevronDown className='btn-icon' /></button>
            </div>
          </div>
          <div className='cart-box'>
            <div className="flex1">
              <div className="box1">
                <h3>Transections</h3>
                <p>₹ 3940.90</p>
              </div>
              <div className="box1">
                <h3>Settlements</h3>
                <p>₹ 567413.90</p>
              </div>
              <div className="box1">
                <h3>Refunds </h3>
                <p>₹ 5849.89</p>
              </div>
            </div>
            <div className='chart' >
            <Chart 
              options={state.options} series={state.series} type="bar" height="350" width="70%"
            />
          </div>
          </div>
          
        </div>
        <div className="item2">
          <div className="item2-box1">
            <p>Payment Terminal</p>
            <div className='payment-link'>
              <span>letspe.in/ertkjdnf23</span>
              <BsShareFill  className='icon'/>
              <MdOutlineCopyAll  className='icon'/>
            </div>
          </div>
          <div className="item2-box2">

          </div>
          <div className="item2-box3">
              <img src="/img/icon9.png" alt="icon" />
              <p>Notification</p>
              <img src="/img/icon10.png" alt="icon" />
              <p>Unread Messages: 21</p>
              <img src="/img/icon11.png" alt="icon" />
              <p>Read Messages: 349</p>
              <img src="/img/icon11.png" alt="icon" />
              <p>Total Transection: 12384</p>
             
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    width: 100%;

    .flex{
      display: flex;
    }
    .item1{
      width:55vw;
      height: 550px;
      
    }
    .item2{
      width:23vw;
      height: 570px;
      background-image: linear-gradient(to right, rgb(226, 224, 224) , rgb(179, 173, 173));
      margin-left: 2vw;
      margin-top: 30px;
      border-radius: 25px 0 0 25px;
      display: flex;
      flex-direction: column;
      // align-items: center;
  justify-content: space-evenly;


    }
    .item2-box1{
      width:15vw;
      // height: 80px;
      margin: 0 0 0 8vw;
      background-color: #e3e3e3;
      border-radius: 25px 0 0 25px;
      // text-align: center;
      padding: 15px 0 10px 20px;
      box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    }
    .item2-box2{
      width:15vw;
      height: 170px;
      background-color: #e3e3e3;
      border-radius: 0 25px 25px 0;
      box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    }
    .item2-box3{
      width:15vw;
      height: 230px;
      margin: 30px 0 0 8vw;
      background-color: #e3e3e3;
      border-radius: 25px 0 0 25px;
      // text-align: center;
      padding: 15px 0 10px 20px;
      box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
      display: flex;
      flex-direction: column;
      align-items: center;
  justify-content: center;
    }
    .item2-box3 img{
      width: 30px;
      height: 30px;
    }
    .top-box{
      width:100%;
      height: 70px;
      padding: 0 20px;
      background-image: linear-gradient(to right, rgb(226, 224, 224) , rgb(179, 173, 173));
      margin-top: 30px;
      margin-bottom: 2px;
      border-radius: 0 25px 25px 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    button{
      height: 50px;
      padding: 10px 30px;
      border-radius: 8px;
      border: none;
      margin: 0 10px;
      color: #fff;
      font-size: 16px;
      background-color: #4884b8;
      
    }
    .btn-icon{
      font-size: 10px;
      // margin-top: 5px;
    }
    .cart-box{
      background-image: linear-gradient(to right, rgb(226, 224, 224) , rgb(179, 173, 173));
      height: 500px;
      border-radius: 0 25px 25px 0;
    }
    .flex1{
      display: flex;
      align-items: center;
      justify-content: space-evenly;
    }
    .box1{
      padding: 20px 10px;
      border: 1px solid transparent;
      box-shadow: 0 0 0 2px rgb(52, 51, 51), inset 0 0 0 2px rgb(52, 51, 51);
      outline: 1px solid #000;
      border-radius: 0 0 25px 25px;
      width: 200px;
      text-align: center;

    }
    .chart{
      margin-top: 30px;
    }
    .payment-link{
      background-color: #fff;
      padding: 5px 8px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    .payment-link .icon{
      width: 15px;
      height:15px;
      margin-left: 6px;
      color: #4884b8;
    }
    .top-box h1{
      font-size: 30px;
    }
    
`
export default Dashboard
