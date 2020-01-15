import React from "react";

const Box = ({ data }) => {
  return (
    <div className="col-12 col-lg-2">
      <div className="px-3 py-2 border rounded mr-3 mt-3">
        <p className="font-weight-bold m-0 p-0">{data.city}</p>
        <p className="m-0 p-0">
          <span className="number">{data.temp}</span> Celsius
        </p>
      </div>
    </div>
  );
};

export default Box;
