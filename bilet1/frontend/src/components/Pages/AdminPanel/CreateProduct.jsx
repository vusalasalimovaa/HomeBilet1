import React from "react";
import {
  useGetAllProductQuery,
  usePostProductMutation,
} from "../../../services/product";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const productSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  rate: Yup.string().required("Required"),
  like: Yup.string().required("Required"),
  description: Yup.string()
    .required("Required")
    .min(2, "Too Short!")
    .max(50, "Too Long!"),
  image: Yup.string().required("Required"),
});

const CreateProduct = () => {
  const [postProduct] = usePostProductMutation();
  const { refetch } = useGetAllProductQuery();

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();

  //     let obj = {
  //       title: e.target.title.value,
  //       rate: e.target.rate.value,
  //       like: e.target.like.value,
  //       description: e.target.description.value,
  //       image: e.target.image.value,
  //     };

  //     await postProduct({ obj });
  //     refetch();
  //   };

  const handleSubmit = async (initialValues) => {
    await postProduct({ obj: initialValues });
    refetch();
  };
  return (
    <>
      <>
        <div className="flex items-center justify-center p-12">
          <div className="mx-auto w-full max-w-[550px]">
            <Formik
              initialValues={{
                title: "",
                rate: "",
                like: "",
                description: "",
                image: "",
              }}
              validationSchema={productSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <>
                  <Form>
                    <div className="mb-5">
                      <label className="mb-3 block text-base font-medium text-[#07074D]">
                        Title
                      </label>
                      <Field
                        type="text"
                        name="title"
                        id="title"
                        placeholder="Title"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                      <ErrorMessage
                        name="title"
                        component="div"
                        className="text-red-500 text-xs mt-1 "
                      />
                    </div>
                    <div className="mb-5">
                      <label className="mb-3 block text-base font-medium text-[#07074D]">
                        Rate
                      </label>
                      <Field
                        type="number"
                        name="rate"
                        id="rate"
                        placeholder="Rate"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                      <ErrorMessage
                        name="rate"
                        component="div"
                        className="text-red-500 text-xs mt-1 "
                      />
                    </div>
                    <div className="mb-5">
                      <label className="mb-3 block text-base font-medium text-[#07074D]">
                        Like
                      </label>
                      <Field
                        type="number"
                        name="like"
                        id="like"
                        placeholder="Like"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                      <ErrorMessage
                        name="like"
                        component="div"
                        className="text-red-500 text-xs mt-1 "
                      />
                    </div>

                    <div className="mb-5">
                      <label className="mb-3 block text-base font-medium text-[#07074D]">
                        Description
                      </label>
                      <Field
                        type="text"
                        name="description"
                        id="description"
                        placeholder="Description"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                      <ErrorMessage
                        name="description"
                        component="div"
                        className="text-red-500 text-xs mt-1 "
                      />
                    </div>

                    <div className="mb-5">
                      <label className="mb-3 block text-base font-medium text-[#07074D]">
                        Image
                      </label>
                      <Field
                        type="text"
                        name="image"
                        id="image"
                        placeholder="Image"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                      <ErrorMessage
                        name="image"
                        component="div"
                        className="text-red-500 text-xs mt-1 "
                      />
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Submitting..." : "Submit"}
                      </button>
                    </div>
                  </Form>
                </>
              )}
            </Formik>
          </div>
        </div>
      </>
    </>
  );
};

export default CreateProduct;
