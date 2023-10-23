import React from "react";
import { styled } from "styled-components";
import { useDispatch } from "react-redux";
import { updateProduct } from "../slices/productSlice";

const Model = styled.section`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Button = styled.button`
  margin: 0 10px;
  outline: none;
  border: none;
  background: none;
  font-weight: 600;
  cursor: pointer;
`;

function Modal({ element, setOpen }) {
   
    const dispatch= useDispatch()
    
  return (
    <Model >
      <div style={{ width: "400px", backgroundColor: "#fff" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "0px 20px",
            alignItems: "center",
          }}
        >
          <h4>Missing Product</h4>
          <span style={{cursor:'pointer'}} onClick={() => setOpen(false)}>
            {" "}
            <i class="fa-solid fa-xmark"></i>
          </span>
        </div>
        <p style={{ margin: "0px 20px" }}>is "{element?.name}" urgent ?</p>
        <div
          style={{
            display: "flex",
            justifyContent: "right",
            margin: "30px 20px",
          }}
        >
          <Button onClick={() => 
          {
              setOpen(false)
               dispatch(updateProduct({payload: element , status: "Missing"}))
              }}>No</Button>
          <Button onClick={() => 
          {
              setOpen(false)
              dispatch(updateProduct({payload: element , status: "Missing-urgent"}))
              }}>Yes</Button>
        </div>
      </div>
    </Model>
  );
}

export default Modal;
