import Card from '../card';

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

function page({params}) {
   const id = params.id;
   return <Card id={id} />;
}

export default page;
