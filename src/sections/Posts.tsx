"use client";
import React, { useEffect, useState } from "react";
// import { useRouter } from 'next/navigation'
import "./post.css";
import { Loader } from "lucide-react";
import PostItemCardOne from "@/components/PostItemCardOne";

interface PostItem {
  _id: string;
  title: string;
  img: string;
  category: string;
  date: string;
  brief: string;
  avatar: string;
  author: string;
}

const Posts = () => {
  // const router = useRouter()
  const [items, setItems] = useState<PostItem[]>([]);
  const [loading, setLoading] = useState(true);

  const getItemsData = async () => {
    try {
      const data = await fetch(`/api/postitems`);
      const res = await data.json();
      // console.log(res[0])
      //res returns an array of object..but if u use typeof res it returns an object because it itself is an object
      setItems(res);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getItemsData();
  }, []);
  // console.log(items);
  return (
    <section id="posts" className="posts">
      <div className="container" data-aos="fade-up">
        <div className="row g-5">
          <div className="col-lg-4"></div>

          <div className="col-lg-8">
            <div className="row g-5">
              <div className="col-lg-4 border-start custom-border">
                {loading ? (
                  <span className="d-flex justify-content-center align-items-center">
                    <Loader size={40} />
                    {`${console.log("loading")}`}
                  </span>
                ) : (
                  items.length > 0 &&
                  items.map((item: PostItem) => (
                    <PostItemCardOne key={item._id} large={false} item={item} />
                  ))
                )}
              </div>
            <div className="col-lg-4"></div>
            <div className="col-lg-4"></div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Posts;
