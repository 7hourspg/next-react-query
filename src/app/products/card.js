export default async function Card() {
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
