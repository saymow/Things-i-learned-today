import React, { ChangeEvent, FormEvent, useState } from "react";

import { refreshLinks } from "./LinkList";

const LinkForm: React.FC<{ refresh: refreshLinks }> = ({ refresh }) => {
  const [form, setForm] = useState({
    name: "",
    url: "",
    description: "",
  });

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { value, name } = event.target;

    setForm({
      ...form,
      [name]: value,
    });
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    try {
      await fetch("/api/createLink", {
        method: "POST",
        body: JSON.stringify(form),
      });

      setForm({
        name: "",
        url: "",
        description: "",
      });

      refresh();
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="card">
      <div className="card-header">Add link</div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              value={form.name}
              className="form-control"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="url">Url</label>
            <input
              id="url"
              name="url"
              value={form.url}
              className="form-control"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              id="description"
              name="description"
              value={form.description}
              className="form-control"
              onChange={handleInputChange}
            />
          </div>
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default LinkForm;
