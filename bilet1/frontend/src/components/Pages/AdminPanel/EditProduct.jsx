import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  useGetAllProductQuery,
  useGetProductByIdQuery,
  usePutProductByIdMutation,
} from "../../../services/product";

const EditProduct = () => {
  const { id } = useParams();
  const { data } = useGetProductByIdQuery(id);
  const { refetch } = useGetAllProductQuery();
  const [item, setItem] = useState({
    title: "",
    rate: "",
    like: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (data) {
      setItem({
        ...item,
        id: id,
        title: data.title,
        description: data.description,
        price: data.price,
        image: data.image,
      });
    }
  }, [data]);

  const [putProductById] = usePutProductByIdMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await putProductById(item);
    refetch();
  };
  return (
    <>
      <>
        <div className="flex items-center justify-center p-12">
          <div className="mx-auto w-full max-w-[550px]">
            <form onSubmit={handleSubmit}>
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                  Title
                </label>
                <input
                  value={item.title}
                  onChange={handleChange}
                  type="text"
                  name="title"
                  id="title"
                  placeholder="title "
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                  Rate
                </label>
                <input
                  value={item.rate}
                  onChange={handleChange}
                  type="number"
                  name="rate"
                  id="rate"
                  placeholder="Rate"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                  Like
                </label>
                <input
                  value={item.like}
                  onChange={handleChange}
                  type="number"
                  name="like"
                  id="like"
                  placeholder="Like"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>

              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                  Description
                </label>
                <input
                  value={item.description}
                  onChange={handleChange}
                  type="text"
                  name="description"
                  id="description"
                  placeholder="Description"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>

              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                  Image
                </label>
                <input
                  value={item.image}
                  onChange={handleChange}
                  type="nutextmber"
                  name="image"
                  id="image"
                  placeholder="Image"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>

              <div>
                <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    </>
  );
};

export default EditProduct;
