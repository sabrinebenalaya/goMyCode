import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../CSS/Style.css";

function Article({ article, addToCart, totalCartplus }) {
    const handelAddToCart=()=>{
        addToCart (article)
    }
  return (
    <Card className="cart">
      <Card.Body>
        <img alt="product" src={article.image} />
        <h1>{article.name}</h1>
        <h5>{article.price} £</h5>
        <div>
          <Button variant="success" onClick={handelAddToCart}>Add to the cart</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Article;
