import React from "react";
import ItemsCarousel from "./ItemsCarousel";

import { useGetItemsQuery } from "./itemsSlice";
import CartIcon from "../cart/CartIcon";

const ItemsList = () => {
  const { data: items, isLoading } = useGetItemsQuery();

  let renderedItems = "";

  if (isLoading) {
    renderedItems = (
      <div className="spinner-section">
        <div className="spinner-border"></div>
      </div>
    );
  } else {
    let itemTypes = [...items.map((item) => item.type)];
    itemTypes = [...new Set(itemTypes)];

    let itemsToRender = itemTypes.map((type) => {
      const itemsGroup = items.filter((item) => item.type === type);
      return { name: type, items: itemsGroup };
    });

    renderedItems = itemsToRender.map((group, index) => {
      const { name, items } = group;
      return (
        <div className="items-group" key={index}>
          <h2 className="item-name">{name}</h2>
          <ItemsCarousel items={items} />
        </div>
      );
    });
  }

  return (
    <div className="item-list-section">
      {renderedItems} <CartIcon />
    </div>
  );
};

export default ItemsList;
