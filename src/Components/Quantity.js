import React from 'react'
import Button from "react-bootstrap/Button";

function Quantity({articleShop, increment, decrement, totalCartplus, totalCartmins}) {
  const handelincrement=()=>{
    increment(articleShop.id)
    totalCartplus(articleShop)

  }
  const handeldecrement=()=>{
    decrement(articleShop.id)
    totalCartmins(articleShop)
  }
  return (
    <div>
    <Button variant="success" onClick={handelincrement}>+</Button>
    <span>{articleShop.qt}</span>
    <Button variant="danger" onClick={handeldecrement}>-</Button>

    </div>
  )
}

export default Quantity