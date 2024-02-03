import {dehydrate, HydrationBoundary, QueryClient} from "@tanstack/react-query";
import TestPage from "./test/test";

import React from "react";

export default async function PostsPage() {
   const queryClient = new QueryClient();

   const getPosts = async () => {
      return fetch("https://fakestoreapi.com/products").then((res) =>
         res.json()
      );
   };

   await queryClient.prefetchQuery({
      queryKey: ["posts"],
      queryFn: getPosts,
   });

   let data = queryClient.getQueryData(["posts"]);
   

   return (
      // Neat! Serialization is now as easy as passing props.
      // HydrationBoundary is a Client Component, so hydration will happen there.
      <HydrationBoundary state={dehydrate(queryClient)}>
         <TestPage data={data} />
      </HydrationBoundary>
   );
}
