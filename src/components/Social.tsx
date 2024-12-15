import React from "react";
import "./sci.css";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import { scis } from "@/data/data";
import Link from "next/link";
const Social = () => {
  return (
    <>
      {scis.map((items) => (
        <Link href={items.link} key={items.id} className="mx-2" target="_blank">
          {
            items.icon === "TwitterIcon" ? (
              <TwitterIcon size={20} />
            ) : items.icon === "LinkedinIcon" ? (
              <LinkedinIcon size={20} />
            ) : (
              <GithubIcon size={20} />
            )
          }
        </Link>
      ))}
    </>
  );
};

export default Social;
