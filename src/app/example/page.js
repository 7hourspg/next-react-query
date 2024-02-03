import React from "react";

export const metadata = {
   title: "Example Page",
   description: "Example Page Description",
};

function page() {
   return (
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
         <h1 className="text-6xl font-bold">Example Page</h1>
      </div>
   );
}

export default page;
