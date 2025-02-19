import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="min-w-[500px] translate-y-20 md:translate-y-30">

    <div className="border-2 w-6/7 md:w-1/2 mx-auto my-5 rounded-2xl">
      <h1 className="text-3xl font-bold text-primary text-center mt-5 mb-3">Signup</h1>

      <form className="p-4">
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2 text-primary" htmlFor="username">
            Username
          </label>
          <input
            className="shadow input input-md appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            // onChange={(e) => setUser({ ...user, userName: e.target.value })}
            // value={user.userName}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2 text-primary" htmlFor="password">
            Password
          </label>
          <input
            className="shadow input input-md appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            // onChange={(e) => setUser({ ...user, password: e.target.value })}
            // value={user.password}
          />
        </div>

        <div className="w-[63%] md:w-[39%] mb-3 md:mb-2 flex justify-between">
          <h3 className="text-primary">Don't have an account?</h3>
          <Link to="/signup" className="text-blue-500">Sign Up</Link>
        </div>

        <div className="flex items-center justify-between">
          <button
            className="w-full btn btn-md btn-neutral text-white font-bold rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
        </div>

        {/* Google */}
        <button className="btn btn-block bg-white text-black border-[#e5e5e5] mt-3">
          <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
          Login with Google
        </button>
      </form>
    </div>
  </div>
  )
}

export default Login