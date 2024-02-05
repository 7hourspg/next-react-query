import {Inter} from "next/font/google";
import "./globals.css";

import {Suspense} from "react";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
   title: "Museumverse: Shop for Art and Culture Products Online",
   description:
      "Shop for art and culture products online. Museumverse is the best place to buy art and culture products online.",
};

export default function RootLayout({children}) {
   return (
      <html lang="en">
         <body className={inter.className}>
            <Suspense
               fallback={
                  <div className="flex flex-col items-center justify-center min-h-screen py-2">
                     <h1 className="text-6xl font-bold text-red-700">
                        Loading...
                     </h1>
                  </div>
               }
            >
               {children}
            </Suspense>
         </body>
      </html>
   );
}
