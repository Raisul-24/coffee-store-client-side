import { BiArrowBack } from "react-icons/bi";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
   const coffee = useLoaderData();
   console.log(coffee)
   const {_id,name,chef,supplier,taste,category,details,photo,price} = coffee;

   const handleUpdatedCoffee = e =>{
      e.preventDefault();
      const form = e.target;
      const name = form.name.value;
      const chef = form.chef.value;
      const supplier = form.supplier.value;
      const taste = form.taste.value;
      const category = form.category.value;
      const details = form.details.value;
      const photo = form.photo.value;
      const price = form.price.value;

      const updatedCoffee = {name,chef,supplier,taste,category,details,photo,price}
      console.log(updatedCoffee);
      // send data to server
      fetch(`http://localhost:2000/coffee/${_id}`,{
         method: 'PUT',
         headers: {
            'Content-type' : "application/json"
         },
         body: JSON.stringify(updatedCoffee)
      })
      .then(res => res.json())
      .then(data =>{
         console.log(data);
         if(data.modifiedCount >0 ){
            Swal.fire({
               position: 'center',
               icon: 'success',
               title: 'Coffee has been Updated',
               showConfirmButton: false,
               timer: 1500
             })
             form.reset();
            
         }

         
      })
   }
   return (
      <div className="bg-[url('/images/more/11.png')] ">
         <div className="container mx-auto">
            <button className="flex btn  items-center mb-10 bg-transparent border-0 font-rancho text-lg font-bold text-[#374151]">
               <BiArrowBack></BiArrowBack>
               <Link to="/">Back to Home</Link>
            </button>

            <div className=" bg-[#F4F3F0] md:pt-20 rounded-xl py-8 my-10 md:mb-20">
               <h2 className="text-3xl font-extrabold text-center font-rancho text-[#374151]">Update Coffee</h2>
               <p className="text-center my-5 mb-8">
               It is a long established fact that a reader will be distraceted by the readable content of a page when looking at <br />
                its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed <br /> to using Content here.
               </p>
               <form onSubmit={handleUpdatedCoffee}>
                  <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 md:gap-y-4 px-4 md:px-40">
                     <div className="form-control md:w-full">
                        <label className="label">
                           <span className="label-text text-black font-bold">Name</span>
                        </label>
                        <label className="input-group ">
                           <input type="text" placeholder={name}
                           name="name"
                              className="input input-bordered w-full bg-white" />
                        </label>
                     </div>
                     <div className="form-control md:w-full">
                        <label className="label">
                           <span className="label-text text-black font-bold">Chef</span>
                        </label>
                        <label className="input-group">
                           <input type="text" placeholder={chef}
                           name="chef"
                              className="input input-bordered w-full bg-white" />
                        </label>
                     </div>
                     <div className="form-control md:w-full">
                        <label className="label">
                           <span className="label-text text-black font-bold">Supplier</span>
                        </label>
                        <label className="input-group">
                           <input type="text" placeholder={supplier}
                           name="supplier"
                              className="input input-bordered w-full bg-white" />
                        </label>
                     </div>
                     <div className="form-control md:w-full">
                        <label className="label">
                           <span className="label-text text-black font-bold">Taste</span>
                        </label>
                        <label className="input-group">
                           <input type="text" placeholder={taste}
                           name="taste"
                              className="input input-bordered w-full bg-white" />
                        </label>
                     </div>
                     <div className="form-control md:w-full">
                        <label className="label">
                           <span className="label-text text-black font-bold">Category</span>
                        </label>
                        <label className="input-group">
                           <input type="text" placeholder={category}
                           name="category"
                              className="input input-bordered w-full bg-white" />
                        </label>
                     </div>
                     <div className="form-control md:w-full">
                        <label className="label">
                           <span className="label-text text-black font-bold">Details</span>
                        </label>
                        <label className="input-group">
                           <input type="text" placeholder={details}
                           name="details"
                              className="input input-bordered w-full bg-white" />
                        </label>
                     </div>
                  </div>
                  <div className="form-control md:w-full px-4 md:px-40 md:my-4 ">
                     <label className="label">
                        <span className="label-text text-black font-bold">Photo</span>
                     </label>
                     <label className="input-group">
                        <input type="text" placeholder={photo}
                        name="photo"
                           className="input input-bordered w-full bg-white" />
                     </label>
                  </div>
                  <div className="form-control md:w-full px-4 md:px-40 md:mb-10 ">
                     <label className="label">
                        <span className="label-text text-black font-bold">Price</span>
                     </label>
                     <label className="input-group">
                        <input type="text" placeholder={price}
                        name="price"
                           className="input input-bordered w-full bg-white" />
                     </label>
                  </div>
                  
                  <div className="form-control md:w-full px-4 md:px-40 md:my-7 ">
                     <label className="input-group ">
                        <input type="submit" value="Add Coffee"
                           className="input bg-[#D2B48C] border-2 border-[#374151] rounded-xl w-full font-rancho text-2xl py-2 text-[#374151]" />
                     </label>
                  </div>

               </form>
            </div>
         </div>

      </div>
   );
};

export default UpdateCoffee;