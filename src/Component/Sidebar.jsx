import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import {SidebarData} from './SidebarData'

const Sidebar = () => {
            
  return (
    <Wrapper>
      <div>
      {
               SidebarData.map((item, index)=>{
                return(
                    <div key={index}>
                        <NavLink to={item.path}
                        // className={({ isActive }) =>
                        // isActive ? activeLink: normalLink}
                        className="navitem"
                         >
                        {/* <span></span> */}
                        <img src={item.icon} className="icon" alt="icon" />
                        <span>{item.title}</span>
                        </NavLink>
                        
                    </div>
                )
              })
          }
      </div>
    </Wrapper>
  )
}
const Wrapper=styled.section`
    width: 100%;

    .navitem{
        display: flex;
        align-items: center;
        text-decoration: none;
        color: #000;
        font-weight: 500;
        font-size: 20px;
        padding: 0px 30px;
        
    }
    .navitem:hover{
        background-color: #fff;
    }
    .icon{
        width: 40px;
        height: 40px;
        margin: 10px;
    }


`;

export default Sidebar
