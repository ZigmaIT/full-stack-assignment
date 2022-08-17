import React, { useEffect, useRef, useState } from "react";


const Tabs = ({ query, setQuery, setPhotos }) => {
  return (
    <div className="tabs">
      <button  className="submit-btn"
        onClick={() => {
          setQuery("Dog,Car,Ocean");
          setPhotos([]);
        }}
      >
        All
      </button>
      <button className="submit-btn"
        onClick={() => {
          setQuery("Dog");
          setPhotos([]);
        }}
      >
        Dog
      </button>
      <button className="submit-btn"
        onClick={() => {
          setQuery("Car");
          setPhotos([]);
        }}
      >
        Car
      </button>
      <button className="submit-btn"
        onClick={() => {
          setQuery("Ocean");
          setPhotos([]);
        }}
      >
        Ocean
      </button>
    </div>
  );
};

export default Tabs;
