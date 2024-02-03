import {QueryClient} from "@tanstack/react-query";

export default async function Card({slug}) {
   const queryClient = new QueryClient();

   const getPosts = async () => {
      return fetch(`https://fakestoreapi.com/products/${slug}`).then((res) =>
         res.json()
      );
   };

   await queryClient.prefetchQuery({
      queryKey: ["posts"],
      queryFn: getPosts,
   });

   let data = queryClient.getQueryData(["posts"]);
   return (
         <div>
            {data && (
               <div>
                  <h1>{data.title}</h1>
                  <p>{data.description}</p>
                  <p>{data.price}</p>
               </div>
            )}
         </div>
   );
}
