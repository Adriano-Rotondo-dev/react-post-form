import { useState } from "react";
// import axios from "axios";

import FormPost from "./components/FormPost";

function App() {
  const [formSubmit, setFormSubmit] = useState({
    author: "",
    title: "",
    post: "",
    public: false,
  });
  function handleFormSubmit(e) {
    const key = e.target.name;
    const val =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    console.log(e.target.value);

    setFormSubmit({
      ...formSubmit,
      [key]: val,
    });
  }

  return (
    <>
      {/* container  */}
      <div className="container mb-3">
        <span className="d-flex flex-column align-items-center">
          <h1>Write your first BlogPost!</h1>
        </span>
        <FormPost formSubmit={formSubmit} setFormSubmit={setFormSubmit} />
      </div>
      {/* closing tag for container */}
    </>
  );
}

export default App;
