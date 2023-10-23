import React, { useState } from "react";
import { styled } from "styled-components";
import { useDispatch } from "react-redux";
import { updateProduct } from "../slices/productSlice";
import pic1 from "../icons/pic1.jpg";

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
  width: 70px;
  outline: none;
  cursor: pointer;
  padding: 7px;
  border: 2px solid #295f48;
  border-radius: 20px;
  color: #295f48;
`;

const Input = styled.input`
  width: 70px;
  height: 20px;
  outline: none;
  border: 0.5px solid #cecece;
  border-radius: 5px;
  margin: 0px 5px;
  text-align: center;
  color: #717171;
`;
const Paragraph = styled.p`
  color: #717171;
`;
const Option = styled.option`
  border: 0.5px solid #cecece;
  margin: 0px 10px;
  font-size: 12px;
  padding: 7px;
  border-radius: 15px;
`;

function UpdateModal({ element, setOpen }) {
  const [price, setPrice] = useState(element.price);
  const [qty, setQty] = useState(element.qty);

  const dispatch = useDispatch();
  
  const value={
      id:element.id,
      brand:element.brand,
      name:element.name,
      price: price,
      qty: qty,
      status:element.status,
      total:price*qty
  }

  return (
    <Model>
      <div
        style={{ width: "650px", backgroundColor: "#fff", borderRadius: "7px" }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h4 style={{ margin: "0px 20px", marginTop: "30px" }}>
            Each coast fruits and vegitables...
          </h4>
          <span
            style={{ cursor: "pointer", margin: "0px 20px", marginTop: "15px" }}
            onClick={() => setOpen(false)}
          >
            {" "}
            <i style={{ color: "#717171" }} class="fa-solid fa-xmark"></i>
          </span>
        </div>

        <span style={{ margin: "0px 20px", color: "#717171" }}>
          {element.name}
        </span>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "0px 20px",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex" }}>
            <img src={pic1} alt="" width="90px" />
            <div style={{ margin: "0px 20px" }}>
              <Paragraph>Price</Paragraph>
              <Paragraph>Quantity</Paragraph>
              <Paragraph>Total</Paragraph>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />

            <div
              style={{ display: "flex", alignItems: "center", margin: "15px" }}
            >
              <i
                onClick={() => setQty((prev) => prev - 1)}
                style={{ color: "#4de14d", cursor: "pointer" }}
                class="fa-solid fa-circle-minus"
              ></i>
              <Input
                type="number"
                value={qty}
                onChange={(e) => setQty(e.target.value)}
              />
              <i
                onClick={() => setQty((prev) => prev + 1)}
                style={{ color: "#4de14d", cursor: "pointer" }}
                class="fa-solid fa-circle-plus"
              ></i>
            </div>
            <span style={{ color: "#717171" }}>${price * qty}</span>
          </div>
          <div></div>
        </div>
        <h5 style={{ margin: "0px 20px", marginTop: "30px" }}>
          Choose reason (optional)
        </h5>
        <div style={{ margin: "20px 20px", display: "flex" }}>
          <Option>Missing product</Option>
          <Option>Quantity is not the same</Option>
          <Option>Price is not the same</Option>
          <Option>Other</Option>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "right",
            margin: "30px 20px",
          }}
        >
          <Button
            onClick={() => setOpen(false)}
            style={{
              backgroundColor: "white",
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              setOpen(false);
              dispatch(updateProduct({ payload: value }));
            }}
            style={{
              backgroundColor: "#295f48",
              color: "#fff",
            }}
          >
            Send
          </Button>
        </div>
      </div>
    </Model>
  );
}

export default UpdateModal;
