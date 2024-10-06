/** @format */

"use client";

import { UserIcon } from "@heroicons/react/outline";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function SignUp() {
	return (
		<div className="min-h-screen flex flex-col">
			<Navbar />
			<main className="flex-grow flex items-center justify-center mb-10">
				<div className="max-w-md w-full space-y-8 mt-10">
					<div>
						<UserIcon className="mx-auto h-12 w-12 text-indigo-600" />
						<h2 className="mt-2 text-center text-3xl font-extrabold text-gray-900">
							Sign up to your account
						</h2>
					</div>
					<form
						className="mt-8 space-y-6 w-[30vw] p-4 border-black border-[2px] rounded-md pb-10"
						action="#"
						method="POST">
						<input
							type="hidden"
							name="remember"
							value="true"
						/>
						<div className="rounded-md shadow-sm flex flex-col justify-center items-center gap-2">
							<div className="w-full">
								<label
									htmlFor="firstName"
									className="font-semibold text-[0.92rem]">
									FirstName
								</label>
								<input
									id="firstName"
									name="firstName"
									type="text"
									autoComplete="firstName"
									required
									className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
									placeholder="Enter your firstName"
								/>
							</div>
							<div className="w-full">
								<label
									htmlFor="lastname"
									className="font-semibold text-[0.92rem]">
									LastName
								</label>
								<input
									id="lastname"
									name="lastname"
									type="text"
									autoComplete="lastname"
									className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
									placeholder="Enter your lastname"
								/>
							</div>
							<div className="w-full">
								<label
									htmlFor="email"
									className="font-semibold text-[0.92rem]">
									Email address
								</label>
								<input
									id="email"
									name="email"
									type="email"
									autoComplete="email"
									required
									className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
									placeholder="Enter your Email address"
								/>
							</div>
							<div className="w-full">
								<label
									htmlFor="password"
									className="font-semibold text-[0.92rem]">
									Password
								</label>
								<input
									id="password"
									name="password"
									type="password"
									autoComplete="current-password"
									required
									className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
									placeholder="Enter your Password"
								/>
							</div>
							<div className="w-full">
								<label
									htmlFor="cpassword"
									className="font-semibold text-[0.92rem]">
									Confirm Password
								</label>
								<input
									id="cpassword"
									name="cpassword"
									type="password"
									autoComplete="cpassword"
									required
									className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
									placeholder="Enter your password again"
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
								<label
									htmlFor="remember-me"
									className="ml-2 block text-sm text-gray-900">
									Remember me
								</label>
							</div>
							<div className="text-sm">
								<a
									href="#"
									className="font-medium text-indigo-600 hover:text-indigo-500">
									Forgot your password?
								</a>
							</div>
						</div>
						<div>
							<button
								type="submit"
								className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
								Sign up
							</button>
						</div>
					</form>
				</div>
            </main>
			<Footer />
		</div>
	);
}
