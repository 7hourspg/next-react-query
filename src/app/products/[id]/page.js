export async function generateMetadata({params}) {
   // read route params
   const id = params.id;

   // fetch data
   const product = await fetch(`https://fakestoreapi.com/products/${id}`).then(
      (res) => res.json()
   );

   return {
      title: product.title,
      description: product.description,
   };
}

const getPosts = async (id) => {
   return fetch(`https://fakestoreapi.com/products/${id}`).then((res) =>
      res.json()
   );
};

export default async function Page({params}) {
   const id = params.id;
   const data = await getPosts(id);

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
