import React, { useState } from "react";
import axios from "axios";

function App() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [titleValue, setTitleValue] = useState("");
  const [contentValue, setContentValue] = useState("");
  const [editContentValue, setEditContentValue] = useState("");

  const titleInput = (e) => {
    setTitleValue(e.target.value);
  };

  const contentInput = (e) => {
    setContentValue(e.target.value);
  };

  const editContent = (e) => {
    setEditContentValue(e.target.value);
  };

  const actualDate = new Date().toString();

  const addBlogPost = () => {
    setBlogPosts([...blogPosts, { title: titleValue, content: contentValue, date: actualDate }]);
    setTitleValue("");
    setContentValue("");
  };

  const deleteAllPosts = () => {
    setBlogPosts([]);
  };

  const removeBlogPost = (date) => {
    const list = blogPosts.filter((post) => post.date !== date);
    // const list = [];
    // for (let post of blogPosts) {
    //   if (post.date !== date) {
    //     list.push(post);
    //   }
    // }
    setBlogPosts(list);
  };

  const saveBlogPost = (date) => {
    const list = blogPosts.map((post) => {
      if (post.date === date) {
        post.content = editContentValue;
      }
      return post;
    });
    setBlogPosts(list);
  };

  return (
    <div className="App">
      <div className="editor">
        <input type="text" placeholder="title" value={titleValue} onChange={titleInput} />
        <input type="text" placeholder="content" value={contentValue} onChange={contentInput} />
        <button onClick={addBlogPost}>Post it</button>
      </div>
      <h1>Posts</h1>
      <div className="articles">
        {blogPosts.map((blogPost, index) => (
          <article key={index}>
            <h2>{blogPost.title}</h2>
            <p>{blogPost.content}</p>
            <h6>{blogPost.date}</h6>
            <input type="text" value={editContentValue} onChange={editContent} placeholder="edit this post" />
            <button onClick={() => saveBlogPost(blogPost.date)}>Save</button>
            <button onClick={() => removeBlogPost(blogPost.date)}>Remove</button>
          </article>
        ))}
      </div>
      <button onClick={deleteAllPosts}>Delete All</button>
    </div>
  );
}

export default App;

/*
if (post.date === date) {
        const updatedItem = {
          ...post,
          content: editContentValue,
        };
        return updatedItem;
      }
      return post;
*/
