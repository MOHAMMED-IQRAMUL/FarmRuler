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
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    // If cookie is available just request the user data 
    async function getUserIfAvailable() {
      const data = await asyncHandler(axios.get("/auth/user"), { showToast: false });
      if (data) {
        setUser(data);
      }
    }
    getUserIfAvailable();
  }, []);
  const signUp = async (username, fullName, gender, password, confirmPassword) => {
    setLoading(true);
    const data = await asyncHandler(
      axios.post("/auth/signup",
        {
          username, fullName, gender, password, confirmPassword
        }
      ),
      { toastMsg: "Creating Your Account.." }
    );
    if (data) {
      setUser(data);
      router.push("/dashboard");
    }
    setLoading(false);
  }
  const logIn = async (username, password) => {
    setLoading(true);
    const data = await asyncHandler(
      axios.post("/auth/login", { username, password }),
      {toastMsg:"Validating Credentails.."}
    );
    if (data) {
      setUser(data);
      router.push("/dashboard");
    }
    setLoading(false);
  }

  // Log out method
  const logOut = async () => {
    setLoading(true);
    const data = await asyncHandler(
      axios.post("/auth/logout"),
      {toastMsg:"Logging You Out.."}
    );
    if (data) {
      setUser(null);//Remove existing user
      router.push("/sign-in");//Navigate back to sign in page
    }
    setLoading(false);
  };

  return (
    <AuthContext.Provider value={{ user,loading, signUp, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};
