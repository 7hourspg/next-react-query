"use client";
import React from "react";
import {useEffect, useState} from "react";

function TestPage({data}) {
   const [stateData, setStateData] = useState(data);

   let filteredData = data?.filter((item) => {
      return item.userId === Math.floor(Math.random() * 10);
   });

   return (
      <div>
         <h1 className="text-3xl font-bold text-center py-4 text-green-300">
            Hello From TestPage
         </h1>
         <div className="flex justify-center items-center py-4">
         <button
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-all duration-300 ease-in-out"
            onClick={() => setStateData(filteredData)}
         >
            Filter Data
         </button>
         </div>
         {stateData?.map((item, index) => {
            return (
               <div
                  key={index}
                  className="flex flex-col items-center justify-center py-2"
               >
                  <h1>{item.title}</h1>
               </div>
            );
         })}
      </div>
   );
}

export default TestPage;
