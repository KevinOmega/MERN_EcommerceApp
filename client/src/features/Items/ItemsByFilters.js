import React from "react";
import Spinner from "../../Components/Spinner";
import Error from "../../Pages/Error";
import Item from "./Item";
import { BsFillBagXFill } from "react-icons/bs";

import { useGetByFiltersQuery } from "./itemsSlice";

const ItemsByFilters = ({ params }) => {
  const { data: items, isLoading } = useGetByFiltersQuery(params);

  let renderedItems = "";

  if (isLoading) {
    renderedItems = <Spinner />;
  } else if (items.length === 0) {
    renderedItems = (
      <Error message={`No items founded`} icon={<BsFillBagXFill />} />
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
        <div className="items-group " key={index}>
          <h2 className="item-name mb-4">{name}</h2>
          <div className="row row-cols-auto mb-5">
            {items.map((item) => (
              <div className="col" key={item._id}>
                <Item item={item} />
              </div>
            ))}
          </div>
        </div>
      );
    });
  }

  return <div className="container ">{renderedItems}</div>;
};

export default ItemsByFilters;
