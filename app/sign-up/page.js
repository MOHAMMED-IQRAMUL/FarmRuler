'use client';

import { UserIcon } from '@heroicons/react/outline';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';

export default function SignUp() {
    const {loading,signUp} = useAuth();
    const handleSignUp=async (e)=>{
        e.preventDefault();
        const username=e.target.elements.username.value;
        const password=e.target.elements.password.value;
        const fullName=e.target.elements.name.value;
        const confirmPassword=e.target.elements.confirmPassword.value;
        const gender=e.target.elements.gender.value;
        if(!username || !password || !fullName || !confirmPassword || (gender!=="male" && gender!=="female")){
           toast.error("Fill all fields..");
            console.error("Fill all the fields");
            return false;
        }
        await signUp(username,fullName,gender,password,confirmPassword);
        
    }
    return (
        <div className="min-h-screen pt-32 flex flex-col">
            <Navbar />
            <main className="flex-grow mb-8 flex items-center justify-center">
                <div className="max-w-md w-full space-y-8 mb-6">
                    <div>
                        <UserIcon className="mx-auto h-12 w-12 text-indigo-600" />
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-indigo-700">
                            Sign up for an account
                        </h2>
                    </div>
                    <form className="mt-8 space-y-8 border-[4px] border-green-800 w-auto p-4 rounded-md" action="#" method="POST" onSubmit={handleSignUp}>
                        <div className="rounded-md shadow-sm space-y-4 flex-col">
                            <div>
                                <label htmlFor="username" className="sr-only">
                                    Username
                                </label>
                                <input
                                    id="username"
                                    name="username"
                                    type="text"
                                    required
                                    className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 dark:bg-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Username"
                                />
                            </div>
                            <div>
                                <label htmlFor="name" className="sr-only">
                                    Full Name
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 dark:bg-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Full Name"
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="dob" className="sr-only">
                                    Date of Birth
                                </label>
                                <input
                                    id="dob"
                                    name="dob"
                                    type="date"
                                    required
                                    className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 dark:bg-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                />
                            </div>
                            <div>
                                <label htmlFor="gender" className="sr-only">
                                    Gender
                                </label>
                                <select name="gender" id="gender" required className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 dark:bg-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                               defaultValue="Choose gender">
                                    <option value="Choose gender" disabled={true}>Choose gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    Email Address
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 dark:bg-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Email Address"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="new-password"
                                    required
                                    className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 dark:bg-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Password"
                                />
                            </div>
                            <div>
                                <label htmlFor="confirmPassword" className="sr-only">
                                    Re-enter Password
                                </label>
                                <input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type="password"
                                    autoComplete="new-password"
                                    required
                                    className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 dark:bg-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Re-enter Password"
                                />
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                disabled={loading}
                            >
                               {loading?" Signing up..":"Sign up"}
                            </button>
                        </div>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    );
}
