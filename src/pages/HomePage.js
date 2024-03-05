import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux'

const HomePage = () => {
  const [ideas, setIdeas] = useState();
  const[loading,setLoading] = useState(true);
  const {currentUser} = useSelector(state=>state.user);

  const getAllData = async () => {
    try {
      const getIdeas = await fetch(
        `${process.env.REACT_APP_BASE_URL}/getAllIdeas`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const res = await getIdeas.json();
      setIdeas(res.ideas);
      console.log(res);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllData();
  },[]);

  return (
    <>
     {
      loading ? (<div>Loading.....</div>) :
      ( <section className="container h-screen  w-fit overflow-x-hidden px-4 mx-auto py-4">
        <div className="sm:flex items-center justify-between">
          <div>
            <h2 className="text-lg font-medium text-gray-800 dark:text-white">
              Users
            </h2>
            <p className="mt-1 text-sm  dark:text-gray-300">
              This is a list of all Ideas. You can add new Ideas.
            </p>
          </div>
          <Link to={"/addemployee"}>
            <div>
              <button className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-sm font-semibold leading-7 text-white hover:bg-indigo-500 ">
                Add Idea
              </button>
            </div>
          </Link>
        </div>
        <div className="sm:flex sm:flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block sm:min-w-full w-screen py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                <table className="sm:min-w-full w-[50px] divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <span>Users</span>
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Topic
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Description
                      </th>
                    </tr>
                  </thead>

                  <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                  {ideas.map((idea,index) => (
                    <tr key={index}>
                        <td className="py-4 px-4 whitespace-nowrap">
                          <div className="sm:flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img
                                className="h-10 w-10 rounded-full object-cover"
                                src={currentUser.user.image}
                                alt=""
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium  dark:text-white">
                                {currentUser.user.name}
                              </div>
                              <div className="text-sm  dark:text-gray-300">
                                {currentUser.user.email}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-12 py-4 whitespace-nowrap">
                          <div className="text-sm  dark:text-white">
                            {idea.topic}
                          </div>
                          
                        </td>
                        <td className="px-12 py-4 whitespace-nowrap">
                          
                          <div className="text-sm  dark:text-gray-300">
                            {idea.description}
                          </div>
                        </td>
                      
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>)
     }
    </>
  );
};

export default HomePage;
