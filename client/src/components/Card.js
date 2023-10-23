import React from 'react'
import { styled } from 'styled-components'

const Box = styled.div`
display:flex ;
flex-direction: column;
padding: 0px 20px ;
width:130px;
margin-top:20px
`
const Line = styled.p`
height: 90px ;
width: 0.1px ;
background-color:#717171
`

function Card() {
  return (
    <section style={{
      display:'flex',
      justifyContent:'space-between',
      margin:'0 50px',
      boxShadow: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
      borderRadius: '5px'
        }}>
        <Box>
          <span>Supplier</span>
          <h4>Each coast fruits and vegitables</h4>
        </Box>
        <Line></Line>
        <Box>
        <span>Shipping date</span>
          <h4>Thu , Feb10</h4>
        </Box>
        <Line></Line>
        <Box>
        <span>Total</span>
          <h4>$15,028.3</h4>
        </Box>
        <Line></Line>
        <Box>
        <span>Category</span>
          <h4>Each coast fruits and vegitables</h4>
        </Box>
        <Line></Line>
        <Box>
        <span>Department</span>
          <h4>300-444-678</h4>
        </Box>
        <Line></Line>
        <Box>
        <span>Status</span>
          <h4>Awaiting your approvel</h4>
        </Box>
    </section>
  )
}

export default Card