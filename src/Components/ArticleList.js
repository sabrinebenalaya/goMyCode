import React from "react";
import Article from "./Article";
import Shop from "./Shop";

function ArticleList({ articles, shop, addToCart, sum, totalCartplus,totalCartmins ,increment, decrement, deleteArticle}) {

  return (
    <div className="containerShop">
      <div className="articleList">
        {articles.map((el) => (
          <Article key={el.id} article={el} addToCart={addToCart} totalCartplus={totalCartplus} />
        ))}
      </div>
      <div>{shop.length !== 0 && <Shop  shop={shop} sum={sum} increment={increment} decrement={decrement} totalCartplus={totalCartplus} totalCartmins={totalCartmins} deleteArticle={deleteArticle} />}</div>
    </div>
  );
}

export default ArticleList;
