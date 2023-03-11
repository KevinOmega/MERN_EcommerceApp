import React, { useEffect, useState } from "react";
import { useGetItemsQuery } from "./itemsSlice";

const Filters = ({ handleSubmitFilters }) => {
  const { data: items, isLoading } = useGetItemsQuery();
  const [list, setList] = useState([]);
  const [checkCategories, setCheckCategories] = useState([]);
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      const itemsCategories = items.map((item) => item.type);
      setList([...new Set(itemsCategories)]);
    }
  }, [items, isLoading]);

  const handleCheckChange = (e) => {
    const value = e.target.value;
    setCheckCategories((currentValue) => {
      if (!currentValue.find((item) => item === value)) {
        return [...currentValue, value];
      } else {
        return currentValue.filter((item) => item !== value);
      }
    });
  };

  const handlePriceChange = (e, name) => {
    let value = e.target.value;
    if (value < 1) {
      value = "";
    }
    if (value > 10000) {
      value = 10000;
    }
    if (name === "max") {
      setMax(value);
    } else {
      setMin(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let currentMin = min;
    let currentMax = max;
    let currentcategories = checkCategories;

    if (!min) {
      currentMin = 0;
    }
    if (!max) {
      currentMax = 1000000;
    }
    if (checkCategories.length === 0) {
      currentcategories = [...list];
    }
    handleSubmitFilters({
      checkCategories: currentcategories,
      min: currentMin,
      max: currentMax,
    });
  };

  if (!isLoading) {
    return (
      <>
        <button
          className="btn btn-outline-dark p-2 filter-btn"
          onClick={() => setShowFilters(!showFilters)}
        >
          Filters ↓
        </button>
        <div className={`filters-section ${showFilters && "active"}`}>
          <form onSubmit={handleSubmit}>
            <div className="categories">
              <h4>Categories</h4>
              {list.map((item, index) => {
                return (
                  <div key={index} className="form-check">
                    <input
                      type="checkbox"
                      id={item}
                      className="form-check-input"
                      value={item}
                      onChange={handleCheckChange}
                    />
                    <label htmlFor={item} className="form-check-label ms-2">
                      {item}
                    </label>
                  </div>
                );
              })}
            </div>
            <div className="price">
              <h4>Price</h4>
              <div className="price-center">
                <div className="price-item">
                  <label htmlFor="min" className="form-label">
                    Min
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="min"
                    placeholder="1 - 10000"
                    value={min}
                    onChange={(e) => handlePriceChange(e, "min")}
                  />
                </div>
                <div className="price-item">
                  <label htmlFor="max" className="form-label">
                    Max
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="max"
                    placeholder="1 - 10000"
                    value={max}
                    onChange={(e) => handlePriceChange(e, "max")}
                  />
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-dark">
              Search
            </button>
          </form>
          <ul></ul>
        </div>
      </>
    );
  } else {
    return <div className="section"></div>;
  }
};

export default Filters;
