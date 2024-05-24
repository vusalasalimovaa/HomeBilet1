import React, { useState } from "react";
import {
  useDeleteProductByIdMutation,
  useGetAllProductQuery,
} from "../../../services/product";
import { Link } from "react-router-dom";

const Admin = () => {
  const { data: admin, refetch } = useGetAllProductQuery();
  const [deleteProductById] = useDeleteProductByIdMutation();

  const [title, setTitle] = useState("");
  const [sortType, setSortType] = useState("");

  const filteredProduct = admin?.filter((item) =>
    item.title.toUpperCase().includes(title.toUpperCase())
  );

  if (sortType === "a-z") {
    filteredProduct.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortType === "z-a") {
    filteredProduct.sort((a, b) => b.title.localeCompare(a.title));
  } else if (sortType === "low-high") {
    filteredProduct.sort((a, b) => a.rate - b.rate);
  } else if (sortType === "high-low") {
    filteredProduct.sort((a, b) => b.rate - a.rate);
  }
  return (
    <>
      <>
        {/* component */}
        <div className="text-gray-900 bg-gray-200">
          <div className="p-4 flex">
            <Link to="/">
              <button className="text-3xl">Home</button>
            </Link>
          </div>

          <div>
            <Link to="/post">
              <button
                style={{ marginLeft: "10px" }}
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Add +
              </button>
            </Link>

            <>
              {/* component */}
              <div className="p-5">
                <div className="flex justify-center items-baseline flex-wrap">
                  <div className="flex m-2">
                    <button
                      onClick={() => setSortType("a-z")}
                      className="text-base  rounded-r-none  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
  hover:bg-gray-200  
  bg-gray-100 
  text-gray-700 
  border duration-200 ease-in-out 
  border-gray-600 transition"
                    >
                      <div className="flex leading-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          height="100%"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-chevron-left w-5 h-5"
                        >
                          <polyline points="15 18 9 12 15 6" />
                        </svg>
                        A-Z
                      </div>
                    </button>
                    <button
                      onClick={() => setSortType("z-a")}
                      className="text-base  rounded-l-none border-l-0  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
  hover:bg-teal-200  
  bg-teal-100 
  text-teal-700 
  border duration-200 ease-in-out 
  border-teal-600 transition"
                    >
                      <div className="flex leading-5">
                        Z-A
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          height="100%"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-chevron-right w-5 h-5 ml-1"
                        >
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                      </div>
                    </button>
                  </div>
                  <div className="flex m-2">
                    <button
                      onClick={() => setSortType("low-high")}
                      className="text-base  rounded-r-none  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
  hover:bg-teal-700 hover:text-teal-100 
  bg-teal-100 
  text-teal-700 
  border duration-200 ease-in-out 
  border-teal-600 transition"
                    >
                      <div className="flex leading-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          height="100%"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-save w-5 h-5 mr-1"
                        ></svg>
                        Low-High
                      </div>
                    </button>
                    <button
                      onClick={() => setSortType("high-low")}
                      className="text-base  rounded-l-none rounded-r-none border-l-0 border-r-0  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
  hover:bg-teal-700 hover:text-teal-100 
  bg-teal-100 
  text-teal-700 
  border duration-200 ease-in-out 
  border-teal-600 transition"
                    >
                      <div className="flex leading-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          height="100%"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-edit w-5 h-5 mr-1"
                        ></svg>
                        High-Low
                      </div>
                    </button>
                    <button
                      className="text-base  rounded-l-none  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
  hover:bg-teal-700 hover:text-teal-100 
  bg-teal-100 
  text-teal-700 
  border duration-200 ease-in-out 
  border-teal-600 transition"
                    >
                      <div className="flex leading-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          height="100%"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-eye w-5 h-5 mr-1"
                        >
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                          <circle cx={12} cy={12} r={3} />
                        </svg>
                        View
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </>
          </div>
          <div className="px-3 py-4 flex justify-center">
            <table className="w-full text-md bg-white shadow-md rounded mb-4">
              <tbody>
                <tr className="border-b">
                  <div style={{ display: "flex" }}>
                    <th className="text-left p-3 px-5">Title</th>
                    <>
                      {/* component */}
                      {/* This is an example component */}
                      <div className="pt-2 relative mx-auto text-gray-600">
                        <input
                          onChange={(e) => setTitle(e.target.value)}
                          className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                          type="search"
                          name="search"
                          placeholder="Search"
                        />
                        <button
                          type="submit"
                          className="absolute right-0 top-0 mt-5 mr-4"
                        >
                          <svg
                            className="text-gray-600 h-4 w-4 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            version="1.1"
                            id="Capa_1"
                            x="0px"
                            y="0px"
                            viewBox="0 0 56.966 56.966"
                            style={{
                              enableBackground: "new 0 0 56.966 56.966",
                            }}
                            xmlSpace="preserve"
                            width="512px"
                            height="512px"
                          >
                            <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                          </svg>
                        </button>
                      </div>
                    </>
                  </div>
                  <th className="text-left p-3 px-5">Rate</th>
                  <th className="text-left p-3 px-5">Like</th>
                  <th className="text-left p-3 px-5">Description</th>
                  <th className="text-left p-3 px-5">Image</th>
                  <th className="text-left p-3 px-5">Detail</th>
                  <th className="text-left p-3 px-5">Delete</th>
                  <th className="text-left p-3 px-5">Edit</th>
                  <th />
                </tr>

                {filteredProduct?.map((elem) => {
                  return (
                    <tr className="border-b hover:bg-orange-100 bg-gray-100">
                      <td className="p-3 px-5">{elem.title}</td>
                      <td className="p-3 px-5">{elem.rate}</td>
                      <td className="p-3 px-5">{elem.like}</td>
                      <td className="p-3 px-5">{elem.description}</td>
                      <td className="p-3 px-5">
                        <img
                          style={{ width: "100px" }}
                          src={elem.image}
                          alt=""
                        />
                      </td>
                      <td>
                        <Link to={`/detail/${elem._id}`}>
                          <button
                            type="button"
                            className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                          >
                            Detail
                          </button>
                        </Link>
                      </td>
                      <td>
                        <button
                          onClick={() => {
                            deleteProductById(elem._id);
                            refetch();
                          }}
                          type="button"
                          className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                        >
                          Delete
                        </button>
                      </td>
                      <td>
                        <Link to={`/edit/${elem._id}`}>
                          <button
                            type="button"
                            className="text-sm bg-green-500 hover:bg-green-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                          >
                            Edit
                          </button>
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </>
    </>
  );
};

export default Admin;
