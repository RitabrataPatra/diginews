"use client";
import React, { useEffect, useState } from "react";
import "./post.css";
import { Loader } from "lucide-react";
import PostItemCardOne from "@/components/PostItemCardOne";
import Link from "next/link";

interface PostItem {
  _id: string;
  title: string;
  img: string;
  category: string;
  date: string;
  brief: string;
  avatar: string;
  author: string;
  trending: boolean;
  topNews: boolean;

}

const Posts = () => {
  const [items, setItems] = useState<PostItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [itemOne, setItemOne] = useState<PostItem | null>(null);
  const [error, setError] = useState<string | null>(null);

  const getItemsData = async () => {
    try {
      const data = await fetch(`/api/postitems`);
      const res = await data.json();
      setItems(res);
      // console.log(res[0].date);
      if (res.length > 0) {
        
        setItemOne(res[0]); // Set the first item by default
      }
    } catch (error) {
      console.error(error);
      setError("Failed to load posts. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const getItemsDataById = async (id: string) => {
    try {
      const response = await fetch(`/api/postitems/${id}`);
      const data = await response.json();
      setItemOne(data);
    } catch (err) {
      console.error(err);
      setError("Failed to load the selected post. Please try again later.");
    }
  };

  useEffect(() => {
    getItemsData();
  }, []);
  const handleSelectItem = (id: string) => {
    getItemsDataById(id);
  };


  return (
    <section id="posts" className="posts">
      <div className="container" data-aos="fade-up">
        {error ? (
          <div className="text-center text-danger">{error}</div>
        ) : (
          <div className="row g-5">
            <div className="col-lg-4 border-end">
              {itemOne && <PostItemCardOne large={true} item={itemOne} />}
            </div>
          
            <div className="col-lg-8">
              <div className="row g-5">
                <div className="col-lg-4 border-start custom-border">
                  {loading ? (
                    <div className="d-flex justify-content-center align-items-center">
                      <Loader size={40} />
                    </div>
                  ) : (
                    items.length > 0 &&
                    items
                    .filter((item : PostItem)=> !item.trending && !item.topNews)
                    .slice(0 , 3)
                    .map((item: PostItem) => (
                      <PostItemCardOne key={item._id} large={false} item={item} />
                    ))
                  )}
                </div>

                <div className="col-lg-4 border-start custom-border" >
                {loading ? (
                    <div className="d-flex justify-content-center align-items-center">
                      <Loader size={30} />
                    </div>
                  ) : (
                    items.length > 0 &&
                    items
                    .filter((item : PostItem)=> !item.trending && !item.topNews)
                    .slice(3 , 6)
                    .map((item: PostItem) => (
                      <PostItemCardOne key={item._id} large={false} item={item} />
                    ))
                  )}
                </div>

                <div className="col-lg-4">
                  {/* Trending */}
                  <div className="trending">
                    <h3>Trending</h3>
                    <ul className="trending-post">
                      {
                        items && items.length > 0 && 
                        items.filter((item: PostItem) => item.trending)
                        .map((item: PostItem) => (
                          <li key={item._id} className="list-decoration-none">
                            <Link href={`/postitems/${item._id}`} onClick={() => handleSelectItem(item._id)}>
                              <h3>{item.title}</h3>
                              <span className="author">{item.author}</span>
                            </Link>
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Posts;
