// src/components/FoodCategory.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { menuData } from "../data/menudata";
import "../styles/FoodCategory.css";

const FoodCategory = () => {
  const { mainCategory, subCategory } = useParams();
  const navigate = useNavigate();
  const items = menuData?.[mainCategory]?.[subCategory] || [];

  const goToOrder = (item) => {
    // use name as identifier in URL
    const encodedName = encodeURIComponent(item.name);
    navigate(`/order/${mainCategory}/${subCategory}/${encodedName}`);
  };

  return (
    <div className="food-category-page">
      <h1>{subCategory}</h1>
      <div className="food-cards">
        {items.map((item, index) => (
          <div
            className="food-card"
            key={index}
            style={{ animationDelay: `${index * 0.12}s` }}
            onClick={() => goToOrder(item)}
            role="button"
            tabIndex={0}
            onKeyDown={(e)=> { if(e.key === 'Enter') goToOrder(item); }}
          >
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p className="price">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodCategory;
