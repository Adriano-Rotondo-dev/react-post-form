export default function FormPost({ formPost, setFormPost }) {
  return (
    <>
      {/* card section  */}
      <div className="card m-3 p-3">
        {/* start of imput section  */}
        <div className="p-3">
          <label htmlFor="author" className="form-label">
            Author
          </label>
          <input
            type="text"
            className="form-control"
            name="author"
            id="author"
            aria-describedby="helpId"
            placeholder="Type here..."
            value={formPost.author}
            onChange={(e) =>
              setFormPost({ ...formPost, author: e.target.value })
            }
          />
          <small id="helpId" className="form-text text-muted">
            Type here the author's name
          </small>
        </div>
        <div className="p-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            name="title"
            id="title"
            aria-describedby="helpId"
            placeholder="Type here..."
            value={formPost.title}
            onChange={(e) =>
              setFormPost({ ...formPost, title: e.target.value })
            }
          />
          <small id="helpId" className="form-text text-muted">
            Type here the post's title
          </small>
        </div>
        <div className="p-3">
          <label htmlFor="post" className="form-label">
            Post Content
          </label>
          <textarea
            className="form-control "
            id="post"
            name="post"
            rows="3"
            placeholder="Type here..."
            value={formPost.post}
            onChange={(e) => setFormPost({ ...formPost, post: e.target.value })}
          ></textarea>
        </div>
        {/* end of imput section  */}
        {/* checkbox section  */}
        <div className="form-check m-3">
          <input
            className="form-check-input"
            type="checkbox"
            value="public"
            id="public"
          />
          <label className="form-check-label" htmlFor="public">
            Should your post be public?
          </label>
        </div>
        {/* closing tag for checkbox */}
        {/* btn section */}
        <div className="container d-flex justify-content-center">
          <button type="submit" className="btn btn-primary">
            Submit your post
            <i className="fa-regular fa-envelope fa-rotate-by"></i>
          </button>
        </div>
        {/* closing tag for btn */}
      </div>
    </>
  );
}
