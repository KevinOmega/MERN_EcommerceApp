import React, { useState } from "react";
import Filters from "../features/Items/Filters";
import ItemsByFilters from "../features/Items/ItemsByFilters";
import ItemsList from "../features/Items/ItemsList";

const Home = () => {
  const [params, setParams] = useState("");

  const handleSubmitFilters = (filters) => {
    setParams(filters);
  };

  return (
    <div className="home-section">
      <Filters handleSubmitFilters={handleSubmitFilters} />
      {params === "" ? <ItemsList /> : <ItemsByFilters params={params} />}
    </div>
  );
};

export default Home;
