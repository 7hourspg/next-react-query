import TestPage from "./test/test";

const getPosts = async () => {
   return fetch("https://fakestoreapi.com/products" ,{cache:"force-cache"}).then((res) =>
      res.json()
   );
};
  
 export default async function Page() {
   const data = await getPosts();
   return <TestPage data={data} />;
 }