import React, { useEffect, useState } from "react";
import LinkList from "./components/LinkList";
import LinkForm from "./components/LinkForm";

function App() {
  const [links, setLinks] = useState([]);

  async function loadLinks() {
    try {
      const response = await fetch("/api/getLinks");
      const links = await response.json();

      console.log(links);

      setLinks(links);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    loadLinks();
  }, []);

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Links application</h1>
      <LinkForm refresh={loadLinks} />
      <LinkList Links={links} refresh={loadLinks} />
    </div>
  );
}

export default App;
