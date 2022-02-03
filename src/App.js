import React, { useState } from "react";
import axios from "axios";

const BlogPost = ({ blogPost, editBlogPost, removeBlogPost }) => {
  const [editContentValue, setEditContentValue] = useState("");
  const [editTitleValue, setEditTitleValue] = useState("");

  const editContent = (e) => {
    setEditContentValue(e.target.value);
  };

  const editTitle = (e) => {
    setEditTitleValue(e.target.value);
  };

  return (
    <article>
      <h2>{blogPost.title}</h2>
      <p>{blogPost.content}</p>
      <h6>{blogPost.date}</h6>
      <input type="text" value={editContentValue} onChange={editContent} placeholder="edit this post's content" />
      <input type="text" value={editTitleValue} onChange={editTitle} placeholder="edit this post's title" />
      <button onClick={() => editBlogPost(blogPost.date, editTitleValue, editContentValue)}>Edit</button>
      <button onClick={() => removeBlogPost(blogPost.date)}>Remove</button>
    </article>
  );
};

function App() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [titleValue, setTitleValue] = useState("");
  const [contentValue, setContentValue] = useState("");

  const titleInput = (e) => {
    setTitleValue(e.target.value);
  };

  const contentInput = (e) => {
    setContentValue(e.target.value);
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
    setBlogPosts(list);
  };

  const editBlogPost = (date, editTitleValue, editContentValue) => {
    const list = [];
    for (const post of blogPosts) {
      if (post.date !== date) {
        list.push(post);
      } else {
        list.push({
          title: editTitleValue,
          content: editContentValue,
          date: post.date,
        });
      }
    }
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
          <BlogPost key={index} blogPost={blogPost} editBlogPost={editBlogPost} removeBlogPost={removeBlogPost} />
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
