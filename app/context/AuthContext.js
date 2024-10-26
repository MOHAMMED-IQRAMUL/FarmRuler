"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import asyncHandler from "../utils/asyncHandler";
import axios from "../utils/axios"; // Use our configured Axios instance

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const router = useRouter();
  useEffect(()=>{
    // If cookie is available just request the user data 
    async function getUserIfAvailable(){
      const data = await asyncHandler(axios.get("/auth/user"));
      if(data){
        setUser(data);
      }
    }
    getUserIfAvailable();
  },[]);
  const signUp=async(username,fullName,gender,password,confirmPassword)=>{
    const data=await asyncHandler(axios.post("/auth/signup",
      {
        username,fullName,gender,password,confirmPassword
      }
    ));
    console.log(data);
    
    if(data){
      setUser(data);
      router.push("/dashboard");
    }
  }
  const logIn=async(username,password)=>{
    const data=await asyncHandler(axios.post("/auth/login",{username,password}));
    if(data){
      setUser(data);
      router.push("/dashboard");
    }
  }

  // Log out method
  const logOut = async () => {
    const data=await asyncHandler(axios.post("/auth/logout"));
    if(data){
      console.log(data);
      setUser(null);//Remove existing user
      router.push("/sign-in");//Navigate back to sign in page
    }
  };

  return (
    <AuthContext.Provider value={{ user,signUp,logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};
