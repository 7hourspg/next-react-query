import {dehydrate, HydrationBoundary, QueryClient} from "@tanstack/react-query";
import Link from "next/link";
import TestPage from "./test/test";

import React from "react";

export default async function PostsPage() {
   const queryClient = new QueryClient();

   const getPosts = async () => {
      return fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
         res.json()
      );
   };

   await queryClient.prefetchQuery({
      queryKey: ["posts"],
      queryFn: getPosts,
   });

   let data = queryClient.getQueryData(["posts"]);
   console.log("Hello From SSR")

   return (
      // Neat! Serialization is now as easy as passing props.
      // HydrationBoundary is a Client Component, so hydration will happen there.
      <HydrationBoundary state={dehydrate(queryClient)}>
         <div className="flex flex-col items-center justify-center py-2">
            <Link href="/example">
               <button
                  style={{
                     backgroundColor: "red",
                     color: "white",
                     padding: "10px",
                     borderRadius: "5px",
                     cursor: "pointer",
                  }}
               >
                  Route
               </button>
            </Link>
         </div>

         <TestPage data={data} />
      </HydrationBoundary>
   );
}
