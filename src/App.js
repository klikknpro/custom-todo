import React from "react";
import axios from "axios";

const blogPosts = [
  {
    title: "title1",
    content: "content1",
    date: "date1",
  },
  {
    title: "title2",
    content: "content2",
    date: "date2",
  },
  {
    title: "title3",
    content: "content3",
    date: "date3",
  },
];

function App() {
  return (
    <div className="App">
      <div className="editor">
        <input type="text" placeholder="title" />
        <input type="text" placeholder="content" />
        <button>Post it</button>
      </div>
      <h1>Posts</h1>
      <div className="articles">
        {blogPosts.map((blogPost, index) => (
          <article key={index}>
            <h2>{blogPost.title}</h2>
            <p>{blogPost.content}</p>
            <h6>{blogPost.date}</h6>
            <input type="text" placeholder="edit this post" />
            <button>Edit</button>
            <button>Save</button>
            <button>Remove</button>
          </article>
        ))}
      </div>
    </div>
  );
}

export default App;
