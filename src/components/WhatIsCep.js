import React from "react";
import { useLoaderData } from "react-router-dom";
import AboutCepDetails from "./AboutCepDetails";

export async function loader() {
  return fetch("aboutData.json");
}

function WhatIsCep() {
  const data = useLoaderData();
  const result = data.filter((item) => item.id === 1);
  return (
    <div>
      <AboutCepDetails result={result[0]} />
    </div>
  );
}

export default WhatIsCep;
