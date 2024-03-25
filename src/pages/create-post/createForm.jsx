import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export const CreateForm = () => {
  const [user] = useAuthState(auth);
  const schema = yup.object().shape({
    title: yup.string().required("add a title"),
    description: yup.string().required("add a description"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const postRef = collection(db, "posts");

  const onCreatePost = async (data) => {
    await addDoc(postRef, {
      title: data.title,
      description: data.description,
      username: user?.displayName,
      id: user?.uid,
    });
  };

  return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn relative left-5 top-72 px-20 hover:bg-gray-700"
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z"
            fill="currentColor"
            fill-rule="evenodd"
            clip-rule="evenodd"
          ></path>
        </svg>
        <p>New Post</p>
      </button>

      {/* where you write your post */}
      <dialog id="my_modal_2" className="modal ">
        <div className="modal-box fixed top-56">
          <form
            onSubmit={handleSubmit(onCreatePost)}
            className="grid  place-items-center "
          >
            <input
              type="text"
              placeholder="title..."
              {...register("title")}
              className="input w-full max-w-xs px bg-white font-bold text-black font-PTSerif my-2 mx-auto"
            />
            <p className="text-red-500">{errors.title?.message}</p>

            <textarea
              placeholder="description..."
              {...register("description")}
              className="input w-full max-w-xs px bg-white font-bold text-black font-PTSerif my-2 mx-auto"
            />
            <p className="text-red-500">{errors.description?.message}</p>
            <input
              type="submit"
              className="btn bg-white hover:bg-slate-300 text-black fixed bottom-6 right-24 "
            />
          </form>
          <form method="dialog" className=" modal-action">
            <button className="btn bg-white text-black hover:bg-slate-300">
              close
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
};
