import React from 'react'

function Header() {
  return (
    <div style={{padding: '0px 40px' , margin:'20px 0', boxShadow: 'rgba(33, 35, 38, 0.2) 0px 10px 10px -10px'}}>
        <span style={{color:'#717171'}}>Orders &gt; <span style={{textDecoration:'underline'}}>Order 32457ABC</span></span>
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <h2>Order 32457ABC</h2>
            <div>
                <button style={{
                  margin:'0 10px', 
                  backgroundColor:'white',
                  width:'70px',
                  padding:'7px',
                  border: '2px solid #295f48',
                  outline: 'none',
                  borderRadius:'20px',
                  color: '#295f48'
                  
                  }}>Back</button>
                <button 
                style={{ 
                  backgroundColor:'#295f48',
                  width:'120px',
                  padding:'7px',
                  border: '2px solid #295f48',
                  outline: 'none',
                  borderRadius:'20px',
                  color: '#fff'  
                  }}
                >Approve order</button>
            </div>
        </div>
    </div>
  )
}

export default Header