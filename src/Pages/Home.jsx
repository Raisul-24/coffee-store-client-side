import { Link, useLoaderData } from "react-router-dom";
import CoffeeCard from "../Components/CoffeeCard";
import { useState } from "react";


const Home = () => {
   const loadedCoffees = useLoaderData();
   const [coffees, setCoffees] = useState(loadedCoffees)
   return (
      <div>
         <div className="bg-[url('/images/more/1.png')] my-10 bg-no-repeat">
            <div className="container mx-auto">
               <h2 className="text-xl text-center font-normal">---Slip & Savor---</h2>
               <h2 className="text-6xl text-center font-rancho">---Slip & Savor---</h2>
               <div className="flex justify-center my-5 md:my-10">
                  <button className="bg-[#D2B48C] border-2 border-[#374151] rounded-xl w-72 font-rancho text-lg py-1 text-[#374151]" >
                     <Link to="/addCoffee">Add Coffee</Link>
                  </button>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 md: gap-9 bg-transparent md:mt-20">
                  {
                     coffees.map(coffee =><CoffeeCard key={coffee._id} 
                        coffee={coffee}
                        coffees={coffees} setCoffees={setCoffees}
                        ></CoffeeCard> )
                  }
               </div>
            </div>

         </div>
         <div className="">
            
         </div>
      </div>
   );
};

export default Home;