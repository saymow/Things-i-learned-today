import React from "react";

import { Link, refreshLinks } from "./LinkList";

const LinkCard: React.FC<{ link: Link; refresh: refreshLinks }> = ({
  link,
  refresh,
}) => {
  const archiveLink = async (_id: string) => {
    link.archived = !link.archived;

    try {
      await fetch("/.netlify/functions/updateLink", {
        method: "PUT",
        body: JSON.stringify(link),
      });
      refresh();
    } catch (error) {
      console.error("error:", error);
    }
  };

  const deleteLink = async (_id: string) => {
    try {
      await fetch("/.netlify/functions/deleteLink", {
        method: "PUT",
        body: JSON.stringify({ _id }),
      });
      refresh();
    } catch (error) {
      console.error("error:", error);
    }
  };

  return (
    <div className="card mb-4">
      <div className="card-header">{link.name}</div>
      <div className="card-body">
        <p>{link.description}</p>
        <a href={link.url}>{link.url}</a>
      </div>
      <div className="card-footer">
        <button
          className="btn btn-warning mr-2"
          onClick={() => archiveLink(link._id)}
        >
          {link.archived ? "Desarchive" : "Archive"}
        </button>
        <button className="btn btn-danger" onClick={() => deleteLink(link._id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default LinkCard;
