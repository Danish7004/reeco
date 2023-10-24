import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, updateProduct } from "../slices/productSlice";
import Modal from "./Modal";
import UpdateModal from "./UpdateModal";
import { styled } from "styled-components";
import pic1 from "../icons/pic1.jpg";

const Status = styled.p`
  padding: 10px 15px;
  border-radius: 25px;
  color: #fff;
`;

function Table() {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [element, setElement] = useState({});

  const { loading, data } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <section
        style={{
          margin: "20px 50px",
          boxShadow:
            "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
          borderRadius: "5px",
          padding: "20px 20px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              border: "1px solid #DDD",
              width: "40%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: " 10px 20px",
              borderRadius: "20px",
            }}
          >
            <input
              style={{
                width: "100%",
                outline: "none",
                border: "none",
                background:
                  'url(<i class="fa-solid fa-magnifying-glass"></i>) no-repeat scroll 7px 7px',
              }}
              type="search"
              placeholder="search..."
            />
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>

          <div style={{ display: "flex", alignItems: "center" }}>
            <button
              style={{
                margin: "0 50px",
                backgroundColor: "white",
                width: "100px",
                padding: "7px",
                border: "2px solid #295f48",
                outline: "none",
                borderRadius: "20px",
                color: "#295f48",
              }}
            >
              Add Item
            </button>
            <span>
              <i
                style={{ color: " #295f48", fontSize: "23px" }}
                class="fa-solid fa-print"
              ></i>
            </span>
          </div>
        </div>

        <table
          style={{
            borderCollapse: "collapse",
            borderSpacing: " 0",
            width: "100%",
            margin: "20px 0px",
            textAlign: "left",
          }}
        >
          <thead style={{ border: "0.1px solid rgb(214 214 214)" }}>
            <tr style={{ borderRadius: "20px" }}>
              <th style={{ padding: "5px" }}>Product name</th>
              <th>Brand</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            { data.length !== 0 ? (
              data.map((el, i) => (
                <tr style={{ borderBottom: "1px solid #cecece" }} key={i}>
                  <td
                    style={{
                      padding: "15px 0px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <span>
                      <img src={pic1} alt="" width="30px" />
                    </span>
                    {el.name}
                  </td>
                  <td>{el.brand}</td>
                  <td>{el.price}</td>
                  <td>{el.qty}</td>
                  <td>{el.qty * el.price}</td>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "0px 30px",
                        alignItems: "center",
                      }}
                    >
                      {el.status ? (
                        <div>
                          {" "}
                          {el.status === "Missing" && (
                            <Status style={{ backgroundColor: "tomato" }}>
                              {el.status}
                            </Status>
                          )}
                          {el.status === "Missing-urgent" && (
                            <Status style={{ backgroundColor: "red" }}>
                              {el.status}
                            </Status>
                          )}
                          {el.status === "Approved" && (
                            <Status style={{ backgroundColor: "#4de14d" }}>
                              {el.status}
                            </Status>
                          )}
                        </div>
                      ) : (
                        <p></p>
                      )}

                      <div>
                        <i
                          onClick={() =>
                            dispatch(
                              updateProduct({ payload: el, status: "Approved" })
                            )
                          }
                          style={{
                            margin: "0 10px",
                            color: "#4de14d",
                            cursor: "pointer",
                          }}
                          class="fa-solid fa-check"
                        ></i>
                        <i
                          onClick={() => {
                            setOpen(!open);
                            setElement(el);
                          }}
                          style={{
                            margin: "0 10px",
                            color: "red",
                            cursor: "pointer",
                          }}
                          class="fa-solid fa-xmark"
                        ></i>
                        <span
                          style={{ margin: "0 10px", cursor: "pointer" }}
                          onClick={() => {
                            setOpenUpdate(true);
                            setElement(el);
                          }}
                        >
                          Edit
                        </span>
                      </div>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <div
                style={{
                  width:'100%',
                  margin: '20px auto'
                
                }}
              >
                {loading ? "Loading..." : "no records found"}
              </div>
            )}
          </tbody>
        </table>
      </section>
      {open && <Modal setOpen={setOpen} element={element} />}
      {openUpdate && <UpdateModal setOpen={setOpenUpdate} element={element} />}
    </>
  );
}

export default Table;
