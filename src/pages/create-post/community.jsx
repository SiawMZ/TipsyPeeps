//community page
import React, { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore"; //get dtabase from the firestore
import { db } from "../../config/firebase";
import { CreateForm } from "./createForm";
import { PostDisplay } from "./postDisplay";

export const Community = () => {
  const [postLists, setPostLists] = useState(null);
  const postRef = collection(db, "posts");

  const getPosts = async () => {
    const data = await getDocs(postRef);
    setPostLists(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="flex flex-row">
      <div className="basis-1/5 h-screen">
        <CreateForm />
      </div>

      <div className="basis-4/5">
        <div className="relative left-10 top-24">
          <div className="flex flex-wrap gap-5">
            {postLists?.map((post) => (
              <PostDisplay post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
