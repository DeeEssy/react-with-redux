import React from "react";
import "./App.css";
import { connect } from "react-redux";
import {
  getPosts as getPostsAction,
  deleteCurrentPost as deleteCurrentPostAction,
} from "./redux/modules/posts";
import Post from "./components/Post";
import CreatePost from "./components/CreatePost";

function App({ posts, getPosts, deleteCurrentPost }) {
  React.useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <div className="App">
      <CreatePost />
      {posts.length &&
        posts.map((post) => (
          <Post
            id={post.id}
            key={post.id}
            deletePost={deleteCurrentPost}
            title={post.title}
            body={post.body}
          />
        ))}
    </div>
  );
}

export default connect(({ posts }) => ({ posts: posts.posts }), {
  getPosts: getPostsAction,
  deleteCurrentPost: deleteCurrentPostAction,
})(App);
