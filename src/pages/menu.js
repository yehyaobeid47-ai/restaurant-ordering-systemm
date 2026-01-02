

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { menuData } from "../data/menudata";
import "../styles/Menu.css";

const Menu = () => {
  const navigate = useNavigate();
  const [mainCategory, setMainCategory] = useState(""); // Food or Drinks

  const handleMainCategoryClick = (cat) => {
    setMainCategory(cat);
  };

  return (
    <div className="menu-page">
      <h1>Choose Category</h1>

      {/* Main category buttons */}
      <div className="category-buttons">
        {Object.keys(menuData).map((cat) => (
          <button key={cat} onClick={() => handleMainCategoryClick(cat)}>
            {cat}
          </button>
        ))}
      </div>

      {/* Subcategories */}
      {mainCategory && (
        <div className="subcategory-buttons">
          {Object.keys(menuData[mainCategory]).map((subCat) => (
            <button key={subCat} onClick={() => navigate(`/menu/${mainCategory}/${subCat}`)}>
              {subCat}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Menu;
