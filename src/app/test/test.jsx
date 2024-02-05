"use client";
import React from "react";
import {useState} from "react";
import Card from "../card/card";

function TestPage({data}) {
   const [stateData, setStateData] = useState(data);

   const filteredData = () => {
      const filteredData = data.filter(
         (item) => item.id === Math.floor(Math.random() * 20)
      );
      setStateData(filteredData);
   };

   return (
      <div>
         <h1 className="text-3xl font-bold text-center py-4 text-green-300">
            Hello From TestPage
         </h1>
         <div className="flex justify-center items-center py-4">
            <button
               className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-all duration-300 ease-in-out"
               onClick={filteredData}
            >
               Filter Data
            </button>
         </div>
         <div className="flex justify-center flex-wrap gap-4 items-center">
            {stateData?.map((item, index) => {
               return <Card key={index} data={item} />;
            })}
         </div>
      </div>
   );
}

export default TestPage;
