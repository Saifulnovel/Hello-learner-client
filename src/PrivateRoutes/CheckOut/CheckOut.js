import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {

   const info = useLoaderData();
   console.log(info);
   const {  name } = info;

   return (
     <div className="container flex rounded-3xl mx-auto h-96 bg-gray-300">
       <div className="card w-96 glass mx-auto my-auto shadow-xl">
         <div className="card-body">
           <h2 className="card-title text-2xl text-green-500">
             Course Name: {name}
           </h2>
           <p>Thanks for your choice , Wish You all the best</p>
           <div className="card-actions justify-end">
             <button className="btn btn-outline btn-error">Buy Now</button>
           </div>
         </div>
       </div>
     </div>
   );
};

export default CheckOut;