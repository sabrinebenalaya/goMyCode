import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Quantity from "./Quantity";
import "../CSS/Style.css";
import CloseButton from 'react-bootstrap/CloseButton';

const Shop = ({
  shop,
  sum,
  increment,
  decrement,
  totalCartplus,
  totalCartmins,
  deleteArticle
}) => {
  const [totalPrice, setTotalPrice] = useState();

  return (
    <div className="shopStyle">
      <Table striped>
        <thead>
          <tr>
            <th>Ref</th>
            <th> Name of article</th>
            <th>Price by Unit</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {shop.map((sp) => (
            <tr key={sp.id}>
              <td>{sp.id}</td>
              <td>{sp.name}</td>
              <td>{sp.price}</td>
              <td></td>
              <td>
                <Quantity
                  key={sp.id}
                  articleShop={sp}
                  increment={increment}
                  decrement={decrement}
                  totalCartplus={totalCartplus}
                  totalCartmins={totalCartmins}
                />
              </td>
              <td>{sp.qt * sp.price}</td>
              <td><CloseButton onClick={()=>{ deleteArticle(sp)}}/></td>
            </tr>
          ))}

          <tr>
            <th colSpan={4} style={{ textAlign: "end" }}>
              Total
            </th>
            <th style={{ textAlign: "center" }}>{sum}</th>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Shop;
