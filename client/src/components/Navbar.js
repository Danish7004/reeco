import React from 'react'
import { styled } from 'styled-components'

const Ul = styled.ul`
list-style: none;
display: flex ;
justify-content:space-betwee;
padding: 0 20px ;
align-items: center;
color: white;
margin-right:13px
`
const Li = styled.li`
padding: 0 20px ;
`

const Nav = styled.nav`
display: flex;
justify-content:space-between;
background-color: #295f48;
height: 60px
`
const Span = styled.span`
background: #4de14d;
    border-radius: 20px;
    color: white;
    position: absolute;
    top: -10px;
    right: 10px;
    padding:5px 7px;
    font-size: 7px;
`



function Navbar() {
  return (
    <Nav>
            <Ul>
           <Li>
           <h1>Reeco</h1>
             </Li> 
            <Li>Store</Li>
            <Li>Orders</Li>
            <Li>Analytics</Li>
            </Ul>
            <Ul>
            <Li><div style={{position:'relative' , marginTop:'20px'}}>
                    <Span>0</Span>       
                    <i style={{color:'white'}} class="fa-solid fa-cart-shopping"></i>
                </div></Li>
            <Li>Hello, James <i style={{color:'white'}} class="fa-solid fa-angle-down"></i></Li>
            </Ul>
    </Nav>
  )
}

export default Navbar