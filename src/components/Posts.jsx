import { useState, useEffect } from "react";
import Post from "./Post";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(function () {
    fetch(API_URL)
      .then(function (res) {
        return res.json();
      })
      .then(function (posts) {
        setPosts(posts);
      })
      .catch(function (error) {
        setError(error.message);
      })
      .finally(function () {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <div>
      {posts.map(function (post) {
        return <Post key={post.id} {...post} />;
      })}
    </div>
  );
}

export default Posts;
