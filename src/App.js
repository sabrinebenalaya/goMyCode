import React, { useState } from "react";
//import Layout from "./Layout";
import Data from "./Data";
import ArticleList from "./Components/ArticleList";
import "bootstrap/dist/css/bootstrap.min.css";

function AppTest() {
  const [articles, setArticles] = useState(Data.article);
  const [shop, setShop] = useState([]);
  const [sum, setSum] = useState(0);

  const deleteArticle = (article) => {
    const newShop = shop.filter((el) => el.id !== article.id);
    setShop(newShop);
    const objWithIdIndex = shop.findIndex((obj) => obj.id === article.id);
    setSum(sum - shop[objWithIdIndex].price * shop[objWithIdIndex].qt);
  };
  const addToCart = (article) => {
    let exist = shop.find((elt) => elt.id === article.id);
    if (!exist) {
      setShop([...shop, article]);
      totalCartplus(article);
    } else {
      return (exist = true);
    }
    console.log("shop=", shop);
  };

  const totalCartplus = (article) => {
    const newSum = sum + article.price;
    setSum(newSum);
  };

  const totalCartmins = (article) => {
    if (article.qt > 1) {
      const newSum = sum - article.price;
      setSum(newSum);
    }
  };

  const increment = (id) => {
    setShop(
      shop.map((el) => {
        if (id === el.id) {
          return { ...el, qt: el.qt + 1 };
        } else {
          return el;
        }
      })
    );
  };

  const decrement = (id) => {
    setShop(
      shop.map((el) => {
        if (id === el.id && el.qt > 1) {
          return { ...el, qt: el.qt - 1 };
        } else {
          return el;
        }
      })
    );
  };
  return (
    <ArticleList
      articles={articles}
      shop={shop}
      addToCart={addToCart}
      sum={sum}
      totalCartplus={totalCartplus}
      totalCartmins={totalCartmins}
      increment={increment}
      decrement={decrement}
      deleteArticle={deleteArticle}
    />
  );
}

export default AppTest;
