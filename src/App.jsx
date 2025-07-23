import { useState, useEffect } from "react";
import axios from "axios";

import FormPost from "./components/FormPost";

function App() {
  const [formPost, setFormPost] = useState({
    author: "",
    title: "",
    post: "",
    public: false,
  });

  function handleFormPostChange(e) {
    e.preventDefault();
    const key = e.target.name;
    const val =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    setFormPost({
      ...formPost,
      [key]: val,
    });
  }

  // useEffect(() => {
  //   axios
  //     .get("")
  //     .then((res) => setFormPost(res.data))
  //     .catch((err) => console.error(err));
  // }, []);

  return (
    <>
      {/* container  */}
      <div className="container mb-3">
        <span className="d-flex flex-column align-items-center">
          <h1>Write your first BlogPost!</h1>
        </span>
        <FormPost formPost={formPost} setFormPost={setFormPost} />
      </div>
      {/* closing tag for container */}
    </>
  );
}

export default App;
