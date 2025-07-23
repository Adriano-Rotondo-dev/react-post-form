import { useState } from "react";
import axios from "axios";

function App() {
  return (
    <>
      {/* container  */}
      <div className="container mb-3">
        {/* card section  */}
        <div className="card m-3">
          {/* start of imput section  */}
          <div className="p-3">
            <label htmlFor="" className="form-label">
              Author
            </label>
            <input
              type="text"
              className="form-control"
              name="author"
              id="author"
              aria-describedby="helpId"
              placeholder="Type here..."
            />
            <small id="helpId" className="form-text text-muted">
              Type here the author's name
            </small>
          </div>
          <div className="p-3">
            <label htmlFor="" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              name="title"
              id="title"
              aria-describedby="helpId"
              placeholder="Type here..."
            />
            <small id="helpId" className="form-text text-muted">
              Type here the post's title
            </small>
          </div>
          <div className="p-3">
            <label htmlFor="" className="form-label">
              Content
            </label>
            <input
              type="text"
              className="form-control"
              name="post"
              id="post"
              aria-describedby="helpId"
              placeholder="Type here..."
            />
            <small id="helpId" className="form-text text-muted">
              Type here your post
            </small>
          </div>
          {/* end of imput section  */}
          {/* checkbox section  */}
          <div class="form-check m-3">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id=""
              checked
            />
            <label class="form-check-label" for="">
              Is your post public?
            </label>
          </div>
        </div>
        {/* closing tag for card */}
      </div>
      {/* closing tag for container */}
    </>
  );
}

export default App;
