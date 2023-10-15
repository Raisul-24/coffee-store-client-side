import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);
export const  AuthContext = createContext(null);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
   const [user,setUser] = useState(null);
   const [loading, setLoading] = useState(true)

   const createUser = (email, password) =>{
      setLoading(true);
      return createUserWithEmailAndPassword(auth,email,password);
   }

   const userInfo ={
      user,
      loading,
      createUser,
   }
   return (
      <div>
         <AuthContext value={userInfo}>
            {children}
         </AuthContext>
      </div>
   );
};

export default AuthProvider;