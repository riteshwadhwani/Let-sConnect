import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import {useSelector,useDispatch} from 'react-redux'
import {signInSucess} from '../redux/Slice/UserSlice'


const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const createEmployee = async (data) => {
    if( !data.email || !data.password){
      return toast.error("All fields are required");
    }
    const savedUserResponse = await fetch(
      `${process.env.REACT_APP_BASE_URL}/userLogin`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data }),
      }
    );
    const resdata = await savedUserResponse.json();
    console.log("res",resdata);
    if(!resdata.sucess){
      toast.error(resdata.message);
    }
    else{
      dispatch(signInSucess(resdata));
    navigate("/")
    }
    
  };

  return (
    <div>
      <form onSubmit={handleSubmit(createEmployee)} className="mt-8">
        <div className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="text-base font-medium "
            >
              {" "}
               Email Id{" "}
            </label>
            <div className="mt-2.5">
              <input
                className="flex text-slate-200 h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                type="email"
                placeholder="Enter Your Email"
                {...register("email")}
              ></input>
            </div>
          </div>

          <div>
            <label
              htmlFor="title"
              className="text-base font-medium "
            >
              {" "}
              Password{" "}
            </label>
            <div className="mt-2.5">
              <input
                className="flex text-slate-200 h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                type="password"
                placeholder="Enter Your Employee Title"
                {...register("password")}
              ></input>
            </div>
          </div>

        
          <div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-3.5 py-2.5 text-base font-semibold leading-7 text-white hover:bg-indigo-500"
            >
              Sign In
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="ml-2 h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </button>
          </div>
          
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
