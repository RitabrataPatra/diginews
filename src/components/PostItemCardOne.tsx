import React from "react";
import "./postItemOne.css"
import Link from "next/link";
import Image from "next/image";
import { Dot } from "lucide-react";

interface PostItemOne {
  _id: string;
  title: string;
  img: string;
  category: string;
  date: string;
  brief: string;
  avatar: string;
  author: string;
}

const PostItemCardOne = ({
  large,
  item,
}: {
  large: boolean;
  item: PostItemOne;
}) => {
  return (
    <div className={`post-entry-1 ${large ? "lg" : ""}`}>
      <Link href={`/postitems/${item._id}`} >
        <Image
          src={`/${item.img}`}
          width={large ? 500 : 300}
          height={large ? 300 : 200}
          alt="cardImage"
          className="img-fluid"
        />
      </Link>
      <div className="post-meta">
        <span className="date">{item.category}</span>
        <span className="mx-1">
          <Dot />
        </span>
        <span>{new Date(item.date).toLocaleDateString("en-US")}</span>
      </div>

      <h2>
        <Link href={`/postitems/${item._id}`}>{item.title}</Link>
      </h2>
      {large ? (
        <>
          <p className="mb-4 d-block">{item.brief}</p>
          <div className="author d-flex align-items-center">
            <div className="photo">
              <Image
                src={`/${item.avatar}`}
                width={50}
                height={50}
                alt="avatar"
                className="img-fluid"
              ></Image>
            </div>
            <div className="name">
              <h3 className="m-0 p-0">{item.author}</h3>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default PostItemCardOne;
