import { useState } from "react";
import axios from "axios";

import FormPost from "./components/FormPost";

function App() {
  const [formPost, setFormPost] = useState({
    author: "",
    title: "",
    body: "",
    public: false,
  });

  function handleFormPostChange(e) {
    const key = e.target.name;
    const val =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    setFormPost({
      ...formPost,
      [key]: val,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formPost);
    axios
      .post("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts", formPost)
      .then(
        (res) => console.log("Hai inviato i file all'endpoint", res.data),
        alert("Hai inviato i dati!")
      )
      .catch((err) => console.error(err));
  }

  return (
    <>
      {/* container  */}
      <div className="container mb-3">
        <span className="d-flex flex-column align-items-center">
          <h1>Write your first BlogPost!</h1>
        </span>
        <FormPost
          formPost={formPost}
          handleFormPostChange={handleFormPostChange}
          handleSubmit={handleSubmit}
        />
      </div>
      {/* closing tag for container */}
    </>
  );
}

export default App;
