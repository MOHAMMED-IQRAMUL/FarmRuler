"use client";
import Navbar from "../components/Navbar";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";

export default function SignIn() {
  const { loading, logIn } = useAuth();

  const handleSignIn = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const username = form.value.username.value;
    const password = form.value.password.value;

    if (!username || !password) {
      toast.error("Please fill in all fields");
      return;
    }
    await logIn(username, password);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-indigo-950 to-black text-gray-100">
      <Navbar />

      <main className="flex flex-1 items-center justify-center px-4">
        <div className="w-full max-w-md bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl rounded-xl p-8">
          <div className="text-center">
          
            <h2 className="mt-6 text-3xl font-bold text-indigo-400">
              Welcome Back
            </h2>
            <p className="mt-1 text-sm text-gray-400">
              Log in to continue your journey
            </p>
          </div>

          <form onSubmit={handleSignIn} className="mt-8 space-y-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-300">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  className="mt-1 block w-full rounded-lg border border-gray-700 bg-gray-800 placeholder-gray-500 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter your username"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="mt-1 block w-full rounded-lg border border-gray-700 bg-gray-800 placeholder-gray-500 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-sm text-gray-400">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 rounded border-gray-600 focus:ring-indigo-500"
                />
                Remember me
              </label>

              <a href="#" className="hover:text-indigo-400 transition-colors">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-indigo-600 py-2 text-sm font-semibold text-white shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50 transition"
              disabled={loading}
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-500">
            Don’t have an account?{" "}
            <a href="/signup" className="text-indigo-400 hover:text-indigo-300">
              Sign up
            </a>
          </p>
        </div>
      </main>

    </div>
  );
}

