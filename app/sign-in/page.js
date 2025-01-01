"use client"


 import { UserIcon } from '@heroicons/react/outline';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';

export default function SignIn() {
    const {loading,logIn}=useAuth();
    const handleSignIn=async(e)=>{
        e.preventDefault();
        const username=e.target.elements.username.value;
        const password=e.target.elements.password.value;
        if(!username || !password){
            toast.error("Fill all the fields..");
            console.error("Fill all the fields");
            return false;
        }
        await logIn(username,password);
    }
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className=" flex items-center justify-center mt-14">
                <div className="max-w-md w-full space-y-8 mb-8">
                    <div>
                        <UserIcon className="mx-auto h-12 w-12 text-indigo-600" />
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-indigo-700">
                            Sign in to your account
                        </h2>
                    </div>
                    <form className="mt-8 space-y-6 border-[4px] border-green-800 w-auto p-4 rounded-md " onSubmit={handleSignIn} action="#" method="POST">
                        <input type="hidden" name="remember" value="true" />
                        <div className="rounded-md shadow-sm -space-y-px flex flex-col justify-center items-center gap-2">
                            <div className='w-full'>
                                <label htmlFor="username" className="font-semibold text-[0.92rem]">
                                    Username
                                </label>
                                <input
                                    id="username"
                                    name="username"
                                    type="username"
                                    autoComplete="username"
                                    required
                                    className="appearance-none rounded-md relative block w-full px-3 py-2 border-[2px] border-gray-300 placeholder-gray-500 text-white rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Enter your username"
                                />
                            </div>
                            <div className='w-full'>
                                <label htmlFor="password" className="font-semibold text-[0.92rem]">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="appearance-none rounded-md relative block w-full px-3 py-2 border-[2px] border-gray-300 placeholder-gray-500 text-white rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Enter your password"
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm">
                                    Remember me
                                </label>
                            </div>
                            <div className="text-sm">
                                <a href="#" className="font-medium hover:text-indigo-500">
                                    Forgot your password?
                                </a>
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mb-4"
                                disabled={loading}
                            >
                                {loading?"Signing in..":"Sign in"}
                            </button>
                        </div>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    );
}