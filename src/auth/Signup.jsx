import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import toast from 'react-hot-toast';
import { FaUserLarge } from "react-icons/fa6";

const Signup = () => {
  // const navigate = useNavigate();
  const [user, setUser] = useState({
    fullName: '',
    userName: '',
    password: '',
    confirmPassword: '',
    gender: '',
  });
  const [profilePic, setProfilePic] = useState(null);

  // const onSubmitHandler = async (e) => {
  //   e.preventDefault();

  //   // Create FormData object
  //   const formData = new FormData();
  //   formData.append('fullName', user.fullName);
  //   formData.append('userName', user.userName);
  //   formData.append('password', user.password);
  //   formData.append('confirmPassword', user.confirmPassword);
  //   formData.append('gender', user.gender);

  //   // If a profile picture is selected, append it to the form data
  //   if (profilePic) {
  //     formData.append('profilePic', profilePic);
  //   }

  //   try {
  //     const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/user/register`, formData, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //       },
  //     });

  //     if (response.status === 201) {
  //       toast.success('Registration successful!');
  //       navigate('/login');
  //     } else {
  //       toast.error('Registration failed!');
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     toast.error(error.response?.data?.message || 'An error occurred during registration.');
  //   }
  // };

  return (
    <div className="min-w-[500px] ">
      <div className="border-2 w-6/7 md:w-1/2 mx-auto my-5 rounded-2xl">
        <h1 className="text-3xl font-bold text-primary text-center mt-5 mb-3">Signup</h1>
        <form className="p-4">
          <div className="flex flex-col items-center my-1">
            <label htmlFor="profilePic" className="btn w-[4.5rem] h-[4.5rem] btn-circle mb-2">
              {
                profilePic ? (
                  <img
                    src={URL.createObjectURL(profilePic)}
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full"
                  />
                ) : (
                  <FaUserLarge className="text-3xl" />
                )
              }
            </label>
            <input
              type="file"
              id="profilePic"
              className="hidden"
              onChange={(e) => setProfilePic(e.target.files[0])}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2 text-primary" htmlFor="fullName">
              Full Name
            </label>
            <input
              className="shadow input input-md appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="fullName"
              type="text"
              placeholder="Full Name"
              onChange={(e) => setUser({ ...user, fullName: e.target.value })}
              value={user.fullName}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2 text-primary" htmlFor="username">
              Username
            </label>
            <input
              className="shadow input input-md appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
              onChange={(e) => setUser({ ...user, userName: e.target.value })}
              value={user.userName}
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
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              value={user.password}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2 text-primary" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              className="shadow input input-md appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
              id="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
              value={user.confirmPassword}
            />
          </div>

          <div className="flex my-2">
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text text-primary">Male</span>
                <input
                  type="checkbox"
                  checked={user.gender === "male"}
                  className="checkbox checkbox-error-content"
                  onChange={(e) => setUser({ ...user, gender: "male" })}
                />
              </label>
            </div>

            <div className="form-control ml-2">
              <label className="label cursor-pointer">
                <span className="label-text  text-primary">Female</span>
                <input
                  type="checkbox"
                  checked={user.gender === "female"}
                  className="checkbox checkbox-warning-content"
                  onChange={(e) => setUser({ ...user, gender: "female" })}
                />
              </label>
            </div>
          </div>

          <div className="w-[63%] md:w-[40%] mb-4 md:mb-2 flex justify-between">
            <h3 className="text-primary">Already have an account?</h3>
            <Link to="/login" className="text-blue-500">Sign In</Link>
          </div>

          <div className="flex items-center justify-between">
            <button
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign Up
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
  );
};

export default Signup;
