import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
   // console.log(coffee)
   const { _id, name, chef, photo, price } = coffee;

   const handleDelete = _id => {
      console.log(_id)
      Swal.fire({
         title: 'Are you sure?',
         text: "You won't be able to revert this!",
         icon: 'warning',
         showCancelButton: true,
         confirmButtonColor: '#3085d6',
         cancelButtonColor: '#d33',
         confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
         if (result.isConfirmed) {
            
            fetch(`http://localhost:2000/coffee/${_id}`,{
               method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
               console.log(data);
               if(data.deletedCount > 0){
                  Swal.fire(
                     'Deleted!',
                     'Your coffee has been deleted.',
                     'success'
                  )
                  const remaining = coffees.filter(cof =>  cof._id !== _id);
                  setCoffees(remaining)
               }
            })
         }
      })
   }
   return (
      <div className="">
         <div className="card card-side bg-[#F5F4F1] shadow-xl">
            <figure><img src={photo} className="w-56 h-60" /></figure>
            <div className="flex justify-around w-full mt-7">
               <div >
                  <h2 className="card-title text-base">Name : <span className='font-normal'>{name}</span></h2>
                  <h2 className="card-title text-base">Chef : <span className='font-normal'>{chef}</span></h2>
                  <h2 className="card-title text-base">Price : <span className='font-normal'>{price}</span></h2>
               </div>

               <div className="flex flex-col text-sm">
                  <button className="btn btn-outline bg-transparent">View</button>
                  <Link to={`/updateCoffee/${_id}`}>
                  <button className="btn btn-outline bg-transparent my-3">Edit</button>
                  </Link>
                  <button className="btn btn-outline bg-transparent"
                     onClick={() => handleDelete(_id)}
                  >Delete</button>
               </div>
            </div>
         </div>
      </div>
   );
};

CoffeeCard.propTypes = {
   coffee: PropTypes.element.any,
   coffees: PropTypes.element.any,
   setCoffees: PropTypes.element.any
}
export default CoffeeCard;