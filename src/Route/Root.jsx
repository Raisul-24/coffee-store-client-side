import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar";
import Footer from "../Components/Footer/Footer";



const Root = () => {
   return (
      <div className="bg-white font-raleway">
         <Navbar></Navbar>
         {/* <div className="container mx-auto"> */}
         <Outlet></Outlet>
         {/* </div> */}
         <Footer></Footer>
         
      </div>
   );
};

export default Root;