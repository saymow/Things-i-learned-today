import React from "react";
import LinkCard from "./LinkCard";

export type Link = {
  _id: string;
  url: string;
  name: string;
  description: string;
  archived: boolean;
};

export type refreshLinks = () => Promise<void>;

const LinkList: React.FC<{ Links: Link[]; refresh: refreshLinks }> = ({
  Links,
  refresh,
}) => {
  return (
    <div>
      <h2 className="my-4">Links</h2>
      {Links.filter(({ archived }) => !archived).map((Link) => (
        <LinkCard key={Link._id} link={Link} refresh={refresh}></LinkCard>
      ))}

      <h2 className="my-4">Archive Links</h2>
      {Links.filter(({ archived }) => archived).map((Link) => (
        <LinkCard key={Link._id} link={Link} refresh={refresh}></LinkCard>
      ))}
    </div>
  );
};

export default LinkList;
