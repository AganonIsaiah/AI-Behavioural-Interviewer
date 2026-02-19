"use client";

import { useState } from "react";
import { Mail, Lock, ArrowRight } from "lucide-react";

export default function LoginForm() {
  const [showSignIn, setShowSignIn] = useState<boolean>(true);

  return (
    <div className="border-l ai-border w-3/5 min-w-100 h-screen p-4 flex flex-col items-center justify-center">
      <div className="flex flex-col gap-4">
        {showSignIn ? (
          <div>
            <h2>Welcome Back</h2>
            <p className="text-zinc-400! text-sm mt-0.5">
              Sign in to continue your practice.
            </p>
          </div>
        ) : (
          <div >
            <h2>Create your Account</h2>
            <p className="text-zinc-400! text-sm mt-0.5">
              Start practicing interviews in minutes.
            </p>
          </div>
        )}

        <div className="text-sm font-medium flex gap-2 bg-zinc-800 py-1.25 px-1.25 rounded-lg mt-1">
          <button
            className={`login-btn ${showSignIn ? "bg-zinc-950" : "text-zinc-500 hover:text-white duration-400!"}`}
            onClick={() => setShowSignIn(true)}
          >
            Sign in
          </button>
          <button
            className={`login-btn ${!showSignIn ? "bg-zinc-950" : "text-zinc-500 hover:text-white duration-400!"}`}
            onClick={() => setShowSignIn(false)}
          >
            Create account
          </button>
        </div>

        {showSignIn ? (
          <form action="" className="flex flex-col mt-1">
            <label htmlFor="email" className="font-medium text-sm">
              Email Address
            </label>

            <div className="relative w-full mt-1">
              <input
                type="email"
                name="email"
                placeholder="you@email.com"
                required
                className="h-11 w-full text-sm bg-zinc-800 p-2 pl-9 rounded-lg"
              />
              <Mail
                className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400"
                size={16}
              />
            </div>

            <label htmlFor="password" className="font-medium text-sm mt-4">
              Password
            </label>

            <div className="relative w-full mt-1">
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                required
                className="h-11 w-full text-sm bg-zinc-800 p-2 pl-9 rounded-lg"
              />
              <Lock
                className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400"
                size={16}
              />
            </div>

            <button type="submit" className="mt-6 login-enter-btn">
              Sign in <ArrowRight size={16} className="ml-1.5" />
            </button>
          </form>
        ) : (
          <form action="" className="flex flex-col gap-2 mt-1">
            <label htmlFor="email" className="font-medium text-sm">
              Email Address
            </label>

            <div className="relative w-full">
              <input
                type="email"
                name="email"
                placeholder="you@email.com"
                required
                className="h-11 w-full text-sm bg-zinc-800 p-2 pl-9 rounded-lg"
              />
              <Mail
                className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400"
                size={16}
              />
            </div>

            <label
              htmlFor="resume"
              className="font-medium text-sm flex gap-1 mt-2"
            >
              Upload your Resume <p className="text-zinc-500">(PDF)</p>
            </label>

            <input
              className="text-zinc-500 flex justify-center items-center text-center! h-18 w-full text-sm bg-zinc-800 p-2 pt-3 pl-3 rounded-lg cursor-pointer"
              type="file"
              id="resume"
              name="resume"
              accept=".pdf"
            />

            <label htmlFor="password" className="font-medium text-sm mt-1">
              Password
            </label>

            <div className="relative w-full">
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                required
                className="h-11 w-full text-sm bg-zinc-800 p-2 pl-9 rounded-lg"
              />
              <Lock
                className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400"
                size={16}
              />
            </div>

            <button type="submit" className="mt-4 login-enter-btn">
              Create account <ArrowRight size={16} className="ml-1.5" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
