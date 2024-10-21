import React, { useState } from "react";
import Navbar from "../Common/Navbar";
import Footer from "../Common/Footer";
import { Link } from "react-router-dom";

function Login() { 
  const [email,setEmail] = useState(null)
    const [pass,setPass] = useState(null)
     const handleSubmit = () => {};
   
     return (
       <>
         <Navbar />
         <div className="authBg w-[100vw] h-[90vh] flex flex-col justify-evenly items-center  font-Inter mb-10">    
             <div className="bg-white relative items-center w-[50%] shadow-lg rounded-lg px-5 py-12 mx-auto md:px-12 lg:px-20 max-w-7xl">
             <h1 className="text-3xl font-Lobster text-center p-4">
              Login Now to explore tasty recipe's and foodie's around you!
             </h1>
               <div className="w-full max-w-md mx-auto md:max-w-sm md:px-0 md:w-96 sm:px-4">
                 <div className="flex flex-col">
                
                 </div>
                 <form onSubmit={handleSubmit}>
                   <div className="mt-4 space-y-6">
                     <div className="col-span-full">
                       <label className="block mb-3 text-sm font-medium text-gray-600">
                         {" "}
                         Email{" "}
                       </label>
                       <input
                         type="email"
                         required
                         placeholder="Email"
                         onChange={(e)=>setEmail(e.target.value)}
                         value={email}
                         className="block w-full px-6 py-3 text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                       />
                     </div>
                     <div className="col-span-full">
                       <label className="block mb-3 text-sm font-medium text-gray-600">
                         {" "}
                         Password{" "}
                       </label>
                       <input
                         type="password"
                         placeholder="******"
                         value={pass}
                         required
                         onChange={(e)=>setPass(e.target.value)}
                         className="block w-full px-6 py-3 text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                       />
                     </div>
   
                     <div className="col-span-full">
                       <p className="text-sm p-2">Don't have account<Link to="/auth/signup"><span className="text-blue-400 pl-1 border-blue-400 cursor-pointer hover:border-b-2"> Signup </span></Link></p>
                       <button
                         type="submit"
                         className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
                       >
                         {" "}
                         Login{" "}
                       </button>
                     </div>
                   </div>
                 </form>
               </div>
             </div>
         </div>
   
         <Footer />
       </>
     );
   }
export default Login